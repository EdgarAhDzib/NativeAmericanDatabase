use native_db;
CREATE TABLE IF NOT EXISTS `saved_searches` (
  `id` int(10) primary key NOT NULL AUTO_INCREMENT,
  `user_id` int(10) NOT NULL,
  `content_id` int(10) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updatedAt` datetime NOT NULL DEFAULT '0000-00-00 00:00:00'
);