const mongoose = require('mongoose');
const Listing = require('../model/Listing');

class Utils_Listing{

    async createNew (params, res) {
        const newListing = new Listing({
            sellerId: params.sellerId,
            realtorId: params.realtorId,
            addressLine: params.addressLine,
            addressCity: params.addressCity,
            addressState: params.addressState,
            addressCountry: params.addressCountry,
            addressZipcode: params.addressZipcode,
            photos: params.photos,
            description: params.description,
            sqFT: params.sqFT,
            carpetArea: params.carpetArea,
            woodenFlooringArea: params.woodenFlooringArea,
            homeType: params.homeType,
            bedrooms: params.bedrooms,
            bathrooms: params.bathrooms,
            pool: params.pool,
            parkingType: params.parkingType,
            parkingSpaces: params.parkingSpaces,
            flooringType: params.flooringType,
            otherAmenities: params.otherAmenities,
            listingType: params.listingType
        });

        try {
            await newListing.save();
            return res.status(200).json({
                message: "Listing registered!",
                success: true
            });
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                message: "something went wrong",
                success: false
            });
        }
        res.end();
    }

    async searchQuery(params, res) {
        try {
          console.log("we are in search");
          for(var key in params){
            console.log(key);
            params[key] = (params[key].length <= 0) ? null : params[key];
            if(params[key]==null){
              delete params[key];
            }
          } 

            console.log(params);
            let query = this.getQuery(params);
            console.log(query);
            let listing = await Listing.find(query).exec();
            console.log("after listing");
            if (listing.length > 0) {
                return res.status(200).json({
                    message: "Listing found!",
                    success: true,
                    data: listing
                });
            } else {
                return res.status(404).json({
                    message: "Listing not found!",
                    success: false
                });
            }
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                message: "something went wrong",
                success: false
            });
        }
        res.end();
    }

    async findById (id, res) {
        try {
            let listing = await Listing.findById(id).exec();
            return res.status(200).json({
                message: "Listing found!",
                success: true,
                data: listing
            });
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                message: "something went wrong",
                success: false
            });
        }
        res.end();
    }

    async findByParams (params, res) {
        try {
            let listing = await Listing.find(params).exec();
            if (listing.length > 0) {
                return res.status(200).json({
                    message: "Listing found!",
                    success: true,
                    data: listing
                });
            } else {
                return res.status(404).json({
                    message: "Listing not found!",
                    success: false
                });
            }

        } catch (err) {
            console.log(err);
            return res.status(500).json({
                message: "something went wrong",
                success: false
            });
        }
        res.end();
    }

    async deleteListing(params, res) {
        try {
            let query = {};
            if ('_id' in params) {
                query['_id'] = params._id;
            } else {
                return res.status(500).json({
                    message: "_id not found in query",
                    success: false
                });
            }

            let listng = await Listing.findOneAndDelete(params).exec();
            if (listng) {
                return res.status(200).json({
                    message: "Listing Deleted!",
                    success: true
                });
            } else {
                return res.status(500).json({
                    message: "Listing not found",
                    success: false
                });
            }
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                message: "something went wrong",
                success: false
            });
        }
        res.end();
    }


    async updateById(listingIdVal, params, res) {
        try {
            const doc = await Listing.findOne({ _id: listingIdVal });
            if (doc && Object.keys(doc).length > 0) {
                await doc.updateOne(params);
                return res.status(200).json({
                    message: "Listing Updated!",
                    success: true
                });
            } else {
                return res.status(404).json({
                    message: "Listing not found!",
                    success: false
                });
            }
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                message: "something went wrong",
                success: false
            });
        }
        res.end();
    }


    getQuery(params) {
        let query = {};
        if ('_id' in params) {
            query['_id'] = params._id;
        }
        if ('bedrooms' in params) {
            query['bedrooms'] = { $gte: params.bedrooms };
        }
        if ('bathrooms' in params) {
            query['bathrooms'] = { $gte: params.bathrooms };
        }
        if ('sqFT' in params) {
            query['sqFT'] = { $gte: params.sqFT };
        }
        if ('addressZipcode' in params) {
            query['addressZipcode'] = params.addressZipcode;
        }
        if ('addressLine' in params) {
            query['addressLine'] = params.addressLine;
        }
        if ('addressCity' in params) {
            query['addressCity'] = params.addressCity;
        }
        if ('addressState' in params) {
            query['addressState'] = params.addressState;
        }
        if ('addressCountry' in params) {
            query['addressCountry'] = params.addressCountry;
        }
        if ('listingType' in params) {
            query['listingType'] = params.listingType;
        }
        if ('parkingType' in params) {
            query['parkingType'] = params.parkingType;
        }
        if ('flooringType' in params) {
            query['flooringType'] = params.flooringType;
        }
        if ('price' in params) {
            query['price'] = { $gte: params.price };
        }
        if ('homeType' in params) {
            query['homeType'] = params.homeType;
        }
        if ('pool' in params) {
            query['pool'] = params.pool;
        }
        if ('isPurchaseComplete' in params) {
            query['isPurchaseComplete'] = params.isPurchaseComplete;
        }
        if ('yearBuilt' in params) {
            query['yearBuilt'] = { $gte: params.yearBuilt };
        }
        if ('pool' in params) {
            query['pool'] = params.pool;
        }
        if ('parkingType' in params) {
            query['parkingType'] = params.parkingType;
        }
        if ('parkingSpaces' in params) {
            query['parkingSpaces'] = { $gte: params.parkingSpaces };
        }
        if ('otherAmenities' in params) {
            query['otherAmenities'] = { $gte: params.otherAmenities };
        }

        return query;
    }
}


module.exports = Utils_Listing;
