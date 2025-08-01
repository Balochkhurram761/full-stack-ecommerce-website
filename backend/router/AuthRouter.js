import express from "express";
import {
  dealget,
  deleteProduct,
  getoutdoor,
  getproduct,
  getProducts,
  login,
  off,
  recommendedprodut,
  Register,
  singleproduct,
  UpdatedProduct,
  uploadproduct,
} from "../controller/AuthController.js";
import { adminOnly, tokenverify } from "../middleware/AuthMiddleWares.js";
import { upload } from "../middleware/UploadMiddleWare.js";
const router = express.Router();

router.post("/register", Register);
router.post("/login", login);
router.post(
  "/upload",
  upload.array("images", 5),
  tokenverify,
  adminOnly,
  uploadproduct
);
router.get("/getdeal", dealget);
router.get("/recommended", recommendedprodut);
router.get("/getoutdoor", getoutdoor);
router.get("/getoff", off);
router.get("/getproduct", tokenverify, adminOnly, getproduct);
router.get("/getproducts", getProducts);
router.delete("/deleteproduct/:id", tokenverify, adminOnly, deleteProduct);
router.get("/getproducts/:id", singleproduct)
router.put(
  "/singleproduct/:id",
  upload.array("images"),
  tokenverify,
  adminOnly,
  UpdatedProduct
);

export default router;
