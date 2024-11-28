import categoryModel from "../models/categoryModel.js"

export const createCategoryServices = async (data) => {
    try {
        const category = await categoryModel.create(data);
        return category
    } catch (error) {
        console.log('error while creating category in services' + error.message)
    }
}

export const getAllCategoryServices = async () => {
    try {
        const categories = await categoryModel.find();
        return categories;
    } catch (error) {
        console.log('error while getting all category in services' + error.message)
    }
}

export const updateCategoryServices = async (id, data) => {
    try {
        const category = await categoryModel.findByIdAndUpdate(id, data, {new : true});
        return category
    } catch (error) {
        console.log('error while ipdating category in services' + error.message)   
    }
}

export const deleteCategoryServices = async (id) => {
    try {
        const category = await categoryModel.findByIdAndDelete(id);
        return category
    } catch (error) {
        console.log('error while ipdating category in services' + error.message)   
    }
}