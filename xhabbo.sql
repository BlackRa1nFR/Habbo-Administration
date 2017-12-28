/*
Navicat MySQL Data Transfer

Source Server         : #Localhost
Source Server Version : 50545
Source Host           : localhost:3306
Source Database       : xhabbo

Target Server Type    : MYSQL
Target Server Version : 50545
File Encoding         : 65001

Date: 2017-12-28 10:12:06
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for cms_errors
-- ----------------------------
DROP TABLE IF EXISTS `cms_errors`;
CREATE TABLE `cms_errors` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `user` int(11) DEFAULT NULL,
  `url_accessed` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=ascii;

-- ----------------------------
-- Records of cms_errors
-- ----------------------------
INSERT INTO `cms_errors` VALUES ('41', 'User Refresh Middleware', '1', '/', 'normal', 'TypeError: Cannot read property \'toJSON\' of null', '2017-12-23 08:16:03');
INSERT INTO `cms_errors` VALUES ('42', 'User Refresh Middleware', '1', '/favicon.ico', 'normal', 'TypeError: Cannot read property \'toJSON\' of null', '2017-12-23 08:16:03');
INSERT INTO `cms_errors` VALUES ('43', 'User Refresh Middleware', '1', '/', 'normal', 'TypeError: Cannot read property \'toJSON\' of null', '2017-12-23 08:16:04');
INSERT INTO `cms_errors` VALUES ('44', 'User Refresh Middleware', '1', '/favicon.ico', 'normal', 'TypeError: Cannot read property \'toJSON\' of null', '2017-12-23 08:16:05');
INSERT INTO `cms_errors` VALUES ('45', 'User Refresh Middleware', null, '/login', 'normal', 'TypeError: Cannot read property \'toJSON\' of null', '2017-12-23 09:08:51');
INSERT INTO `cms_errors` VALUES ('46', 'User Refresh Middleware', null, '/login', 'normal', 'TypeError: Cannot read property \'toJSON\' of null', '2017-12-23 09:08:51');
INSERT INTO `cms_errors` VALUES ('47', 'User Refresh Middleware', null, '/login', 'normal', 'TypeError: Cannot read property \'toJSON\' of null', '2017-12-23 09:36:02');
INSERT INTO `cms_errors` VALUES ('48', 'User Refresh Middleware', null, '/login', 'normal', 'TypeError: Cannot read property \'toJSON\' of null', '2017-12-23 09:36:02');
INSERT INTO `cms_errors` VALUES ('49', 'User Refresh Middleware', null, '/login', 'normal', 'TypeError: Cannot read property \'toJSON\' of null', '2017-12-23 09:49:58');
INSERT INTO `cms_errors` VALUES ('50', 'User Refresh Middleware', null, '/login', 'normal', 'TypeError: Cannot read property \'toJSON\' of null', '2017-12-23 09:49:59');
INSERT INTO `cms_errors` VALUES ('51', 'User Refresh Middleware', null, '/me', 'normal', 'TypeError: Cannot read property \'toJSON\' of null', '2017-12-23 09:52:54');
INSERT INTO `cms_errors` VALUES ('52', 'User Refresh Middleware', null, '/favicon.ico', 'normal', 'TypeError: Cannot read property \'toJSON\' of null', '2017-12-23 09:52:54');

-- ----------------------------
-- Table structure for cms_navigation
-- ----------------------------
DROP TABLE IF EXISTS `cms_navigation`;
CREATE TABLE `cms_navigation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `parent` int(11) DEFAULT NULL,
  `href` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cms_navigation
-- ----------------------------
INSERT INTO `cms_navigation` VALUES ('1', '-11', null, null);

-- ----------------------------
-- Table structure for cms_settings
-- ----------------------------
DROP TABLE IF EXISTS `cms_settings`;
CREATE TABLE `cms_settings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(15) DEFAULT 'HabboRP',
  `status` enum('normal','maintenance') DEFAULT 'normal',
  `link` varchar(255) DEFAULT NULL,
  `email_address` varchar(255) DEFAULT NULL,
  `email_password` varchar(255) DEFAULT NULL,
  `habbo_imager` varchar(255) DEFAULT 'https://avatar-retro.com/habbo-imaging/avatarimage',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cms_settings
-- ----------------------------
INSERT INTO `cms_settings` VALUES ('1', 'Habbo', 'normal', 'http://localhost:8080', null, null, 'https://avatar-retro.com/habbo-imaging/avatarimage');

-- ----------------------------
-- Table structure for permissions
-- ----------------------------
DROP TABLE IF EXISTS `permissions`;
CREATE TABLE `permissions` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `permission` varchar(50) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of permissions
-- ----------------------------
INSERT INTO `permissions` VALUES ('1', 'silver_vip', 'User gains Silver VIP perks.');
INSERT INTO `permissions` VALUES ('2', 'gold_vip', 'User gains Gold VIP perks.');
INSERT INTO `permissions` VALUES ('3', 'events_staff', 'User gains Events Staff perks.');
INSERT INTO `permissions` VALUES ('4', 'room_enter_full', 'Can enter rooms even when they are full');
INSERT INTO `permissions` VALUES ('5', 'room_enter_locked', 'Can enter locked rooms without a password');
INSERT INTO `permissions` VALUES ('6', 'room_any_owner', 'Owner of any room regardless');
INSERT INTO `permissions` VALUES ('7', 'room_any_rights', 'Rights in any room regardless');
INSERT INTO `permissions` VALUES ('8', 'room_ignore_mute', 'Can talk even if the room is muted.');
INSERT INTO `permissions` VALUES ('9', 'mod_tool', 'Can use the moderation tool.');
INSERT INTO `permissions` VALUES ('10', 'mod_kick', 'Can kick a user from rooms (via mod tool or command).');
INSERT INTO `permissions` VALUES ('11', 'mod_soft_ban', 'Can user ban the user (via mod tool or command).');
INSERT INTO `permissions` VALUES ('12', 'mod_ip_ban', 'Can IP ban the user (via mod tool or command).');
INSERT INTO `permissions` VALUES ('13', 'mod_machine_ban', 'Can machine ban the user (via mod tool or command).');
INSERT INTO `permissions` VALUES ('14', 'mod_alert', 'Can alert a user (via mod tool or command).');
INSERT INTO `permissions` VALUES ('15', 'mod_room_alert', 'Can room alert (via mod tool or command).');
INSERT INTO `permissions` VALUES ('16', 'command_hotel_alert', 'Can hotel alert (via command).');
INSERT INTO `permissions` VALUES ('17', 'mod_tickets', 'Can handle moderation tickets.');
INSERT INTO `permissions` VALUES ('18', 'room_ban_override', 'Can override a room ban.');
INSERT INTO `permissions` VALUES ('19', 'staff_ignore_mod_alert', 'Allows certain staff ranks to ignore mod alert, so moderators can deal with it.');
INSERT INTO `permissions` VALUES ('20', 'staff_ignore_advertisement_reports', 'Allows certain staff ranks to ignore advertisement reports, so moderators can deal with it.');
INSERT INTO `permissions` VALUES ('21', 'mod_mute', 'Can mute a user (via mod tool or command).');
INSERT INTO `permissions` VALUES ('22', 'mod_mute_any', '');
INSERT INTO `permissions` VALUES ('23', 'mod_kick_any', '');
INSERT INTO `permissions` VALUES ('24', 'mod_ban_any', '');
INSERT INTO `permissions` VALUES ('25', 'override_command_setmax_limit', '');
INSERT INTO `permissions` VALUES ('26', 'room_item_take', 'Allows the staff member to take this item, rather than eject it.');
INSERT INTO `permissions` VALUES ('27', 'group_management_override', '');
INSERT INTO `permissions` VALUES ('28', 'group_delete_override', '');
INSERT INTO `permissions` VALUES ('29', 'group_delete_limit_override', '');
INSERT INTO `permissions` VALUES ('30', 'room_trade_override', 'Can override the rooms trade settings.');
INSERT INTO `permissions` VALUES ('31', 'mod_caution', 'Can a user (via mod tool).');
INSERT INTO `permissions` VALUES ('32', 'mod_trade_lock_any', '');
INSERT INTO `permissions` VALUES ('33', 'mod_trade_lock', 'Can trade lock a user (via mod tool or command).');
INSERT INTO `permissions` VALUES ('34', 'room_item_wired_rewards', 'Can use the GiveUserBadgeBox wired.');
INSERT INTO `permissions` VALUES ('35', 'word_filter_override', '');
INSERT INTO `permissions` VALUES ('36', 'bot_place_any_override', '');
INSERT INTO `permissions` VALUES ('37', 'bot_place_any_override', '');
INSERT INTO `permissions` VALUES ('38', 'bot_edit_any_override', '');
INSERT INTO `permissions` VALUES ('39', 'room_whisper_override', 'Can override another users whisper communication setting.');
INSERT INTO `permissions` VALUES ('40', 'room_item_place_exchange_anywhere', '');
INSERT INTO `permissions` VALUES ('41', 'room_item_save_branding_items', '');
INSERT INTO `permissions` VALUES ('42', 'room_item_use_any_stack_tile', '');
INSERT INTO `permissions` VALUES ('43', 'room_delete_any', 'Ability to delete any room.');
INSERT INTO `permissions` VALUES ('44', 'mod_disconnect_any', '');
INSERT INTO `permissions` VALUES ('45', 'mod_make_say_any', '');
INSERT INTO `permissions` VALUES ('46', 'command_override_massenable', '');
INSERT INTO `permissions` VALUES ('47', 'room_override_custom_config', '');
INSERT INTO `permissions` VALUES ('48', 'mod_mute_limit_override', '');
INSERT INTO `permissions` VALUES ('49', 'room_unload_any', '');
INSERT INTO `permissions` VALUES ('50', 'fuse_group_accept_any', '');
INSERT INTO `permissions` VALUES ('51', 'vip', 'VIP');

-- ----------------------------
-- Table structure for permissions_commands
-- ----------------------------
DROP TABLE IF EXISTS `permissions_commands`;
CREATE TABLE `permissions_commands` (
  `command` varchar(45) NOT NULL DEFAULT '',
  `group_id` int(11) NOT NULL DEFAULT '4',
  `subscription_id` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`command`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of permissions_commands
-- ----------------------------
INSERT INTO `permissions_commands` VALUES ('command_addbot', '5', '4');
INSERT INTO `permissions_commands` VALUES ('command_add_bot', '5', '4');
INSERT INTO `permissions_commands` VALUES ('command_adv', '5', '0');
INSERT INTO `permissions_commands` VALUES ('command_afk', '5', '0');
INSERT INTO `permissions_commands` VALUES ('command_alert_user', '5', '3');
INSERT INTO `permissions_commands` VALUES ('command_allaroundme', '5', '3');
INSERT INTO `permissions_commands` VALUES ('command_alleyesonme', '5', '3');
INSERT INTO `permissions_commands` VALUES ('command_arrest', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_back', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_ban', '5', '4');
INSERT INTO `permissions_commands` VALUES ('command_blowsnot', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_brb', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_bubble', '5', '3');
INSERT INTO `permissions_commands` VALUES ('command_buyroom', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_carry', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_clubnx', '2', '3');
INSERT INTO `permissions_commands` VALUES ('command_colour', '1', '1');
INSERT INTO `permissions_commands` VALUES ('command_control', '6', '4');
INSERT INTO `permissions_commands` VALUES ('command_convert_credits', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_convert_diamonds', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_coords', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_dance', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_debug', '8', '4');
INSERT INTO `permissions_commands` VALUES ('command_delete_group', '5', '3');
INSERT INTO `permissions_commands` VALUES ('command_disable_diagonal', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_disable_gifts', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_disable_mimic', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_disconnect', '5', '4');
INSERT INTO `permissions_commands` VALUES ('command_dnd', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_dropkick', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_ejectall', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_empty', '5', '4');
INSERT INTO `permissions_commands` VALUES ('command_empty_items', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_enable', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_event_alert', '2', '3');
INSERT INTO `permissions_commands` VALUES ('command_faceless', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_facepalm', '1', '5');
INSERT INTO `permissions_commands` VALUES ('command_fart', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_fastwalk', '2', '3');
INSERT INTO `permissions_commands` VALUES ('command_fireball', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_flagme', '1', '1');
INSERT INTO `permissions_commands` VALUES ('command_flaguser', '5', '4');
INSERT INTO `permissions_commands` VALUES ('command_follow', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_forced_effects', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_forcesit', '2', '3');
INSERT INTO `permissions_commands` VALUES ('command_force_draw', '2', '3');
INSERT INTO `permissions_commands` VALUES ('command_freeze', '2', '3');
INSERT INTO `permissions_commands` VALUES ('command_give', '5', '0');
INSERT INTO `permissions_commands` VALUES ('command_givekiss', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_give_badge', '3', '3');
INSERT INTO `permissions_commands` VALUES ('command_give_coins', '5', '5');
INSERT INTO `permissions_commands` VALUES ('command_give_diamonds', '5', '5');
INSERT INTO `permissions_commands` VALUES ('command_give_gotw', '5', '5');
INSERT INTO `permissions_commands` VALUES ('command_give_pixels', '5', '5');
INSERT INTO `permissions_commands` VALUES ('command_goto', '2', '3');
INSERT INTO `permissions_commands` VALUES ('command_hal', '6', '5');
INSERT INTO `permissions_commands` VALUES ('command_headshot', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_hideme', '6', '0');
INSERT INTO `permissions_commands` VALUES ('command_hit', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_hotel_alert', '5', '5');
INSERT INTO `permissions_commands` VALUES ('command_hug', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_hvusers', '2', '3');
INSERT INTO `permissions_commands` VALUES ('command_ignore_whispers', '2', '3');
INSERT INTO `permissions_commands` VALUES ('command_info', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_ip_ban', '5', '3');
INSERT INTO `permissions_commands` VALUES ('command_kick', '2', '3');
INSERT INTO `permissions_commands` VALUES ('command_kickbots', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_kickpets', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_kill', '7', '0');
INSERT INTO `permissions_commands` VALUES ('command_lay', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_maintenance', '8', '0');
INSERT INTO `permissions_commands` VALUES ('command_makepolice', '7', '0');
INSERT INTO `permissions_commands` VALUES ('command_makesay', '7', '0');
INSERT INTO `permissions_commands` VALUES ('command_make_say', '2', '3');
INSERT INTO `permissions_commands` VALUES ('command_make_shout', '2', '3');
INSERT INTO `permissions_commands` VALUES ('command_massdance', '2', '3');
INSERT INTO `permissions_commands` VALUES ('command_massenable', '2', '3');
INSERT INTO `permissions_commands` VALUES ('command_mass_badge', '2', '5');
INSERT INTO `permissions_commands` VALUES ('command_mass_give', '7', '0');
INSERT INTO `permissions_commands` VALUES ('command_mimic', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_mip', '3', '4');
INSERT INTO `permissions_commands` VALUES ('command_moonwalk', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_mute', '2', '3');
INSERT INTO `permissions_commands` VALUES ('command_mute_bots', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_mute_pets', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_online', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_oral', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_override', '2', '3');
INSERT INTO `permissions_commands` VALUES ('command_override_massenable', '6', '4');
INSERT INTO `permissions_commands` VALUES ('command_pet', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_pickall', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_properties', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_pull', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_punch', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_push', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_quickpoll', '7', '0');
INSERT INTO `permissions_commands` VALUES ('command_refreshrp', '8', '0');
INSERT INTO `permissions_commands` VALUES ('command_regen_maps', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_release', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_removepolice', '7', '0');
INSERT INTO `permissions_commands` VALUES ('command_restart', '8', '0');
INSERT INTO `permissions_commands` VALUES ('command_restore', '7', '0');
INSERT INTO `permissions_commands` VALUES ('command_rig', '8', '4');
INSERT INTO `permissions_commands` VALUES ('command_rob', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_room', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_roombuy', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_roomfastwalk', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_roomfreeze', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_roommute', '2', '3');
INSERT INTO `permissions_commands` VALUES ('command_roomoverride', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_roomsell', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_roomteleport', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_room_alert', '2', '3');
INSERT INTO `permissions_commands` VALUES ('command_room_badge', '2', '3');
INSERT INTO `permissions_commands` VALUES ('command_room_kick', '2', '3');
INSERT INTO `permissions_commands` VALUES ('command_room_say', '2', '3');
INSERT INTO `permissions_commands` VALUES ('command_room_shout', '2', '3');
INSERT INTO `permissions_commands` VALUES ('command_rp_alert', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_sayall', '7', '0');
INSERT INTO `permissions_commands` VALUES ('command_sellroom', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_setmax', '2', '3');
INSERT INTO `permissions_commands` VALUES ('command_setspeed', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_setstat', '8', '0');
INSERT INTO `permissions_commands` VALUES ('command_sex', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_shoot', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_showme', '6', '0');
INSERT INTO `permissions_commands` VALUES ('command_sit', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_slap', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_slapass', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_slaptest', '4', '4');
INSERT INTO `permissions_commands` VALUES ('command_smack', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_smokeweed', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_spitmouth', '8', '0');
INSERT INTO `permissions_commands` VALUES ('command_stab', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_staff_alert', '4', '3');
INSERT INTO `permissions_commands` VALUES ('command_stand', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_start_question', '7', '0');
INSERT INTO `permissions_commands` VALUES ('command_start_quick_poll', '6', '0');
INSERT INTO `permissions_commands` VALUES ('command_stats', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_stop_quick_poll', '6', '0');
INSERT INTO `permissions_commands` VALUES ('command_stun', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_summon', '3', '3');
INSERT INTO `permissions_commands` VALUES ('command_super_fastwalk', '2', '3');
INSERT INTO `permissions_commands` VALUES ('command_super_pull', '1', '1');
INSERT INTO `permissions_commands` VALUES ('command_super_push', '1', '1');
INSERT INTO `permissions_commands` VALUES ('command_teleport', '2', '3');
INSERT INTO `permissions_commands` VALUES ('command_trade_ban', '2', '0');
INSERT INTO `permissions_commands` VALUES ('command_transfer', '2', '0');
INSERT INTO `permissions_commands` VALUES ('command_unfreeze', '2', '0');
INSERT INTO `permissions_commands` VALUES ('command_unload', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_unmute', '2', '0');
INSERT INTO `permissions_commands` VALUES ('command_unroommute', '2', '0');
INSERT INTO `permissions_commands` VALUES ('command_unstun', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_update', '8', '0');
INSERT INTO `permissions_commands` VALUES ('command_update_achievements', '8', '0');
INSERT INTO `permissions_commands` VALUES ('command_update_anti_mutant', '6', '0');
INSERT INTO `permissions_commands` VALUES ('command_update_badge_definitions', '8', '0');
INSERT INTO `permissions_commands` VALUES ('command_update_bans', '4', '0');
INSERT INTO `permissions_commands` VALUES ('command_update_bots', '8', '0');
INSERT INTO `permissions_commands` VALUES ('command_update_catalog', '5', '0');
INSERT INTO `permissions_commands` VALUES ('command_update_cata_full', '8', '0');
INSERT INTO `permissions_commands` VALUES ('command_update_chat_styles', '8', '0');
INSERT INTO `permissions_commands` VALUES ('command_update_configuration', '8', '0');
INSERT INTO `permissions_commands` VALUES ('command_update_filter', '4', '0');
INSERT INTO `permissions_commands` VALUES ('command_update_furni', '5', '0');
INSERT INTO `permissions_commands` VALUES ('command_update_game_center', '5', '0');
INSERT INTO `permissions_commands` VALUES ('command_update_models', '8', '0');
INSERT INTO `permissions_commands` VALUES ('command_update_moderation', '8', '0');
INSERT INTO `permissions_commands` VALUES ('command_update_navigator', '8', '0');
INSERT INTO `permissions_commands` VALUES ('command_update_polls', '8', '0');
INSERT INTO `permissions_commands` VALUES ('command_update_promotions', '8', '0');
INSERT INTO `permissions_commands` VALUES ('command_update_quests', '8', '0');
INSERT INTO `permissions_commands` VALUES ('command_update_rewards', '8', '0');
INSERT INTO `permissions_commands` VALUES ('command_update_rights', '6', '0');
INSERT INTO `permissions_commands` VALUES ('command_update_tickets', '5', '0');
INSERT INTO `permissions_commands` VALUES ('command_update_vouchers', '5', '0');
INSERT INTO `permissions_commands` VALUES ('command_update_youtube', '8', '0');
INSERT INTO `permissions_commands` VALUES ('command_user_info', '4', '0');
INSERT INTO `permissions_commands` VALUES ('command_va', '1', '1');
INSERT INTO `permissions_commands` VALUES ('command_vcolour', '1', '1');
INSERT INTO `permissions_commands` VALUES ('command_vfastwalk', '1', '1');
INSERT INTO `permissions_commands` VALUES ('command_viewinventory', '7', '0');
INSERT INTO `permissions_commands` VALUES ('command_vmassdance', '1', '1');
INSERT INTO `permissions_commands` VALUES ('command_vmassenable', '1', '1');
INSERT INTO `permissions_commands` VALUES ('command_voverride', '1', '1');
INSERT INTO `permissions_commands` VALUES ('command_vsuper_fastwalk', '1', '1');
INSERT INTO `permissions_commands` VALUES ('command_vteleport', '1', '1');
INSERT INTO `permissions_commands` VALUES ('command_vwarp', '1', '1');
INSERT INTO `permissions_commands` VALUES ('command_warp', '1', '1');
INSERT INTO `permissions_commands` VALUES ('command_watergun', '1', '0');
INSERT INTO `permissions_commands` VALUES ('command_welcome', '10', '10');
INSERT INTO `permissions_commands` VALUES ('command_whisper_alert', '4', '4');

-- ----------------------------
-- Table structure for permissions_groups
-- ----------------------------
DROP TABLE IF EXISTS `permissions_groups`;
CREATE TABLE `permissions_groups` (
  `id` int(3) NOT NULL,
  `name` varchar(50) NOT NULL,
  `badge_code` varchar(12) NOT NULL DEFAULT '',
  `hidden` int(1) DEFAULT '0',
  `staff` int(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of permissions_groups
-- ----------------------------
INSERT INTO `permissions_groups` VALUES ('1', 'User', 'BURG', '0', '0');
INSERT INTO `permissions_groups` VALUES ('2', 'Events Staff', 'VIP', '0', '1');
INSERT INTO `permissions_groups` VALUES ('3', 'Events Leader', 'rng', '0', '1');
INSERT INTO `permissions_groups` VALUES ('4', 'Trial Moderator', 'ADM', '0', '1');
INSERT INTO `permissions_groups` VALUES ('7', 'Administrator', 'ADM', '0', '1');
INSERT INTO `permissions_groups` VALUES ('9', 'Manager', 'ADM', '0', '1');
INSERT INTO `permissions_groups` VALUES ('10', 'Developer', 'T_DEV', '0', '1');
INSERT INTO `permissions_groups` VALUES ('11', 'Founder', '', '0', '1');

-- ----------------------------
-- Table structure for permissions_subscriptions
-- ----------------------------
DROP TABLE IF EXISTS `permissions_subscriptions`;
CREATE TABLE `permissions_subscriptions` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `subscription_id` int(10) NOT NULL,
  `permission_id` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of permissions_subscriptions
-- ----------------------------
INSERT INTO `permissions_subscriptions` VALUES ('1', '1', '1');
INSERT INTO `permissions_subscriptions` VALUES ('2', '2', '2');
INSERT INTO `permissions_subscriptions` VALUES ('3', '3', '3');
INSERT INTO `permissions_subscriptions` VALUES ('4', '4', '4');
INSERT INTO `permissions_subscriptions` VALUES ('5', '5', '5');

-- ----------------------------
-- Table structure for server_status
-- ----------------------------
DROP TABLE IF EXISTS `server_status`;
CREATE TABLE `server_status` (
  `id` int(1) NOT NULL AUTO_INCREMENT,
  `users_online` int(11) NOT NULL DEFAULT '0',
  `loaded_rooms` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of server_status
-- ----------------------------
INSERT INTO `server_status` VALUES ('1', '3', '1');

-- ----------------------------
-- Table structure for subscriptions
-- ----------------------------
DROP TABLE IF EXISTS `subscriptions`;
CREATE TABLE `subscriptions` (
  `id` int(10) NOT NULL DEFAULT '0',
  `diamonds` int(11) NOT NULL DEFAULT '1',
  `name` varchar(50) NOT NULL,
  `badge_code` varchar(10) NOT NULL,
  `credits` int(11) NOT NULL DEFAULT '100',
  `duckets` int(11) NOT NULL DEFAULT '100',
  `respects` int(11) NOT NULL DEFAULT '3',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of subscriptions
-- ----------------------------
INSERT INTO `subscriptions` VALUES ('0', '1', 'Users', 'MRJ', '2000', '1500', '10');
INSERT INTO `subscriptions` VALUES ('1', '2', 'Silver VIP', 'SVIP', '3000', '2250', '15');
INSERT INTO `subscriptions` VALUES ('2', '2', 'Gold VIP', 'GVIP', '4000', '3000', '20');
INSERT INTO `subscriptions` VALUES ('3', '2', 'Events Staff', 'VIP', '8000', '8000', '25');
INSERT INTO `subscriptions` VALUES ('4', '1', 'Lil Uzi Vert !!!', 'GLA', '100', '100', '3');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `xhabbo_id` int(11) DEFAULT NULL,
  `username` varchar(125) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `mail` varchar(255) DEFAULT 'defaultuser@meth0d.org',
  `rank` int(1) unsigned DEFAULT '1',
  `online` enum('0','1') DEFAULT '0',
  `country` enum('','CA','FR','ES','TK','DK','UK','US','MX','AU') DEFAULT '',
  `rank_vip` int(1) DEFAULT '0',
  `values_rank` int(1) DEFAULT NULL,
  `credits` int(11) DEFAULT '50000',
  `seasonal_currency` int(11) NOT NULL DEFAULT '0',
  `vip_points` int(11) DEFAULT '0',
  `activity_points` int(11) DEFAULT '5000',
  `look` char(255) DEFAULT NULL,
  `gender` enum('M','F') DEFAULT 'M',
  `motto` char(50) DEFAULT NULL,
  `account_created` char(12) DEFAULT '0',
  `last_online` int(11) DEFAULT '0',
  `ip_last` varchar(45) DEFAULT '',
  `ip_reg` varchar(45) DEFAULT NULL,
  `home_room` int(10) DEFAULT '7357',
  `is_muted` enum('0','1') DEFAULT '0',
  `block_newfriends` enum('0','1') DEFAULT '0',
  `hide_online` enum('0','1') DEFAULT '0',
  `hide_inroom` enum('0','1') DEFAULT '0',
  `vip` enum('0','1') DEFAULT '0',
  `volume` varchar(15) DEFAULT '100,100,100',
  `last_change` int(20) DEFAULT '0',
  `machine_id` varchar(125) DEFAULT '',
  `focus_preference` enum('0','1') DEFAULT '0',
  `chat_preference` enum('0','1') DEFAULT '0',
  `pets_muted` enum('0','1') DEFAULT '0',
  `bots_muted` enum('0','1') DEFAULT '0',
  `advertising_report_blocked` enum('0','1') DEFAULT '0',
  `gotw_points` int(11) DEFAULT '0',
  `ignore_invites` enum('0','1') DEFAULT '0',
  `time_muted` double DEFAULT '0',
  `allow_gifts` enum('0','1') DEFAULT '1',
  `trading_locked` double DEFAULT '0',
  `friend_bar_state` enum('0','1') NOT NULL DEFAULT '1',
  `disable_forced_effects` enum('0','1') NOT NULL DEFAULT '0',
  `allow_mimic` enum('1','0') NOT NULL DEFAULT '1',
  `youtube_embed` char(50) DEFAULT NULL,
  `snog` char(50) DEFAULT NULL,
  `twitter` char(50) DEFAULT NULL,
  `kik` char(50) DEFAULT NULL,
  `snapchat` char(50) DEFAULT NULL,
  `skype` char(50) DEFAULT NULL,
  `aboutme` char(255) DEFAULT NULL,
  `married` char(50) DEFAULT NULL,
  `instagram` char(50) DEFAULT NULL,
  `shop_points` int(11) DEFAULT '0',
  `skin` enum('6','5','4','3','2','1') DEFAULT '4',
  `refs` int(11) DEFAULT '0',
  `lotterys_won` int(11) NOT NULL DEFAULT '0',
  `lottery_prize` int(11) NOT NULL DEFAULT '15000',
  `Rolled` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  `rp_health` int(11) DEFAULT '100',
  `rp_strength` int(11) DEFAULT '1',
  `rp_deadtime` int(11) DEFAULT '0',
  `rp_jailtime` int(11) DEFAULT '0',
  `rp_jailed` enum('0','1') DEFAULT '0',
  `rp_dead` enum('0','1') DEFAULT '0',
  `rp_police` enum('0','1') DEFAULT '0',
  `rp_canbail` int(11) DEFAULT '0',
  `dailylogin` int(11) DEFAULT '0',
  `is_amb` enum('0','1') DEFAULT '0',
  `has_staffchat` enum('0','1') DEFAULT '0',
  `helper_rank` int(11) DEFAULT '0',
  `using_bcrypt` int(11) DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`) USING HASH,
  UNIQUE KEY `username` (`username`) USING BTREE,
  KEY `rank` (`rank`),
  KEY `ip_last` (`ip_last`),
  KEY `ip_reg` (`ip_reg`),
  KEY `credits` (`credits`),
  KEY `activity_points` (`activity_points`),
  KEY `online` (`online`),
  KEY `mail` (`mail`),
  KEY `machine_id` (`machine_id`),
  KEY `last_online` (`last_online`),
  KEY `home_room` (`home_room`),
  KEY `messenger` (`id`,`username`,`look`,`motto`,`last_online`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', '1', 'Chris', '$2a$10$WQsAkY7Qd5idKkroXNqUruFbHgrZUuW4wp5e1ViX1naEE2.pQi5xi', 'chrismpettyjohn@gmail.com', '10', '0', '', '3', null, '139082', '0', '48', '99140', 'lg-3078-110.hd-3092-2.sh-300-62.hr-893-61.ch-3015-1196', 'M', 'Developer', '1513743410', '1514009922', '107.77.85.75,52.18.65.125', '18.220.237.36', '33', '0', '0', '0', '0', '0', '100,100,100', '0', '~684a2288197e0c2271c51bca6a341c78', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '0', '1', null, null, null, null, null, null, null, null, null, '0', '4', '0', '0', '15000', '2017-12-23 09:07:55', '100', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `users` VALUES ('2', null, 'Luke', '$2a$10$ii2xcd6..lIocwVWz.XXUuu4V/5NhuI8tIVG7abfF7QmZnG/eFV2S', 'trigger@live.com', '11', '1', '', '0', null, '999263742', '0', '999999264', '100669999', 'fa-2813-62.he-987462901-62.cc-568282-1195.hd-3095-8.cp-999753-62.lg-5635282-82.ha-987462863-62.hr-3163-54.ca-8389386-62.ch-6134524-1323', 'M', 'Owner!', '1513743445', '1514004244', '92.233.199.166,107.178.36.24', '92.233.199.166', '33', '0', '0', '0', '0', '0', '0,0,0', '0', '~cd7bebb4f6bd2548786386ad2d55329a', '0', '0', '0', '1', '0', '999999999', '0', '0', '1', '0', '0', '0', '1', null, null, null, null, null, null, null, null, null, '0', '4', '0', '0', '15000', '2017-12-23 05:29:30', '100', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `users` VALUES ('3', null, 'Erin', '$2a$10$YLUMNJ.t0nFrpuk1.PWREeN6Yh88Sqkqs667eVA27xMbcr6fXAFVe', 'erinmcleod@hotmail.co.uk', '4', '0', '', '3', null, '2047773', '0', '51566', '1559933', 'cc-6158639-110-62.lg-5772038-1338-92.ha-6241669-63.hr-3012-59.hd-605-10.ch-562872-92', 'F', '', '1513743518', '1514008264', '185.69.144.93', '86.19.2.170', '33', '0', '0', '0', '0', '0', '100,100,100', '0', '~8de0b394feb08ef5cfc9a4d541cbd868', '0', '0', '0', '1', '0', '10000149', '0', '0', '1', '0', '1', '0', '1', null, null, null, null, null, null, null, null, null, '0', '4', '0', '0', '15000', '2017-12-22 21:51:03', '100', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `users` VALUES ('4', null, 'jordan', '$2a$10$FPM4vYSMZrCSG0LlMEudiuEgk9HHMg17LaGAO/kxcongYy/dIanmK', 'higgins4u2nv1997@gmail.com', '1', '0', '', '3', null, '268823', '0', '255', '367850', 'hr-831-61.cc-201411-64.lg-270-110.ea-1404-110.hd-180-2.sh-300-110.ch-3030-110', 'M', 'FUCK OFF.', '1513743921', '1514002900', '86.19.98.148', '2a02:c7f:5e14:fe00:1584:5eb6:c995:bdf0', '33', '0', '0', '0', '0', '0', '100,100,100', '0', '~773b3a0a717e6e3128169e8637a95b68', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '1', '0', '1', 'https://www.youtube.com/watch?v=BJ0xBCwkg3E', '', '', '', '', '', '', null, '', '0', '4', '0', '0', '15000', '2017-12-22 20:21:39', '100', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `users` VALUES ('5', null, 'Saf', '$2a$10$xVB4i76qfU/qPocwRjSYN.gabRVM5KP5nG5QzRaOii8Y79iOFX61S', 'safreen_m@hotmail.com', '1', '0', '', '3', null, '294733', '0', '357', '254675', 'he-3155-104.hr-3160-38-40.lg-5635282-62.hd-629-2.ch-62667019-104-92', 'F', null, '1513744187', '1514005461', '78.145.162.217,52.19.36.139', '79.74.60.16', '10', '0', '0', '0', '0', '0', '100,100,100', '0', '~cdb16f0968c4c14d85fc3661fd109b67', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '0', '1', null, null, null, null, null, null, null, null, null, '0', '4', '0', '0', '15000', '2017-12-22 21:04:20', '100', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `users` VALUES ('6', null, 'Roofies', '$2a$10$ry2h5NM0mpS87SA5cGiXzuqeQb5YjTP0ztXSMbO1CEC4fl0wsn0CO', 'dmbcntfrry@gmail.com', '11', '0', '', '3', null, '52037', '0', '119', '12205', 'ch-3323-72-72.hd-209-30.lg-3387-91-1408.cc-3389-91-1408.sh-3419-1408-1408.hr-3377-61-40', 'M', null, '1513745193', '1513747813', '86.19.210.208', '86.19.210.208', '33', '0', '0', '0', '0', '0', '100,100,100', '0', '~58af6fb3fa2bcd1ebbb032f44e7adf16', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '1', '0', '1', null, null, null, null, null, null, null, null, null, '0', '4', '0', '0', '15000', '2017-12-21 17:29:48', '100', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `users` VALUES ('7', null, 'Rhyce', '$2a$10$1UjTVQiLVx.xri5exltSX.6DY6oXaZaOGzqWrvyIIafHI5dpb2PGm', 'rhycelovesliz@outlook.com', '1', '0', '', '3', null, '88100', '0', '18', '18105', 'sh-3035-1408.hr-828-61.ha-3488-0.lg-280-110.hd-209-2.ch-255-1423', 'M', null, '1513746438', '1513758472', '95.151.62.128', '95.151.62.128', '33', '0', '0', '0', '0', '0', '100,100,100', '0', '~fdc67895e31e0d20af91c3fcda4db95c', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '1', '0', '1', null, null, null, null, null, null, null, null, null, '0', '4', '0', '0', '15000', '2017-12-21 17:29:48', '100', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `users` VALUES ('8', null, 'Jordan18', '$2a$10$xOn6/GFwsebGuJnmQFG/muRPlRC8Y2h6CfN42wGT1UTsUPLmcx61u', 'jordanrod12@hotmail.co.uk', '1', '0', '', '3', null, '556011', '0', '1165', '472078', 'lg-6050208-1195.ha-1011-1198.hr-3025-1041.ch-255-1203.fa-1201-62.ea-6131263-1198.hd-3095-10', 'M', '', '1513748226', '1514006818', '81.135.24.10,45.33.136.21', '86.183.49.56,107.178.33.16', '10', '0', '0', '0', '0', '0', '100,100,100', '1513887760', '~03634edd635cb3216752d140f5491179', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '0', '0', null, null, null, null, null, null, null, null, null, '0', '3', '0', '0', '15000', '2017-12-22 21:26:58', '100', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `users` VALUES ('9', null, 'connel', '$2a$10$887dZ62vUfHH6hYDtT4tZep787REigk6Q9UbgNI5Mt.0oK6bwj7AG', 'con27con@outlook.com', '1', '0', '', '3', null, '221700', '0', '1015', '141230', 'lg-3088-110-110.hd-209-1362.hr-170-61.ha-1006-63.ch-255-1423', 'M', 'no one likes red heads aka erin', '1513748391', '1513924987', '110.140.95.132,101.127.208.72', '110.140.78.214', '33', '0', '0', '0', '0', '0', '0,0,0', '0', '~b2d4d032bb8afe6b520d85cc711ca222', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '1', '0', '1', null, null, null, null, null, null, null, null, null, '0', '4', '0', '0', '15000', '2017-12-21 22:43:07', '100', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `users` VALUES ('10', null, 'K', '$2a$10$97CzJVm8kEQsgNmiqg6NBOiSuhdprHLKIdOI2Saxw6JTMu7jAkibG', 'Kyleekirk@hotmail.com', '4', '1', '', '3', null, '192537', '0', '843', '396589', 'hr-28021715-61.ch-9024-96.lg-5772038-77-92.cc-6125660-110-62.hd-208-10', 'M', '', '1513748619', '1513924005', '2a02:c7d:a00a:bf00:a917:ba3f:955:6b53', '2a02:c7d:a00a:bf00:54c1:db64:5dec:6db9', '10', '0', '0', '0', '0', '0', '100,100,100', '0', '~52dc03b72744a18ba1aa42b6cb7d83ad', '1', '1', '0', '1', '0', '100', '0', '0', '1', '0', '1', '1', '0', null, null, null, null, null, null, null, null, null, '0', '1', '0', '0', '15000', '2017-12-22 21:28:19', '100', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `users` VALUES ('12', null, 'Payback', '$2a$10$FONlnSqQP6ZGbDvDlXFnWe9VagaZL6Bt/gs.ZowVj1BID5tpvQLyC', 'luke@luke.com', '1', '0', '', '3', null, '106669', '0', '286', '66755', 'hd-787592-97565.ca-8389386-62.sh-6621522-62.lg-7218322-110.ch-3203-62', 'M', null, '1513750544', '1514005816', '109.230.215.178,52.19.118.194', '92.233.199.166,107.178.33.24', '33', '0', '0', '0', '0', '0', '100,100,100', '0', '~802256bf03b031e085621e6b4448c521', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '0', '1', null, null, null, null, null, null, null, null, null, '0', '4', '0', '0', '15000', '2017-12-22 21:10:20', '100', '1', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0');
INSERT INTO `users` VALUES ('13', null, 'Cigarette', '$2a$10$Ue1ICyr41BnoJvHxnED.kOyLmpyYf6viz1AKUhTPdhRWWKfjrc.tS', 'quitshuttingthehotel@down.com', '1', '0', '', '3', null, '50000', '0', '15', '10005', 'ea-1402-63.hd-190-2.sh-3089-110.ch-3015-106.lg-3023-64.wa-2005-63.hr-828-41', 'M', null, '1513750835', '1513751464', '172.58.171.81', '172.58.171.81', '33', '0', '0', '0', '0', '0', '100,100,100', '0', '~5f9baad6560dfe748a53f561bd167d9a', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '1', '0', '1', null, null, null, null, null, null, null, null, null, '0', '4', '0', '0', '15000', '2017-12-21 17:29:48', '100', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `users` VALUES ('14', null, 'AliJames', '$2a$10$nn0LD6g3s1BkDagLTw/fc.wgKkzP4ykjp1HoyCubHwSRTXR/j/thW', 'englishboy2016@outlook.com', '1', '0', '', '3', null, '121624', '0', '42', '82465', 'hr-3163-61.ha-742327-110.lg-3136-110.ch-5659282-110-62.ca-6141523-62.sh-5884320-110.hd-3095-1357', 'M', null, '1513751238', '1513980584', '78.160.53.106', '78.160.53.106', '33', '0', '0', '0', '0', '0', '100,100,100', '0', '~027797fc536469ccb8f0fe6caf09a670', '0', '0', '0', '0', '0', '0', '0', '200', '1', '0', '1', '0', '1', null, null, null, null, null, null, null, null, null, '0', '1', '0', '0', '15000', '2017-12-22 14:09:43', '100', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `users` VALUES ('15', null, 'Ben', '$2a$10$5SqzijqF8qIXsccmwFiGCePGwnltrg23TTXaNX0Ie1/fB4ykC1FHq', 'djlkjfh@jhdf.com', '1', '0', '', '3', null, '74300', '0', '574', '34330', 'sh-3035-1408.hr-828-61.ha-3488-0.lg-280-110.hd-209-2.ch-255-1423', 'M', null, '1513751401', '1513840496', '76.71.31.190', '76.71.31.190', '33', '0', '0', '0', '0', '0', '100,100,100', '0', '~e856e3bb17e988649d687ca2800a85a8', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '1', '0', '1', null, null, null, null, null, null, null, null, null, '0', '4', '0', '0', '15000', '2017-12-21 17:29:48', '100', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `users` VALUES ('16', null, 'Vin', '$2a$10$UFS7Rb00lMKOWuBV16faW.GReL2tLOG9Bev0feHwZ18U/rZDYteAi', 'vincyyy@hotmail.com', '1', '0', '', '3', null, '1047300', '0', '701', '508335', 'he-987462880-1332.ch-215-110.hr-831-1036.hd-180-8.sh-305-76.lg-280-110', 'M', 'Payback\'s dopest.', '1513754103', '1513948361', '24.237.158.18', '24.237.158.18', '33', '0', '0', '0', '0', '0', '100,100,100', '0', '~e243b8f766f3e11efd29c7a8dead5c62', '0', '0', '0', '0', '0', '250', '0', '0', '1', '0', '1', '0', '1', 'S0T7hAn-hp4', 'snog.li/Vin', '', '', '', 'live:vincyyy and/or vincyyy@hotmail.com', 'I\'m one of Payback\'s most loved players. :*', null, '', '0', '3', '0', '0', '15000', '2017-12-22 05:12:41', '100', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `users` VALUES ('17', null, 'E', '$2a$10$1UkNcfE3ryf5.aQmHB.3o.47VpYJPLHw.gYF5exhMcQTTXpfv7QFm', 'mate@mate.com', '1', '0', '', '3', null, '108306', '0', '458', '268188', 'lg-7218322-110.hd-787592-1477.ch-3203-62.ha-6135844-93', 'M', null, '1513756618', '1513909589', '2605:e000:ad9a:b400:5477:464b:ea:a611', '45.51.231.12', '33', '0', '0', '0', '0', '0', '100,100,100', '0', '~89e5dea53b155b2a3984f86d5f610971', '0', '0', '0', '0', '0', '250', '0', '0', '1', '0', '0', '0', '1', null, null, null, null, null, null, null, null, null, '0', '4', '0', '0', '15000', '2017-12-21 18:26:28', '100', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `users` VALUES ('18', null, 'Bran', '$2a$10$diNqc6oPwtQJKNfYAf4wTO0iT7KwTwwfIWnHR6gNjtd24du1hphq2', 'bran.retros@hotmail.com', '1', '0', '', '3', null, '50000', '0', '15', '10000', 'sh-3035-1408.hr-828-61.ha-3488-0.lg-280-110.hd-209-2.ch-255-1423', 'M', null, '1513771979', '0', '2.98.27.30', '2.98.27.30', '33', '0', '0', '0', '0', '0', '100,100,100', '0', '', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '1', '0', '1', null, null, null, null, null, null, null, null, null, '0', '4', '0', '0', '15000', '2017-12-21 17:29:48', '100', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `users` VALUES ('19', null, 'God', '$2a$10$YYgvR.s.N1QpZYJ7YAyGSuP72GifNc1YC3bzShFVK0AUl74vD2yr.', 'TedBoon92@gmail.com', '1', '0', '', '3', null, '69800', '0', '39', '74825', 'ca-3292-73.sh-3035-1413.ha-3488-0.lg-270-64.ch-804-82.hd-3091-3.hr-831-1401', 'M', 'youtube', '1513796363', '1513826703', '2a02:c7d:3e9:ac00:c5ca:9c0a:93de:fb80', '2a02:c7d:3e9:ac00:c5ca:9c0a:93de:fb80', '33', '0', '0', '0', '0', '0', '100,100,100', '1513797030', '~ccca2b5888c78de13294bf44d9d92e91', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '1', '0', '1', null, null, null, null, null, null, null, null, null, '0', '3', '0', '0', '15000', '2017-12-21 17:29:48', '100', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `users` VALUES ('20', null, 'A', '$2a$10$q5J7zhtcm6k5aZQUzcpTJOM2W5J7.8ALOqOr/PwAazbDzO/W/rolu', 'km_vr4@yahoo.com', '1', '0', '', '3', null, '358263', '0', '361', '269176', 'lg-3006-71-71.ch-3013-80.hr-85687122-32.hd-629-7.sh-3154-75-74.ha-987462898-62', 'F', 'milquetoast', '1513806849', '1514008039', '112.207.108.182,52.16.10.129', '112.207.108.182', '35', '0', '0', '0', '0', '0', '100,100,100', '0', '~e503507c0ae58deddf9fa7dad31b9f2c', '1', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '0', '1', '', '', '', '', '', '', '', null, '', '0', '6', '0', '0', '15000', '2017-12-22 21:47:19', '100', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `users` VALUES ('21', null, 'Platinum', '$2a$10$JwTTwV6ClEKEjvQKO.nDaOa8RgcX.pHswxn8dfS4251y.Pf2rzFSu', 'pl@i.num', '1', '0', '', '3', null, '50096', '0', '15', '10010', 'ch-3321-110.hr-3163-61.lg-3058-110.hd-3095-2', 'M', 'Hello!', '1513809055', '1513809506', '82.42.226.40', '82.42.226.40', '33', '0', '0', '0', '0', '0', '100,100,100', '0', '~434913e99d6b2357c41d6b30295bf4c2', '0', '1', '0', '0', '0', '0', '0', '0', '1', '0', '1', '0', '1', null, null, null, null, null, null, null, null, null, '0', '4', '0', '0', '15000', '2017-12-21 17:29:48', '100', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `users` VALUES ('22', null, 'ama', '$2a$10$QG1ungIb1r//i7rZLci7vOQMRWXIJ72j2u0p8ZxpiwEiGF8lB2sqS', 'amardjames55@gmail.com', '1', '0', '', '3', null, '50000', '0', '15', '10010', 'ha-3305-1408-110.hr-3163-61.sh-295-1335.hd-190-2.lg-280-110.ch-3030-64', 'M', null, '1513813880', '1513814432', '207.191.249.23', '207.191.249.23', '33', '0', '0', '0', '0', '0', '100,100,100', '0', '~93da1cbd7b8f917d10e14877a4fc30df', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '1', '0', '1', null, null, null, null, null, null, null, null, null, '0', '4', '0', '0', '15000', '2017-12-21 17:29:48', '100', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `users` VALUES ('23', null, 'jakfs', '$2a$10$G2vLmTJdhwmpJSE4EXUyp.SMcaHJOazP8Hs.r9sm5SbnLW5WPngwa', 'ggh1@gmail.com', '1', '0', '', '3', null, '0', '0', '15', '9005', 'sh-3035-1408.hr-828-61.ha-3488-0.lg-280-110.hd-209-2.ch-255-1423', 'M', null, '1513814169', '1513814429', '207.191.249.23', '207.191.249.23', '33', '0', '0', '0', '0', '0', '100,100,100', '0', '~93da1cbd7b8f917d10e14877a4fc30df', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '1', '0', '1', null, null, null, null, null, null, null, null, null, '0', '4', '0', '0', '15000', '2017-12-21 17:29:48', '100', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `users` VALUES ('24', null, 'apk', '$2a$10$T3YNrRUSzBkAsn0xWUW4Lub/D6ufuZmpT0eERWhIkel2XvGCNsUDG', 'yungmavu.payback@gmail.com', '1', '0', '', '3', null, '369383', '0', '378', '179870', 'ca-5912227-1230.ea-1402-63.ch-220-110.hr-891-61.ha-1004-1193.lg-3058-1205.fa-568282-1193.hd-195-1.cc-3299-1189-1230', 'M', '', '1513816373', '1513901794', '2001:e68:6579:f900:c090:7b9b:9247:cfd1', '14.192.208.153', '33', '0', '0', '0', '0', '0', '0,0,0', '0', '~0eb2c346c7dd4be82e40b2438f7e7d87', '1', '0', '0', '0', '0', '0', '0', '0', '1', '0', '1', '0', '0', null, null, null, null, null, null, null, null, null, '0', '6', '0', '0', '15000', '2017-12-21 17:29:48', '100', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `users` VALUES ('25', null, 'Kiro2', '$2a$10$.94BR4VpTMAoQfNLyavpbuF6kMBVr1yjlKQ2ytnfXkAUKlpJfPZ/e', 'KiroEmadayad999@hotmail.com', '1', '0', '', '3', null, '50000', '0', '15', '10000', 'sh-3035-1408.hr-828-61.ha-3488-0.lg-280-110.hd-209-2.ch-255-1423', 'M', null, '1513820398', '0', '45.245.238.30', '45.245.238.30', '33', '0', '0', '0', '0', '0', '100,100,100', '0', '', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '1', '0', '1', null, null, null, null, null, null, null, null, null, '0', '4', '0', '0', '15000', '2017-12-21 17:29:48', '100', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `users` VALUES ('26', null, 'Kiro', '$2a$10$doLtZNMxoB59xooKWDNBm.qJ5QCd0VjsdEokvFZz9mVK6GMGRWrYK', 'Kirodayad999@hotmail.com', '1', '0', '', '3', null, '66200', '0', '121', '26225', 'hd-209-1.lg-3058-108.cc-3007-108-92.sh-3016-108.hr-3163-35.ch-3077-92-108.ha-3488-0', 'M', 'The legend is back', '1513821866', '1514006170', '45.245.238.30,45.33.128.16', '45.245.238.30,45.33.128.16', '33', '0', '0', '0', '0', '0', '100,100,100', '0', '~9b1a0664781710500b9a054dfd49e250', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '1', '0', '1', null, null, null, null, null, null, null, null, null, '0', '4', '0', '0', '15000', '2017-12-22 21:16:09', '100', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `users` VALUES ('27', null, 'Sonny', '$2a$10$z4mcFURM2cuplwnei32/SelAeGFquuinURQgjl7aByfiO3a/bHdfW', 'Sonnynixon15@gmail.com', '3', '1', '', '3', null, '425757', '0', '169', '422120', 'sh-3089-108.lg-3058-110.hd-209-2.ch-3050-108-92.hr-3163-1355.wa-3073-108.cc-3246-108.ha-987462863-62', 'M', 'Hey, hows life?', '1513823907', '1514008801', '10.145.156.157,82.132.234.52', '80.6.245.155,107.178.36.182', '7357', '0', '0', '0', '0', '0', '100,100,100', '0', '~a92a4ce9e139f26de50c8867b58e6eee', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '1', '0', '1', null, null, null, null, null, null, null, null, null, '0', '4', '0', '0', '15000', '2017-12-22 22:02:41', '100', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `users` VALUES ('28', null, 'Joel', '$2a$10$Q.y/rGbwH6kZjksNYKSXzuUypJcJ5j5l4DcMz2pc5ity.Q37KUYaa', 'joelt@maio.com', '1', '0', '', '3', null, '58100', '0', '15', '18100', 'sh-3035-1408.hr-828-61.ha-3488-0.lg-280-110.hd-209-2.ch-255-1423', 'M', null, '1513824758', '1513826842', '104.236.68.146,45.33.136.17', '104.236.68.146,45.33.136.17', '33', '0', '0', '0', '0', '0', '100,100,100', '0', '~a3a9a88d11ee8913e5bd3a78431c1471', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '1', '0', '1', null, null, null, null, null, null, null, null, null, '0', '4', '0', '0', '15000', '2017-12-21 17:29:48', '100', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `users` VALUES ('29', null, 'Laura', '$2a$10$IprRdgBl4/phKBToFV/PUOVEWdmXYIcouNN/8LpL5kH5Bm8hmiB3u', 'laurajones@yahoo.com', '1', '0', '', '3', null, '52100', '0', '15', '11605', 'sh-3035-1408.hr-828-61.ha-3488-0.lg-280-110.hd-209-2.ch-255-1423', 'M', null, '1513825315', '1513826843', '104.236.68.146,45.33.136.17', '104.236.68.146,45.33.136.17', '33', '0', '0', '0', '0', '0', '100,100,100', '0', '~a3a9a88d11ee8913e5bd3a78431c1471', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '1', '0', '1', null, null, null, null, null, null, null, null, null, '0', '4', '0', '0', '15000', '2017-12-21 17:29:48', '100', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `users` VALUES ('30', null, 'DickInYoFace', '$2a$10$VcDv/LzLScF5YIc8W6QZPupPY/wi81AJfk/W.EouFybv1iAxkzuoK', 'adqiwoeiqwe@email.com', '1', '0', '', '3', null, '143300', '0', '52', '102320', 'hd-787592-97556.lg-7218322-110.ch-3203-62', 'M', null, '1513828952', '1513844347', '2a02:c7f:7822:2b00:8917:9cef:74f3:fd2c', '2a02:c7f:7822:2b00:8917:9cef:74f3:fd2c', '33', '0', '0', '0', '0', '0', '100,100,100', '1513830615', '~f57e2e5c53c4412408ce86aa20fb93bb', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '1', '0', '1', null, null, null, null, null, null, null, null, null, '0', '4', '0', '0', '15000', '2017-12-21 17:29:48', '100', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `users` VALUES ('31', null, 'BHAD', '$2a$10$e9jGqMn6foOdzv2vBJzQhe4bGZysMtZYIzxGTgNjpQiEaQeeaCL5.', 'dksdljf@gmail.com', '1', '0', '', '3', null, '52100', '0', '17', '11610', 'ch-665-92.hr-3012-39.hd-628-10.lg-710-110', 'F', 'hi bitch hi bitch', '1513828956', '1513830497', '71.13.112.146', '71.13.112.146', '33', '0', '0', '0', '0', '0', '100,100,100', '0', '~a3a0ae8dac35442bf9acb867dbdfd1cd', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '0', '1', null, null, null, null, null, null, null, null, null, '0', '4', '0', '0', '15000', '2017-12-21 17:29:48', '100', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `users` VALUES ('32', null, 'WaveAfterWave', '$2a$10$06hGc3F9fEmnYGLuaqzt7OHWgiBmVOX5ljpY0tqktyC0GGeBJlyYm', 'weiqwieiq@email.com', '1', '0', '', '3', null, '235200', '0', '102800', '94235', 'lg-716-66-62.hd-600-1.hr-515-33.sh-735-68.ch-635-70', 'F', 'http://prntscr.com/hqmmve', '1513841869', '1513990054', '2a02:c7f:7822:2b00:8917:9cef:74f3:fd2c', '2a02:c7f:7822:2b00:8917:9cef:74f3:fd2c', '33', '0', '0', '0', '0', '0', '100,100,100', '1513842058', '~f57e2e5c53c4412408ce86aa20fb93bb', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '0', '1', null, null, null, null, null, null, null, null, null, '0', '4', '0', '0', '15000', '2017-12-22 16:47:34', '100', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `users` VALUES ('33', null, 'Fat', '$2a$10$CG7PPQ6Sr8.dViWeEJMUF.J2TboU6IByufo4ojQzfgRlV/QCUOuoC', 'fshatc@hotmail.com', '1', '0', '', '3', null, '346100', '0', '182', '303135', 'hr-987462909-31-31.hd-605-1.he-987462883-62.lg-6010508-1195.ha-3272-100-1189.ch-9120844-100', 'F', null, '1513849424', '1513964681', '24.89.253.173', '24.89.253.173', '33', '0', '0', '0', '0', '0', '100,100,100', '1513933453', '~1621fb4206b390f25a1cdaa9de745570', '0', '0', '0', '0', '0', '100', '0', '0', '1', '0', '0', '0', '1', null, null, null, null, null, null, null, null, null, '0', '5', '0', '0', '15000', '2017-12-22 09:44:41', '100', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `users` VALUES ('34', null, 'Blue', '$2a$10$.Crz2eDf.CmKWgwrXuTSzOBPcZaLFhHYVGCZwS7WnGb3BhL8W22Ca', 'aoisj@oiasjdoij.com', '1', '0', '', '3', null, '54200', '0', '69', '13205', 'hd-190-2.hr-125-31.ch-215-62.lg-280-110.sh-295-62', 'M', null, '1513849518', '1513941997', '2001:569:7183:7d00:2db7:c1ce:c491:fa39', '2001:569:7183:7d00:2db7:c1ce:c491:fa39', '33', '0', '0', '0', '0', '0', '100,100,100', '0', '~7d92d3c67291a14840209cec3cfd3822', '0', '0', '0', '0', '0', '100', '0', '0', '1', '0', '1', '0', '1', null, null, null, null, null, null, null, null, null, '0', '4', '0', '0', '15000', '2017-12-22 03:26:37', '100', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `users` VALUES ('35', null, '7', '$2a$10$f3pTUvBTvISUbhFz2XCuKuxjCmSqBFh/kf2NiJRAKzX99ecGG2qKq', 'ilovekate@yahoo.com', '1', '0', '', '3', null, '106700', '0', '186', '66755', 'sh-305-1195.hr-115-1036.hd-3095-1015.lg-275-110.fa-3271-65.cc-6125660-96-110.ha-61685620-81.ch-220-110', 'M', '.', '1513849979', '1513981854', '91.134.178.218', '91.134.178.218', '33', '0', '0', '0', '0', '0', '100,100,100', '0', '~306ed515e58617565219030450785460', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '0', '1', null, null, null, null, null, null, null, null, null, '0', '4', '0', '0', '15000', '2017-12-22 14:30:54', '100', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `users` VALUES ('36', null, '6', '$2a$10$RM9bOcc5uEjh4Lj8nSgqWerKUoG5SkRWSwfDZyiVyksuGyoqb3Xhm', 'kate@gmail.com', '1', '0', '', '3', null, '58100', '0', '18', '18110', 'ch-987435752-92.hr-834-31.hd-600-2.sh-740-92.lg-710-92.cc-987435750-62.he-3070-66', 'F', null, '1513850027', '1513853786', '64.53.72.144', '64.53.72.144', '33', '0', '0', '0', '0', '0', '100,100,100', '0', '~19e04c34b042fc26d444e3c5c1c8e891', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '1', '0', '1', null, null, null, null, null, null, null, null, null, '0', '4', '0', '0', '15000', '2017-12-21 17:29:48', '100', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `users` VALUES ('37', null, 'DaRtHV8R', '$2a$10$n6VOKANSKQUNDkF/RQsicuGFcnC8Z7hM8zWvtLejLumYQqJaDFAw6', 'bruinfan1726@gmail.com', '1', '0', '', '3', null, '50000', '0', '15', '10000', 'sh-3035-1408.hr-828-61.ha-3488-0.lg-280-110.hd-209-2.ch-255-1423', 'M', null, '1513853921', '0', '163.182.196.177', '163.182.196.177', '33', '0', '0', '0', '0', '0', '100,100,100', '0', '', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '1', '0', '1', null, null, null, null, null, null, null, null, null, '0', '1', '0', '0', '15000', '2017-12-21 17:29:48', '100', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `users` VALUES ('38', null, 'Jacob', '$2a$10$Rt3tjTcJnlXaRL1iFQwsseLlBg79IYrFNyu3QT0D.ceFGhAFomahG', 'JacobKing-ox@hotmail.co.uk', '1', '0', '', '3', null, '50000', '0', '15', '10000', 'sh-3035-1408.hr-828-61.ha-3488-0.lg-280-110.hd-209-2.ch-255-1423', 'M', null, '1513858898', '0', '2.31.104.72', '2.31.104.72', '33', '0', '0', '0', '0', '0', '100,100,100', '0', '', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '1', '0', '1', null, null, null, null, null, null, null, null, null, '0', '4', '0', '0', '15000', '2017-12-21 17:29:48', '100', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `users` VALUES ('39', null, 'Chloee', '$2a$10$8aFTzJabHm3YKH0rj.BBLebi4cNfU7979us2w2e4mEuqOjVcs4fZS', 'chloe98chloe98x@gmail.com', '1', '0', '', '3', null, '50000', '0', '15', '10000', 'sh-3035-1408.hr-828-61.ha-3488-0.lg-280-110.hd-209-2.ch-255-1423', 'M', null, '1513891460', '0', '2a02:c7f:1a0c:ab00:ecf5:5013:b416:976b', '2a02:c7f:1a0c:ab00:ecf5:5013:b416:976b', '33', '0', '0', '0', '0', '0', '100,100,100', '0', '', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '1', '0', '1', null, null, null, null, null, null, null, null, null, '0', '1', '0', '0', '15000', '2017-12-21 17:29:48', '100', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `users` VALUES ('40', null, 'Liam,-', '$2a$10$2sNhxu.fyRRX87ZeIUOeG.Xo1EIMdkyDA9i8tjaNuwmZqQr39q.Dq', 'Liam@FindRetros.pw', '1', '0', '', '3', null, '58400', '0', '23', '16430', 'hr-3163-32.hd-180-8.ha-987462863-62.sh-3115-64-64.ch-255-1198.lg-3088-92-92', 'M', 'No Need For A Motto.', '1513897591', '1513914569', '65.153.98.146', '65.153.98.146', '33', '0', '0', '0', '0', '0', '100,100,100', '1513909767', '~2b0d80a76b5b0c6b89854d8f5d339550', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '1', '0', '1', null, null, null, null, null, null, null, null, null, '0', '4', '0', '0', '15000', '2017-12-21 20:23:22', '100', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `users` VALUES ('41', null, 'Amy', '$2a$10$TIBitm4QSJYc0UQLL0PP9ePTIY7l8Bcdf8N6sUxBq47rewjGJvMkm', 'preopho@gmail.com', '1', '0', '', '3', null, '50000', '0', '15', '10000', 'sh-3035-1408.hr-828-61.ha-3488-0.lg-280-110.hd-209-2.ch-255-1423', 'M', null, '1513901378', '0', '82.10.42.97', '82.10.42.97', '33', '0', '0', '0', '0', '0', '100,100,100', '0', '', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '1', '0', '1', null, null, null, null, null, null, null, null, null, '0', '5', '0', '0', '15000', '2017-12-21 20:23:22', '100', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `users` VALUES ('42', null, 'goat', '$2a$10$f.NXPo/seOyPrJh2f0ZqCOTmMW.0dMsTvcIsO3sfQ3/F5Mo62GFai', 'polobearcon@gmail.com', '1', '0', '', '3', null, '50000', '0', '15', '10000', 'sh-3035-1408.hr-828-61.ha-3488-0.lg-280-110.hd-209-2.ch-255-1423', 'M', null, '1513901587', '0', '69.147.202.225', '69.147.202.225', '33', '0', '0', '0', '0', '0', '100,100,100', '0', '', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '1', '0', '1', null, null, null, null, null, null, null, null, null, '0', '4', '0', '0', '15000', '2017-12-21 20:23:23', '100', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `users` VALUES ('43', null, 'Kiera', '$2a$10$vfrd4SGg5vic5mg8ipMjUOxMJfor1gwx27mt7wrZJULAuG1xT3JX2', 'charlenelouise123@gmail.com', '1', '0', '', '3', null, '99424', '0', '40', '58545', 'hr-987462889-45.ha-1006-62.lg-3057-1189.hd-600-2.ch-5659282-92-92', 'F', null, '1513922978', '1513985874', '77.103.13.231', '77.103.224.2', '7357', '0', '0', '0', '0', '0', '100,100,100', '0', '~7e162165f3673d89cb99b7135eac5267', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '1', '0', '1', null, null, null, null, null, null, null, null, null, '0', '6', '0', '0', '15000', '2017-12-22 15:37:54', '100', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `users` VALUES ('44', null, 'Spectacular', '$2a$10$MORFOr0Vr9VLtyuJouVFh.PdBJQr9qHrzwSZrD3wnZjPeX/UHQ/3e', 'dsijfsid@gmail.com', '1', '0', '', '3', null, '60200', '0', '440', '19720', 'ea-3141-62.he-3189-92.lg-3006-63-92.cc-3008-105-92.hd-787591-1.hr-1585832-42.ch-665-92', 'F', '...', '1513930582', '1513939989', '2a02:c7d:5eb1:b600:17e:4daf:6ccb:5e84', '2a02:c7d:5eb1:b600:17e:4daf:6ccb:5e84', '7357', '0', '0', '0', '0', '0', '100,100,100', '0', '~326f5205becaf7879c2acdecbb5d7f61', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '0', '1', null, null, null, null, null, null, null, null, null, '0', '4', '0', '0', '15000', '2017-12-22 02:53:09', '100', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `users` VALUES ('45', null, 'Note', '$2a$10$79liJX06xRbZNf9vDShrL.11BNsf7kKiK6QBCRRFf3D5yPHoIlGcK', 'dennask@live.com', '1', '0', '', '3', null, '10200', '0', '70', '12710', 'sh-290-62.lg-285-110.he-1601-62.ea-1402-62.ch-805-62.ha-1002-1189.hd-209-1370', 'M', null, '1513934122', '1513936959', '81.236.17.114', '81.236.17.114', '7357', '0', '0', '0', '0', '0', '100,100,100', '0', '~c54eda163fe43677bc557ff20372e797', '0', '0', '0', '0', '0', '20', '0', '0', '1', '0', '1', '0', '1', null, null, null, null, null, null, null, null, null, '0', '4', '0', '0', '15000', '2017-12-22 02:02:38', '100', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `users` VALUES ('46', null, 'Chels', '$2a$10$s8tsBUaGmd5YpsO2IeVELOa/JBmD2nS1fGVKb.b.l2PFu7rtUXlgy', 'chelseasmart-2000@hotmail.com', '1', '0', '', '3', null, '50000', '0', '15', '10005', 'ha-92141833-62.lg-3023-110.ch-660-92.hr-3012-55.ca-201525-62.hd-600-10', 'F', null, '1513939863', '1513940880', '2.29.110.139', '2.29.110.139', '7357', '0', '0', '0', '0', '0', '100,100,100', '0', '~e64dcc715cf3e6cf7882550314a2e1a9', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '1', '0', '1', null, null, null, null, null, null, null, null, null, '0', '4', '0', '0', '15000', '2017-12-22 18:52:05', '100', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `users` VALUES ('47', null, 'Zan', '$2a$10$EfeEoU.lkh3.0mqH1uP80.13qKovtk39c.gg5p5hU2x5725Xv166i', 'zanpayment@gmail.com', '1', '0', '', '3', null, '50000', '0', '15', '10000', 'sh-3035-1408.hr-828-61.ha-3488-0.lg-280-110.hd-209-2.ch-255-1423', 'M', null, '1513990167', '0', '2.219.73.84,54.77.105.21', '2.219.73.84,52.18.65.125', '7357', '0', '0', '0', '0', '0', '100,100,100', '0', '', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '1', '0', '1', null, null, null, null, null, null, null, null, null, '0', '4', '0', '0', '15000', '2017-12-22 18:52:05', '100', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `users` VALUES ('48', null, 'qwerty123', '$2a$10$w6Chh4IYRDm.YX61W4miLukE97dUmVPXH4s/rMla57M4En4ec2vwC', 'gugi@muimail.com', '1', '0', '', '3', null, '50000', '0', '15', '10000', 'sh-3035-1408.hr-828-61.ha-3488-0.lg-280-110.hd-209-2.ch-255-1423', 'M', null, '1513994959', '0', '87.7.139.64,54.77.105.21', '87.7.139.64,54.77.105.21', '7357', '0', '0', '0', '0', '0', '100,100,100', '0', '', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '1', '0', '1', null, null, null, null, null, null, null, null, null, '0', '4', '0', '0', '15000', '2017-12-22 18:52:05', '100', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `users` VALUES ('49', null, 'Esmay', '$2a$10$oAoQhu9kbVBS1kR00rZWR.ODv7P/I7JnU1VsJl2wANw.s/5DCrI8q', 'esmaylangenhuizen@outlook.com', '1', '0', '', '0', null, '50000', '0', '15', '10000', 'sh-3035-1408.hr-828-61.ha-3488-0.lg-280-110.hd-209-2.ch-255-1423', 'M', null, '1513999731', '0', '217.121.207.13,52.19.36.139', '217.121.207.13,52.19.36.139', '7357', '0', '0', '0', '0', '0', '100,100,100', '0', '', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '1', '0', '1', null, null, null, null, null, null, null, null, null, '0', '4', '0', '0', '15000', '0000-00-00 00:00:00', '100', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');

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
-- Table structure for xhabbo_errors
-- ----------------------------
DROP TABLE IF EXISTS `xhabbo_errors`;
CREATE TABLE `xhabbo_errors` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `user` int(11) DEFAULT NULL,
  `url_accessed` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=ascii;

-- ----------------------------
-- Records of xhabbo_errors
-- ----------------------------
INSERT INTO `xhabbo_errors` VALUES ('1', 'Hotel - Users Table', '1', '/hotel/accounts', 'normal', 'Error: select `users`.* from `users` - ER_NO_SUCH_TABLE: Table \'xhabbo.users\' doesn\'t exist', '2017-12-22 16:33:13');
INSERT INTO `xhabbo_errors` VALUES ('2', 'Hotel - Users Table', '1', '/hotel/accounts', 'normal', 'ReferenceError: Group is not defined', '2017-12-22 16:34:50');
INSERT INTO `xhabbo_errors` VALUES ('3', 'Hotel - Users Table', '1', '/hotel/accounts', 'normal', 'ReferenceError: Group is not defined', '2017-12-22 16:34:58');
INSERT INTO `xhabbo_errors` VALUES ('4', 'Hotel - User Editing', '1', '/hotel/accounts/edit/1', 'normal', 'User does not exist', '2017-12-23 02:06:59');
INSERT INTO `xhabbo_errors` VALUES ('5', 'Hotel - Users Table', '1', '/hotel/accounts', 'normal', 'ReferenceError: Moment is not defined', '2017-12-23 02:47:58');
INSERT INTO `xhabbo_errors` VALUES ('6', 'Hotel - Group Listing', '1', '/hotel/groups', 'normal', 'Error: select `permissions_groups`.* from `permissions_groups` where `staff` = 1 - ER_BAD_FIELD_ERROR: Unknown column \'staff\' in \'where clause\'', '2017-12-23 04:55:22');
INSERT INTO `xhabbo_errors` VALUES ('7', 'Hotel - Group Listing', '1', '/hotel/groups', 'normal', 'Error: select `users`.* from `users` where `users`.`vip_level` in (0, 1, 2, 3, 4, 5) - ER_BAD_FIELD_ERROR: Unknown column \'users.vip_level\' in \'where clause\'', '2017-12-23 04:56:22');
INSERT INTO `xhabbo_errors` VALUES ('8', 'Hotel - Group Listing', '1', '/hotel/groups', 'normal', 'Error: select `users`.* from `users` where `users`.`vip_level` in (0, 1, 2, 3, 4, 5) - ER_BAD_FIELD_ERROR: Unknown column \'users.vip_level\' in \'where clause\'', '2017-12-23 04:56:22');
INSERT INTO `xhabbo_errors` VALUES ('9', 'Hotel - Group Listing', '1', '/hotel/groups', 'normal', 'Error: select `users`.* from `users` where `users`.`vip_level` in (0, 1, 2, 3, 4, 5) - ER_BAD_FIELD_ERROR: Unknown column \'users.vip_level\' in \'where clause\'', '2017-12-23 04:56:23');
INSERT INTO `xhabbo_errors` VALUES ('10', 'Hotel - Group Editing', '1', '/hotel/subscriptions/edit/0', 'normal', 'Error: Undefined binding(s) detected when compiling UPDATE query: update `subscriptions` set `name` = ?, `badge_code` = ? where `id` = ?', '2017-12-23 05:35:57');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xhabbo_links
-- ----------------------------

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
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8;

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
INSERT INTO `xhabbo_sessions` VALUES ('29', '1', null, null, null);
INSERT INTO `xhabbo_sessions` VALUES ('30', '1', null, null, null);
INSERT INTO `xhabbo_sessions` VALUES ('31', '1', null, null, null);
INSERT INTO `xhabbo_sessions` VALUES ('32', '1', null, null, null);
INSERT INTO `xhabbo_sessions` VALUES ('33', '1', null, null, null);
INSERT INTO `xhabbo_sessions` VALUES ('34', '1', null, null, null);
INSERT INTO `xhabbo_sessions` VALUES ('35', '1', null, null, null);
INSERT INTO `xhabbo_sessions` VALUES ('36', '1', null, null, null);
INSERT INTO `xhabbo_sessions` VALUES ('37', '1', null, null, null);
INSERT INTO `xhabbo_sessions` VALUES ('38', '1', null, null, null);
INSERT INTO `xhabbo_sessions` VALUES ('39', '1', null, null, null);
INSERT INTO `xhabbo_sessions` VALUES ('40', '1', null, null, null);
INSERT INTO `xhabbo_sessions` VALUES ('41', '1', null, null, null);
INSERT INTO `xhabbo_sessions` VALUES ('42', '1', null, null, null);
INSERT INTO `xhabbo_sessions` VALUES ('43', '1', null, null, null);

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
  `habbo_imager` varchar(255) DEFAULT 'https://avatar-retro.com/habbo-imaging/avatarimage',
  `habbo_images` varchar(255) DEFAULT 'https://assets.habboon.pw/c_images/album1584/',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xhabbo_settings
-- ----------------------------
INSERT INTO `xhabbo_settings` VALUES ('1', 'normal', '$2a$10$McVIxmu2DBEFihfmeyFcKedHJ4GUDAMKpVoy0Z8z6NCZ5JMxvnMC.', '1.00', 'http://localhost:8080', null, null, 'enabled', null, 'low', 'enabled', 'enabled', 'https://avatar-retro.com/habbo-imaging/avatarimage', 'https://assets.habboon.pw/c_images/album1584/');

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
  `last_active` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `security` enum('single','two') DEFAULT 'single',
  PRIMARY KEY (`id`,`username`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xhabbo_users
-- ----------------------------
INSERT INTO `xhabbo_users` VALUES ('1', 'Chris', '$2a$10$WQsAkY7Qd5idKkroXNqUruFbHgrZUuW4wp5e1ViX1naEE2.pQi5xi', '1', 'chrismpettyjohn@gmail.com', 'normal', 'https://i.imgur.com/fk8v3E0.png', 'Chris', null, '2017-12-27 00:36:20', '2017-12-15 03:29:25', '2017-12-15 03:29:25', 'single');
