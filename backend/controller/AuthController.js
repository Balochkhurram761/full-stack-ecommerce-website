import User from "../model/User12.js";
import { comparePassword, hashaedpassword } from "../helpers/AuthHelpers.js";
import { uservalidator } from "../validators/Validators.js";
import { genertetoken } from "../helpers/jwtHelper.js";
import ProductUser from "../model/Product.js";

export const Register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    await uservalidator.validate(req.body);
    const emailexit = await User.findOne({ email });
    if (emailexit) {
      res.status(400).send({
        message: "email already is registered",
        success: false,
      });
    }
    const hashpassword = await hashaedpassword(password);

    const user = new User({
      name,
      email,
      password: hashpassword,
      role: "user",
    });
    await user.save();
    res.status(201).send({
      message: "User is registered successfully",
      success: true,
      user,
    });
  } catch (error) {
    res.status(400).send({
      message: error.message || "Server Error",
      success: false,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send({
        message: "Email or password is missing",
        success: false,
      });
    }

    const existemail = await User.findOne({ email });
    if (!existemail) {
      return res.status(404).send({
        message: "Email does not exist. Please register first.",
        success: false,
      });
    }

    const matched = await comparePassword(password, existemail.password);
    if (!matched) {
      return res.status(401).send({
        message: "Invalid password",
        success: false,
      });
    }

    const token = genertetoken(existemail);

    res.status(200).send({
      message: "Login successful",
      success: true,
      user: {
        id: existemail._id,
        firstname: existemail.firstname,
        lastname: existemail.lastname,
        email: existemail.email,
        role: existemail.role,
      },
      token,
    });
  } catch (error) {
    console.error("Login Error:", error.message);
    res.status(500).send({
      message: "Internal Server Error",
      success: false,
    });
  }
};

export const uploadproduct = async (req, res) => {
  try {
    const {
      sku,
      category,
      title,
      desc,
      oldprice,
      minNegotiablePrice,
      maxNegotiablePrice,
      type,
      material,
      design,
      customization,
      protection,
      warranty,
      stock,
      color,
      seller,
      recommended,
      price,
      rating,
      sold,
      review,
      size,
      off,
    } = req.body;

    let sizes = [];

    if (typeof size === "string") {
      sizes = size.split(",").map((e) => e.trim().toLowerCase());
    } else if (Array.isArray(size)) {
      sizes = size.map((e) => String(e).trim().toLowerCase());
    }

    if (!req.files || req.files.length === 0) {
      return res.status(400).send({
        message: "No images uploaded",
        success: false,
      });
    }

    // Convert file paths
    const imagePaths = req.files.map((file) =>
      `uploads/${file.filename}`.replace(/\\/g, "/")
    );

    // Create new product without size
    const product = new ProductUser({
      sku,
      category,
      title,
      desc,
      oldprice,
      minNegotiablePrice,
      maxNegotiablePrice,
      type,
      material,
      design,
      customization,
      protection,
      warranty,
      stock,
      color,
      seller,
      recommended,
      price,
      rating,
      sold,
      review,
      size: sizes,
      off,
      images: imagePaths,
    });

    await product.save();

    res.status(201).send({
      message: "Product uploaded successfully",
      success: true,
      product,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message || "Internal server error",
      success: false,
      error,
    });
  }
};

export const getproduct = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5; // Default limit = 5
    const skip = (page - 1) * limit;

    const totalProducts = await ProductUser.countDocuments();
    const products = await ProductUser.find().skip(skip).limit(limit);

    res.send({
      success: true,
      message: "Products fetched successfully",
      ProductUser: products,
      totalProducts,
      totalPages: Math.ceil(totalProducts / limit),
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};
export const getProducts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5; // Default limit = 5
    const skip = (page - 1) * limit;

    const totalProducts = await ProductUser.countDocuments();
    const products = await ProductUser.find().skip(skip).limit(limit);

    res.send({
      success: true,
      message: "Products fetched successfully",
      ProductUser: products,
      totalProducts,
      totalPages: Math.ceil(totalProducts / limit),
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};
export const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await ProductUser.findByIdAndDelete(id);
    res.send({
      success: true,
      message: "Products Deleted Successfully",
      product,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};
export const getSingleProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const update = req.body; // or explicitly pick fields

    const product = await ProductUser.findOneAndUpdate(
      { _id: id },
      update,
      { new: true } // or { returnDocument: 'after' }
    );

    if (!product) {
      return res.status(404).send({
        success: false,
        message: "Product not found",
      });
    }

    res.send({
      success: true,
      message: "Product updated successfully",
      product,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const UpdatedProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = { ...req.body };

    if (req.files?.length > 0) {
      const imagePaths = req.files.map((file) => file.originalname);
      updateData.images = imagePaths;
    }
    if (updateData.size && Array.isArray(updateData.size)) {
      updateData.size = updateData.size.map((s) => s.toLowerCase());
    }

    const updated = await ProductUser.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true, // Ensures schema validation is run
    });

    if (!updated) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product updated", product: updated });
  } catch (err) {
    console.error("Update error:", err); // <--- Add this to see full error in terminal
    res.status(500).json({ message: err.message || "Server Error" });
  }
};

export const dealget = async (req, res) => {
  try {
    const filterData = await ProductUser.find({ category: "Home interiors" });
    res.status(201).send({
      message: "deals data is fetched",
      success: true,
      ProductUser: filterData,
    });
  } catch (error) {
    res.status(500).send({
      message: "server Error",
      success: false,
    });
  }
};

export const recommendedprodut = async (req, res) => {
  try {
    const filterData = await ProductUser.find({ recommended: true });
    res.status(201).send({
      message: "deals data is fetched",
      success: true,
      ProductUser: filterData,
    });
  } catch (error) {
    res.status(500).send({
      message: "server Error",
      success: false,
    });
  }
};

export const getoutdoor = async (req, res) => {
  try {
    const filterData = await ProductUser.find({
      category: "computer and teach",
    });
    res.status(201).send({
      message: "deals data is fetched",
      success: true,
      ProductUser: filterData,
    });
  } catch (error) {
    res.status(500).send({
      message: "server Error",
      success: false,
    });
  }
};

export const off = async (req, res) => {
  try {
    const discountedProducts = await ProductUser.find({
      off: { $gt: 0 }, // sirf wo products jinka discount 0 se zyada hai
    });

    res.status(200).send({
      success: true,
      message: "Discounted products fetched successfully",
      ProductUser: discountedProducts,
    });
  } catch (error) {
    console.error("Fetch error:", error);
    res.status(500).send({
      success: false,
      message: "Server error while fetching discounted products",
    });
  }
};


export const singleproduct=async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await ProductUser.findById(productId); 

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
     res.status(200).send({
      success: true,
      message: "Discounted products fetched successfully",
      product
    });
} catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
}
