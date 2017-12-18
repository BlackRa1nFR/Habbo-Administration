/*
Navicat MySQL Data Transfer

Source Server         : #Localhost
Source Server Version : 50545
Source Host           : localhost:3306
Source Database       : xhabbo

Target Server Type    : MYSQL
Target Server Version : 50545
File Encoding         : 65001

Date: 2017-12-18 06:56:07
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for xhabbo_actions
-- ----------------------------
DROP TABLE IF EXISTS `xhabbo_actions`;
CREATE TABLE `xhabbo_actions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xhabbo_actions
-- ----------------------------

-- ----------------------------
-- Table structure for xhabbo_boiler
-- ----------------------------
DROP TABLE IF EXISTS `xhabbo_boiler`;
CREATE TABLE `xhabbo_boiler` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xhabbo_boiler
-- ----------------------------

-- ----------------------------
-- Table structure for xhabbo_errors
-- ----------------------------
DROP TABLE IF EXISTS `xhabbo_errors`;
CREATE TABLE `xhabbo_errors` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `user` int(11) NOT NULL,
  `url_accessed` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=ascii;

-- ----------------------------
-- Records of xhabbo_errors
-- ----------------------------
INSERT INTO `xhabbo_errors` VALUES ('2', 'Admin - Viewing Error Logs', '1', '/admin/errors', 'normal', 'Error: insert into `xhabbo_errors` (`title`) values (\'porng\') - ER_NO_DEFAULT_FOR_FIELD: Field \'user\' doesn\'t have a default value', '2017-12-16 06:31:36');
INSERT INTO `xhabbo_errors` VALUES ('3', 'Admin - Viewing Error Logs', '1', '/admin/errors', 'normal', 'Error: insert into `xhabbo_errors` (`title`) values (\'porng\') - ER_NO_DEFAULT_FOR_FIELD: Field \'user\' doesn\'t have a default value', '2017-12-16 06:31:37');
INSERT INTO `xhabbo_errors` VALUES ('10', 'User Refresh Middleware', '12', '/admin/accounts', 'normal', 'TypeError: Cannot read property \'toJSON\' of null', '2017-12-16 06:53:33');
INSERT INTO `xhabbo_errors` VALUES ('11', 'User Refresh Middleware', '12', '/logout', 'normal', 'TypeError: Cannot read property \'toJSON\' of null', '2017-12-16 06:53:39');

-- ----------------------------
-- Table structure for xhabbo_groups
-- ----------------------------
DROP TABLE IF EXISTS `xhabbo_groups`;
CREATE TABLE `xhabbo_groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `purpose` varchar(50) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xhabbo_groups
-- ----------------------------
INSERT INTO `xhabbo_groups` VALUES ('1', 'Developer', null, null, null, null);
INSERT INTO `xhabbo_groups` VALUES ('2', 'Pieces of Shit', null, null, null, null);

-- ----------------------------
-- Table structure for xhabbo_links
-- ----------------------------
DROP TABLE IF EXISTS `xhabbo_links`;
CREATE TABLE `xhabbo_links` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` int(11) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xhabbo_links
-- ----------------------------
INSERT INTO `xhabbo_links` VALUES ('3', '9', '972ea4859e57acbe360b3020', null);
INSERT INTO `xhabbo_links` VALUES ('4', '10', 'd92d2644ca7495d0195857ec', null);
INSERT INTO `xhabbo_links` VALUES ('5', '11', 'e8f1e5086bbf3fcbcf8d42af', null);

-- ----------------------------
-- Table structure for xhabbo_sessions
-- ----------------------------
DROP TABLE IF EXISTS `xhabbo_sessions`;
CREATE TABLE `xhabbo_sessions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` int(11) DEFAULT NULL,
  `ip` varchar(255) DEFAULT NULL,
  `status` enum('normal','locked','pending') DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xhabbo_sessions
-- ----------------------------
INSERT INTO `xhabbo_sessions` VALUES ('1', '1', null, null, null);
INSERT INTO `xhabbo_sessions` VALUES ('2', '1', null, null, null);
INSERT INTO `xhabbo_sessions` VALUES ('3', '1', null, null, null);
INSERT INTO `xhabbo_sessions` VALUES ('4', '1', null, null, null);
INSERT INTO `xhabbo_sessions` VALUES ('5', '6', null, null, null);
INSERT INTO `xhabbo_sessions` VALUES ('6', '1', null, null, null);
INSERT INTO `xhabbo_sessions` VALUES ('7', '7', null, null, null);
INSERT INTO `xhabbo_sessions` VALUES ('8', '1', null, null, null);
INSERT INTO `xhabbo_sessions` VALUES ('9', '8', null, null, null);
INSERT INTO `xhabbo_sessions` VALUES ('10', '1', null, null, null);
INSERT INTO `xhabbo_sessions` VALUES ('11', '1', null, null, null);
INSERT INTO `xhabbo_sessions` VALUES ('12', '1', null, null, null);
INSERT INTO `xhabbo_sessions` VALUES ('13', '1', null, null, null);
INSERT INTO `xhabbo_sessions` VALUES ('14', '1', null, null, null);
INSERT INTO `xhabbo_sessions` VALUES ('15', '12', null, null, null);
INSERT INTO `xhabbo_sessions` VALUES ('16', '1', null, null, null);
INSERT INTO `xhabbo_sessions` VALUES ('17', '13', null, null, null);
INSERT INTO `xhabbo_sessions` VALUES ('18', '1', null, null, null);
INSERT INTO `xhabbo_sessions` VALUES ('19', '14', null, null, null);
INSERT INTO `xhabbo_sessions` VALUES ('20', '1', null, null, null);
INSERT INTO `xhabbo_sessions` VALUES ('21', '15', null, null, null);
INSERT INTO `xhabbo_sessions` VALUES ('22', '1', null, null, null);
INSERT INTO `xhabbo_sessions` VALUES ('23', '16', null, null, null);
INSERT INTO `xhabbo_sessions` VALUES ('24', '1', null, null, null);
INSERT INTO `xhabbo_sessions` VALUES ('25', '17', null, null, null);
INSERT INTO `xhabbo_sessions` VALUES ('26', '1', null, null, null);
INSERT INTO `xhabbo_sessions` VALUES ('27', '18', null, null, null);
INSERT INTO `xhabbo_sessions` VALUES ('28', '1', null, null, null);

-- ----------------------------
-- Table structure for xhabbo_settings
-- ----------------------------
DROP TABLE IF EXISTS `xhabbo_settings`;
CREATE TABLE `xhabbo_settings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `status` enum('normal','maintenance') DEFAULT 'normal',
  `security` varchar(255) DEFAULT NULL,
  `version` varchar(5) DEFAULT '1.00',
  `link` varchar(255) DEFAULT NULL,
  `email_address` varchar(255) DEFAULT NULL,
  `email_password` varchar(255) DEFAULT NULL,
  `action_logging` enum('enabled','disabled') DEFAULT 'enabled',
  `error_logging` enum('enabled','disabled') DEFAULT 'enabled',
  `account_security` enum('low','med','high') DEFAULT 'low',
  `backup_task` enum('enabled','disabled') DEFAULT 'enabled',
  `cloud_task` enum('enabled','disabled') DEFAULT 'enabled',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xhabbo_settings
-- ----------------------------
INSERT INTO `xhabbo_settings` VALUES ('1', 'normal', '$2a$10$McVIxmu2DBEFihfmeyFcKedHJ4GUDAMKpVoy0Z8z6NCZ5JMxvnMC.', '1.00', 'http://localhost:8080', null, null, 'enabled', null, 'low', 'enabled', 'enabled');

-- ----------------------------
-- Table structure for xhabbo_users
-- ----------------------------
DROP TABLE IF EXISTS `xhabbo_users`;
CREATE TABLE `xhabbo_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `group` int(11) DEFAULT '1',
  `email` varchar(255) DEFAULT NULL,
  `status` enum('first_login','account_locked','normal','password_reset') DEFAULT 'first_login',
  `avatar` varchar(255) DEFAULT 'https://i.imgur.com/7ADA70x.png',
  `name` varchar(255) DEFAULT NULL,
  `position` varchar(30) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `security` enum('single','two') DEFAULT 'single',
  PRIMARY KEY (`id`,`username`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xhabbo_users
-- ----------------------------
INSERT INTO `xhabbo_users` VALUES ('1', 'Chris', '$2a$10$6uvc5IPO/e1hSeD9PSwm0efL/rn9BdZw/mBlDJ4vQPJUSyF4UUcpu', '1', 'chrismpettyjohn@gmail.comde', 'normal', 'https://i.imgur.com/LnlH1q4.png', 'Chris', null, '2017-12-15 03:29:25', '2017-12-15 03:29:25', 'single');
INSERT INTO `xhabbo_users` VALUES ('18', 'Devbest', '$2a$10$Lst9NgpGC5BSOjCLS2qsdu2CIV1GnMbC2h5sfygGt5pP8O/FjCBAG', '1', 'chrismpettyjohn@gmail.com', 'normal', 'https://i.imgur.com/LnlH1q4.png', 'Chris', 'New Member', '2017-12-16 10:11:04', null, 'single');
