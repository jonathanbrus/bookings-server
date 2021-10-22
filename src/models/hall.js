import { model, Schema } from "mongoose";

const schema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
  },
  description: {
    type: Schema.Types.String,
    required: true,
  },
  images: [
    {
      type: Schema.Types.String,
      required: true,
    },
  ],
  state: {
    type: Schema.Types.String,
    required: true,
  },
  city: {
    type: Schema.Types.String,
    required: true,
  },
  detailAddress: {
    type: Schema.Types.String,
    required: true,
  },
  geoPoint: {
    lat: {
      type: Schema.Types.Number,
      required: true,
    },
    long: {
      type: Schema.Types.Number,
      required: true,
    },
  },
  venueType: {
    type: Schema.Types.String,
    default: "Mandapam",
  },
  facilities: {
    mainHall: {
      ac: {
        type: Schema.Types.Boolean,
        default: false,
      },
      seatingCapacity: {
        type: Schema.Types.Number,
        required: true,
      },
      floatingCapacity: {
        type: Schema.Types.Number,
        required: true,
      },
    },
    diningHall: {
      ac: {
        type: Schema.Types.Boolean,
        default: false,
      },
      seatingCapacity: {
        type: Schema.Types.Number,
        required: true,
      },
      hallLevel: {
        type: Schema.Types.String,
        default: "Ground",
      },
      foodAndService: {
        allowOtherVendor: {
          type: Schema.Types.Boolean,
          default: true,
        },
        allowNonVeg: {
          type: Schema.Types.Boolean,
          default: true,
        },
        buffetCrockeryAvilable: {
          type: Schema.Types.Boolean,
          default: true,
        },
      },
    },
    rooms: {
      ac: {
        type: Schema.Types.Boolean,
        default: false,
      },
      noOfRooms: {
        type: Schema.Types.Number,
        default: 6,
      },
      noOfAcRooms: {
        type: Schema.Types.Number,
        default: 6,
      },
    },
    decorAndRitual: {
      allowOtherVendor: {
        type: Schema.Types.Boolean,
        default: true,
      },
      allowHomam: {
        type: Schema.Types.Boolean,
        default: false,
      },
    },
    parking: {
      available: {
        type: Schema.Types.Boolean,
        default: true,
      },
      car: {
        type: Schema.Types.Number,
      },
      bike: {
        type: Schema.Types.Number,
      },
    },
  },
  rating: {
    overAllRating: {
      type: Schema.Types.Number,
      default: 3.8,
    },
    ratings: [
      {
        rating: {
          type: Schema.Types.Number,
          default: 4,
        },
        ratedBy: {
          type: Schema.Types.ObjectId,
        },
      },
    ],
  },
});

export const hallmodel = model("halls", schema);
