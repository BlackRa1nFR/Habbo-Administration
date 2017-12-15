/*
Navicat MySQL Data Transfer

Source Server         : #Localhost
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : lime hotel

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2016-07-14 13:03:48
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for cms_navigation
-- ----------------------------
DROP TABLE IF EXISTS `cms_navigation`;
CREATE TABLE `cms_navigation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `parent` enum('1','0') DEFAULT '0',
  `section` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cms_navigation
-- ----------------------------
INSERT INTO `cms_navigation` VALUES ('1', 'USERNAME', 'me', '1', '1');
INSERT INTO `cms_navigation` VALUES ('2', 'Community', 'community', '1', '2');
INSERT INTO `cms_navigation` VALUES ('3', 'Groups', 'groups/home', '1', '3');
INSERT INTO `cms_navigation` VALUES ('4', 'Home', 'me', '0', '1');
INSERT INTO `cms_navigation` VALUES ('5', 'Account Settings', 'settings', '0', '1');
INSERT INTO `cms_navigation` VALUES ('6', 'My Profile', 'PROFILE', '0', '1');
INSERT INTO `cms_navigation` VALUES ('7', 'Community', 'community', '0', '2');
INSERT INTO `cms_navigation` VALUES ('8', 'Weekly News', 'community/news', '0', '2');
INSERT INTO `cms_navigation` VALUES ('9', 'Staff Team', 'community/staff', '0', '2');
INSERT INTO `cms_navigation` VALUES ('10', 'Online Users', 'community/online', '0', '2');
INSERT INTO `cms_navigation` VALUES ('18', 'Top Users', 'community/leaderboards', '0', '2');
INSERT INTO `cms_navigation` VALUES ('20', 'Home', 'groups/home', '0', '3');
INSERT INTO `cms_navigation` VALUES ('22', 'My Groups', 'groups/personal', '0', '3');
INSERT INTO `cms_navigation` VALUES ('23', 'Hangouts', 'hangouts/home', '1', '23');
INSERT INTO `cms_navigation` VALUES ('24', 'Timeline', 'hangouts/home', '0', '23');
INSERT INTO `cms_navigation` VALUES ('26', 'Trending', 'hangouts/trending', '0', '23');
INSERT INTO `cms_navigation` VALUES ('28', 'Help', 'hangouts/support/bbcode', '0', '23');
INSERT INTO `cms_navigation` VALUES ('30', 'Store', 'store/home', '1', '30');
INSERT INTO `cms_navigation` VALUES ('31', 'Home', 'store/home', '0', '30');

-- ----------------------------
-- Table structure for cms_news
-- ----------------------------
DROP TABLE IF EXISTS `cms_news`;
CREATE TABLE `cms_news` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `desc` varchar(255) DEFAULT NULL,
  `content` text,
  `image` varchar(255) DEFAULT NULL,
  `image_small` varchar(255) DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cms_news
-- ----------------------------
INSERT INTO `cms_news` VALUES ('2', 'Welcome to iHabbo!', 'Build I is available', '3434', 'https://habboo-a.akamaihd.net/web_images/habbo-web-articles/lpromo_PetPromo1.png', 'http://i.imgur.com/UHbAHSm.png', '9', '2016-06-27 00:00:00', null);

-- ----------------------------
-- Table structure for cms_news_replies
-- ----------------------------
DROP TABLE IF EXISTS `cms_news_replies`;
CREATE TABLE `cms_news_replies` (
  `id` int(11) NOT NULL,
  `article` int(11) DEFAULT NULL,
  `author` int(11) DEFAULT NULL,
  `content` text,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cms_news_replies
-- ----------------------------

-- ----------------------------
-- Table structure for cms_settings
-- ----------------------------
DROP TABLE IF EXISTS `cms_settings`;
CREATE TABLE `cms_settings` (
  `website_name` varchar(255) DEFAULT NULL,
  `website_desc` varchar(255) DEFAULT NULL,
  `license_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cms_settings
-- ----------------------------
INSERT INTO `cms_settings` VALUES ('iHabbo', null, null);

-- ----------------------------
-- Table structure for cms_support
-- ----------------------------
DROP TABLE IF EXISTS `cms_support`;
CREATE TABLE `cms_support` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `status` enum('closed','open','available') DEFAULT 'available',
  `content` text,
  `user` int(11) DEFAULT NULL,
  `staff` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `closed_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cms_support
-- ----------------------------

-- ----------------------------
-- Table structure for group_discussions
-- ----------------------------
DROP TABLE IF EXISTS `group_discussions`;
CREATE TABLE `group_discussions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `content` text,
  `group` int(11) DEFAULT NULL,
  `author` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of group_discussions
-- ----------------------------

-- ----------------------------
-- Table structure for hangouts_posts
-- ----------------------------
DROP TABLE IF EXISTS `hangouts_posts`;
CREATE TABLE `hangouts_posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `content` text,
  `author` int(11) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of hangouts_posts
-- ----------------------------
INSERT INTO `hangouts_posts` VALUES ('20', 'Hey guys', '0E0C0C', 'Hey guys', '9', null, '2016-07-13 23:39:51', '2016-07-13 23:39:51');
INSERT INTO `hangouts_posts` VALUES ('21', 'Just Testing', 'C78603', 'Just Testing [b]chris[/b] #lol', '9', null, '2016-07-13 23:40:14', '2016-07-13 23:40:14');
INSERT INTO `hangouts_posts` VALUES ('22', 'is it broke', 'C7B4BF', '</div>', '9', null, '2016-07-13 23:57:41', '2016-07-13 23:57:41');
INSERT INTO `hangouts_posts` VALUES ('23', 'NIGGEr', 'C74747', 's dies dies die', '9', null, '2016-07-14 01:48:07', '2016-07-14 01:48:07');

-- ----------------------------
-- Table structure for hangouts_replies
-- ----------------------------
DROP TABLE IF EXISTS `hangouts_replies`;
CREATE TABLE `hangouts_replies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `article` varchar(255) DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL,
  `content` text,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of hangouts_replies
-- ----------------------------

-- ----------------------------
-- Table structure for hangouts_trending
-- ----------------------------
DROP TABLE IF EXISTS `hangouts_trending`;
CREATE TABLE `hangouts_trending` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `desc` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of hangouts_trending
-- ----------------------------
INSERT INTO `hangouts_trending` VALUES ('1', 'Pokemon Go', 'Nerds have finally decided to investigate into the outside world in lure of pokemon!', null, null);
INSERT INTO `hangouts_trending` VALUES ('2', 'Hillary Clinton', 'A presidential candidate for the US election has bought herself out of yet another crime!', null, null);
