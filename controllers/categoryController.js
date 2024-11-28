import {
  createCategoryServices,
  deleteCategoryServices,
  getAllCategoryServices,
  updateCategoryServices,
} from "../services/categoryServices.js";

export const createCategoryController = async (req, res) => {
  try {
    const { title, imageUrl } = req.body;
    if (!title) {
      return res.status(404).json({
        success: false,
        message: "please provide all fields",
      });
    }
    const category = await createCategoryServices(req.body);
    res.status(201).json({
      success: true,
      message: "Category created successfully",
      category: category,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "error while creating category",
      error: error.message,
    });
  }
};

export const getAllCategoryController = async (req, res) => {
  try {
    const categories = await getAllCategoryServices();
    if (!categories) {
      return res.status(404).json({
        success: false,
        message: "No Category found",
      });
    }
    res.status(200).json({
      success: true,
      totalCategories: categories.length,
      gategories: categories,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "error while getting all category",
      error: error.message,
    });
  }
};

export const updateCategoryController = async (req, res) => {
  try {
    const id = req.params.id
    const { title, imageUrl } = req.body;
    const category = await updateCategoryServices(id, req.body);
    if (!category) {
        return res.status(404).json({
          success: false,
          message: "No Category found",
        });
      }
      res.status(201).json({
        success : true,
        message : "Category updated successfully",
        category : category
      })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "error while updating Category",
      error: error.message,
    });
  }
};

export const deleteCategoryController = async (req, res) => {
    try {
        const id = req.params.id;
        const category = await deleteCategoryServices(id);
        if(!category){
            return res.status(400).json({
                success : false,
                message : "Invalid Category"
            })
        }
        res.status(200).json({
            success :true,
            message : "Category deleted successfully"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "error while deleting Category",
            error: error.message,
          });
    }
}