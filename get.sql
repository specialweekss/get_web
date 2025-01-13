/*
 Navicat Premium Data Transfer

 Source Server         : local
 Source Server Type    : MySQL
 Source Server Version : 80037
 Source Host           : localhost:3306
 Source Schema         : get

 Target Server Type    : MySQL
 Target Server Version : 80037
 File Encoding         : 65001

 Date: 14/01/2025 00:20:48
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for ans
-- ----------------------------
DROP TABLE IF EXISTS `ans`;
CREATE TABLE `ans`  (
  `get_id` int NOT NULL,
  `item_id` int NOT NULL,
  `user_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `user_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`item_id`, `user_id`, `get_id`) USING BTREE,
  INDEX `ans_get_id`(`get_id` ASC) USING BTREE,
  CONSTRAINT `ans_get_id` FOREIGN KEY (`get_id`) REFERENCES `the_get` (`get_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `item_id` FOREIGN KEY (`item_id`) REFERENCES `item` (`item_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ans
-- ----------------------------

-- ----------------------------
-- Table structure for item
-- ----------------------------
DROP TABLE IF EXISTS `item`;
CREATE TABLE `item`  (
  `item_id` int NOT NULL AUTO_INCREMENT,
  `get_id` int NOT NULL,
  `item_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `num` int NULL DEFAULT NULL,
  `take` int NULL DEFAULT 0,
  PRIMARY KEY (`item_id`, `get_id`) USING BTREE,
  INDEX `item_id`(`item_id` ASC) USING BTREE,
  INDEX `get_id`(`get_id` ASC) USING BTREE,
  CONSTRAINT `get_id` FOREIGN KEY (`get_id`) REFERENCES `the_get` (`get_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 43 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of item
-- ----------------------------

-- ----------------------------
-- Table structure for the_get
-- ----------------------------
DROP TABLE IF EXISTS `the_get`;
CREATE TABLE `the_get`  (
  `get_id` int NOT NULL AUTO_INCREMENT,
  `user_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `state` int NULL DEFAULT 0,
  PRIMARY KEY (`get_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 53 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of the_get
-- ----------------------------

SET FOREIGN_KEY_CHECKS = 1;
