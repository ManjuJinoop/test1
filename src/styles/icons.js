import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import icoMoonConfig from '../../assets/fonts/icomoon/selection.json';


export const expoAssetId = require("../../assets/fonts/icomoon/icomoon.ttf");
export const Icon = createIconSetFromIcoMoon(icoMoonConfig, 'IcoMoon', expoAssetId);
export const icoMoonConfigSet = icoMoonConfig;

