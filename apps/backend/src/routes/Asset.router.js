import { Router } from "express";
import StatusCodes from "http-status-codes";
import AssetService from "../services/Asset.service.js";

// Constants
const router = Router();
const { OK, BAD_REQUEST, NOT_FOUND, INTERNAL_SERVER_ERROR, CREATED } =
  StatusCodes;

// Paths
const path = {
  assets: "/assets",
  asset: "/assets/:assetId",
  createAsset:"/create",
  transfer:"/transfer",
  hold:"/hold",
  unhold:"/unhold"
};

/**
 * Get single asset by id.
 */
router.get(path.asset, async (req, res) => {
  const assets = await AssetService.getById(req.params.assetId);
  return res.status(OK).json(assets);
});

/**
 * Get all assets.
 */
router.get(path.assets, async (_, res) => {
  const assets = await AssetService.get();
  return res.status(OK).json(assets);
});

/**
 * Create asset.
 */
router.post(path.createAsset, async (req, res) => {
  try {
    const asset = await AssetService.create(req.body);
    return res.status(CREATED).json(asset);
  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR).json(error);
  }
});


/**
 * Transfer
 */
 router.post(path.transfer, async (req, res) => {
  const assets = await AssetService.transfer(req.body);
  return res.status(OK).json(assets);
});


/**
 * Hold
 */
 router.post(path.hold, async (req, res) => {
  const assets = await AssetService.transfer(req.body);
  return res.status(OK).json(assets);
});


/**
 * Unhold
 */
 router.post(path.unhold, async (req, res) => {
  const assets = await AssetService.transfer(req.body);
  return res.status(OK).json(assets);
});
// /**
//  * Update asset.
//  */
// router.put(path.asset, async (req, res) => {
//   const assetId = req.params.assetId;
//   if (assetId) {
//     const asset = await AssetService.update(assetId);
//     return asset
//       ? res.status(OK).json(asset)
//       : res.status(NOT_FOUND).json("Asset not found");
//   }
//   return res.status(BAD_REQUEST).json("Asset id is missing");
// });



export default router;
