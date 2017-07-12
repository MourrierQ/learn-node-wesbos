const mongoose = require ('mongoose');
mongoose.Promise = global.Promise;
const slug = require ('slugs');

const storeSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: "Please enter a store name"
  },
  slug: String,
  description: {
    type: String,
    trim: true
  },
  tags: [String],
  created: {
    type: Date,
    default: Date.now
  },
  location: {
    type: {
      type: String,
      default: 'Point'
    },
    coordinates: [{
      type: Number,
      required: 'You must supply coordinates !'
    }],
    address: {
      type: String,
      required: 'You must supply an address !'
    }
  },
  photo: String,
  author: {
    type :mongoose.Schema.ObjectId,
    ref: 'User',
    required: "You must supply an author"
  }
});

//Define our indexes
storeSchema.index({
  name: 'text',
  description: 'text'
});

storeSchema.index({ location: '2dsphere'});

storeSchema.pre('save', async function(next){
  if(!this.isModified('name')){
    next();//Skip it!
    return;//Stop this function from running
  }
  this.slug = slug(this.name);
  // //Find other stores that have a slug of wes, wes-1, wes-2
  const slugRegEx = new RegExp(`^(${this.slug})((-[0-9]*$)?)$`, 'i');
  const storesWithSlug = await this.constructor.find({ slug: slugRegEx});
  if(storesWithSlug.length) {
    this.slug = `${this.slug}-${storesWithSlug.length + 1}`;
  }
  next();
});

storeSchema.statics.getTagsList = function() {
  return this.aggregate([
    { $unwind: '$tags'},
    { $group : { _id:'$tags', count: {$sum: 1}}},
    { $sort: { count: -1 } }
  ]);//Method just like find, will take an array of possible operators of what we are looking for
};


// find reviews where the stores _id === reviews store property
storeSchema.virtual('reviews', {
  ref: 'Review', //What model to link
  localField: '_id', // Which field on the store
  foreignField: 'store' //Which field on the store
});

module.exports = mongoose.model('Store', storeSchema);
