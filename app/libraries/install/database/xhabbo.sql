/*
Navicat MariaDB Data Transfer

Source Server         : #Twist Stuff
Source Server Version : 50552
Source Host           : 139.59.171.102:3306
Source Database       : habbo

Target Server Type    : MariaDB
Target Server Version : 50552
File Encoding         : 65001

Date: 2017-03-23 20:02:27
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for admin_backups
-- ----------------------------
DROP TABLE IF EXISTS `admin_backups`;
CREATE TABLE `admin_backups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `content` text,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of admin_backups
-- ----------------------------

-- ----------------------------
-- Table structure for admin_forum_categories
-- ----------------------------
DROP TABLE IF EXISTS `admin_forum_categories`;
CREATE TABLE `admin_forum_categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `content` text,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of admin_forum_categories
-- ----------------------------
INSERT INTO `admin_forum_categories` VALUES ('1', 'Getting Started', 'Aye!', null);

-- ----------------------------
-- Table structure for admin_forum_posts
-- ----------------------------
DROP TABLE IF EXISTS `admin_forum_posts`;
CREATE TABLE `admin_forum_posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `content` text,
  `status` enum('open','closed') DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `edited_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of admin_forum_posts
-- ----------------------------
INSERT INTO `admin_forum_posts` VALUES ('1', '1', '1', null, 'An amazing post', 'Filled with beatiful content', 'closed', '2017-03-23 15:02:43', '2017-03-23 15:02:43');

-- ----------------------------
-- Table structure for admin_hotel_user_searches
-- ----------------------------
DROP TABLE IF EXISTS `admin_hotel_user_searches`;
CREATE TABLE `admin_hotel_user_searches` (
  `id` int(25) NOT NULL AUTO_INCREMENT,
  `user_id` int(25) DEFAULT NULL,
  `query` varchar(255) DEFAULT NULL,
  `query_type` enum('username','email','ip') DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of admin_hotel_user_searches
-- ----------------------------
INSERT INTO `admin_hotel_user_searches` VALUES ('1', '1', 'Chris', 'username', '2017-02-26 13:34:23');
INSERT INTO `admin_hotel_user_searches` VALUES ('2', '1', 'Chris', 'username', '2017-02-26 13:49:59');
INSERT INTO `admin_hotel_user_searches` VALUES ('3', '1', 'Chris', 'username', '2017-02-26 13:50:55');
INSERT INTO `admin_hotel_user_searches` VALUES ('4', '1', 'Sentinel', 'username', '2017-03-08 15:04:09');
INSERT INTO `admin_hotel_user_searches` VALUES ('5', '1', 'Chris', 'username', '2017-03-08 15:06:30');
INSERT INTO `admin_hotel_user_searches` VALUES ('6', '1', 'Chris', 'username', '2017-03-08 21:18:03');
INSERT INTO `admin_hotel_user_searches` VALUES ('7', '1', 'Chris', 'username', '2017-03-08 21:18:25');
INSERT INTO `admin_hotel_user_searches` VALUES ('8', '1', 'Chris', 'username', '2017-03-08 21:33:28');
INSERT INTO `admin_hotel_user_searches` VALUES ('9', '1', 'Chris', 'username', '2017-03-12 11:54:43');

-- ----------------------------
-- Table structure for admin_permission_groups
-- ----------------------------
DROP TABLE IF EXISTS `admin_permission_groups`;
CREATE TABLE `admin_permission_groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(25) DEFAULT NULL,
  `desc` text,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of admin_permission_groups
-- ----------------------------
INSERT INTO `admin_permission_groups` VALUES ('1', 'Developers', 'Test', null, null);

-- ----------------------------
-- Table structure for admin_permission_keys
-- ----------------------------
DROP TABLE IF EXISTS `admin_permission_keys`;
CREATE TABLE `admin_permission_keys` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of admin_permission_keys
-- ----------------------------
INSERT INTO `admin_permission_keys` VALUES ('1', 'View Navigator');

-- ----------------------------
-- Table structure for admin_permission_tokens
-- ----------------------------
DROP TABLE IF EXISTS `admin_permission_tokens`;
CREATE TABLE `admin_permission_tokens` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `group_id` int(11) DEFAULT NULL,
  `permission_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of admin_permission_tokens
-- ----------------------------
INSERT INTO `admin_permission_tokens` VALUES ('1', '1', '1');

-- ----------------------------
-- Table structure for admin_routing
-- ----------------------------
DROP TABLE IF EXISTS `admin_routing`;
CREATE TABLE `admin_routing` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` enum('header','dropdown','child','lonewolf') DEFAULT NULL,
  `text` varchar(25) DEFAULT NULL,
  `href` varchar(25) DEFAULT NULL,
  `permission_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of admin_routing
-- ----------------------------
INSERT INTO `admin_routing` VALUES ('1', 'header', 'Quick Links', null, '1');
INSERT INTO `admin_routing` VALUES ('2', 'lonewolf', 'Dashboard', 'dashboard', '1');
INSERT INTO `admin_routing` VALUES ('3', 'lonewolf', 'End Session', 'logout', '1');
INSERT INTO `admin_routing` VALUES ('4', null, null, null, '1');
INSERT INTO `admin_routing` VALUES ('5', null, null, null, '1');
INSERT INTO `admin_routing` VALUES ('6', null, null, null, '1');
INSERT INTO `admin_routing` VALUES ('7', null, null, null, '1');
INSERT INTO `admin_routing` VALUES ('8', null, null, null, '1');

-- ----------------------------
-- Table structure for admin_sessions
-- ----------------------------
DROP TABLE IF EXISTS `admin_sessions`;
CREATE TABLE `admin_sessions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `ip_address` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of admin_sessions
-- ----------------------------
INSERT INTO `admin_sessions` VALUES ('13', '1', '198.27.108.12', '2017-03-15 15:14:11');
INSERT INTO `admin_sessions` VALUES ('14', '1', '198.27.108.12', '2017-03-15 15:14:11');
INSERT INTO `admin_sessions` VALUES ('15', '1', '127.0.0.1', '2017-03-16 12:10:01');
INSERT INTO `admin_sessions` VALUES ('16', '1', '127.0.0.1', '2017-03-17 22:24:44');
INSERT INTO `admin_sessions` VALUES ('17', '1', '127.0.0.1', '2017-03-18 22:38:01');
INSERT INTO `admin_sessions` VALUES ('18', '1', '127.0.0.1', '2017-03-18 22:38:49');
INSERT INTO `admin_sessions` VALUES ('19', '1', '198.27.108.12', '2017-03-23 13:59:44');

-- ----------------------------
-- Table structure for admin_settings
-- ----------------------------
DROP TABLE IF EXISTS `admin_settings`;
CREATE TABLE `admin_settings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `branding` varchar(255) DEFAULT NULL,
  `short_branding` varchar(255) DEFAULT NULL,
  `web_folder` varchar(255) DEFAULT NULL,
  `action_logging` int(2) DEFAULT NULL,
  `strict_permissions` int(2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of admin_settings
-- ----------------------------
INSERT INTO `admin_settings` VALUES ('1', 'Habbo Administration', 'Administration', '', '1', '1');

-- ----------------------------
-- Table structure for admin_users
-- ----------------------------
DROP TABLE IF EXISTS `admin_users`;
CREATE TABLE `admin_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `username` varchar(15) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `permission_group` int(2) DEFAULT NULL,
  `status` enum('locked','pending_reset','normal') DEFAULT 'normal',
  `full_name` varchar(255) DEFAULT NULL,
  `position` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of admin_users
-- ----------------------------
INSERT INTO `admin_users` VALUES ('1', '2021', 'Chris', '$2a$10$5ewAi/SXkBnW1PuCn5v6AebjsjMFngL/UAo1L9VeXBVNco2R/fSHK', '1', 'normal', 'Chris P', 'Technician');
SET FOREIGN_KEY_CHECKS=1;
