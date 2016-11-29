-- phpMyAdmin SQL Dump
-- version 4.0.10.14
-- http://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Generation Time: Nov 28, 2016 at 03:29 AM
-- Server version: 5.5.53-MariaDB
-- PHP Version: 5.4.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `native_db`
--
use native_db;
-- --------------------------------------------------------

--
-- Table structure for table `old_cora_associations`
--

CREATE TABLE IF NOT EXISTS `old_cora_associations` (
  `id` int(11) NOT NULL,
  `author` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `source` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `external_source_link` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `region` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `period` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tribe__ethnic_group` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ritual` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `native_language` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `contributor` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `artifact_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `architecture` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `economy` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `conflict_and_resolution` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `family_and_marriage` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `folklore` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `settlement_pattern` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `social_behavior` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `social_event` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `social_organization` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `kinbased_social_structure` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `kinship_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `interethnic_relations` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `responses_to_modernization__globalization` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `philosophy` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `religion_and_spirituality` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `healing_and_illness` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `visual_and_performing_arts` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `old_cora_associations`
--

INSERT INTO `old_cora_associations` (`id`, `author`, `source`, `external_source_link`, `region`, `period`, `tribe__ethnic_group`, `ritual`, `native_language`, `contributor`, `artifact_type`, `architecture`, `economy`, `conflict_and_resolution`, `family_and_marriage`, `folklore`, `gender`, `settlement_pattern`, `social_behavior`, `social_event`, `social_organization`, `kinbased_social_structure`, `kinship_type`, `interethnic_relations`, `responses_to_modernization__globalization`, `philosophy`, `religion_and_spirituality`, `healing_and_illness`, `visual_and_performing_arts`) VALUES
(2, 'Lumholtz, Carl', 'Unknown Mexico: A Record of Five Years’ Exploration Among the Tribes of the Western Sierra Madre; In the Tierra Caliente of Tepic and Jalisco; and Among the Tarascos of Michoacan, Vol. 1 London: Macmillan and Co., Limited, 1902', 'http://www.gutenberg.org/files/16426/16426-h/16426-h.htm#d0e6646', 'Gran Nayar', 'Nineteenth Century', 'Cora', 'Offering and/or sacrifice,Sorcery', 'Cora', 'Edgar Martin del Campo', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(3, '', '', '', '', '', '', '', '', 'Edgar Martin del Campo', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(4, 'Lumholtz, Carl', 'Unknown Mexico: A Record of Five Years’ Exploration Among the Tribes of the Western Sierra Madre; In the Tierra Caliente of Tepic and Jalisco; and Among the Tarascos of Michoacan, Vol. 1 London: Macmillan and Co., Limited, 1902', 'http://www.gutenberg.org/files/16426/16426-h/16426-h.htm#d0e6646', 'Gran Nayar', 'Nineteenth Century', 'Cora', 'Ritual effigy', 'Cora', 'Edgar Martin del Campo', '', '', '', '', '', 'Myth', '', '', '', '', '', '', '', '', '', '', '', 'Healing rites,Healing instruments,Medicine', ''),
(5, 'Lumholtz, Carl', 'Unknown Mexico: A Record of Five Years’ Exploration Among the Tribes of the Western Sierra Madre; In the Tierra Caliente of Tepic and Jalisco; and Among the Tarascos of Michoacan, Vol. 1 London: Macmillan and Co., Limited, 1902', 'http://www.gutenberg.org/files/16426/16426-h/16426-h.htm#d0e6646', 'Gran Nayar', 'Nineteenth Century', 'Cora', '', 'Cora', 'Edgar Martin del Campo', '', '', '', 'War', '', 'Historical account', '', '', '', '', '', '', '', 'Inter-ethnic marriage', '', '', '', '', ''),
(6, 'Lumholtz, Carl', 'Unknown Mexico: A Record of Five Years’ Exploration Among the Tribes of the Western Sierra Madre; In the Tierra Caliente of Tepic and Jalisco; and Among the Tarascos of Michoacan, Vol. 1 London: Macmillan and Co., Limited, 1902', 'http://www.gutenberg.org/files/16426/16426-h/16426-h.htm#d0e6646', 'Gran Nayar', 'Nineteenth Century', 'Cora', '', 'Cora', 'Edgar Martin del Campo', '', '', 'Exchange', '', '', '', '', '', '', '', '', '', '', 'Ethnic stereotypes,Ideas about neighbors,Exchanges between groups', '', '', '', '', ''),
(7, 'Lumholtz, Carl', 'Unknown Mexico: A Record of Five Years’ Exploration Among the Tribes of the Western Sierra Madre; In the Tierra Caliente of Tepic and Jalisco; and Among the Tarascos of Michoacan, Vol. 1 London: Macmillan and Co., Limited, 1902', 'http://www.gutenberg.org/files/16426/16426-h/16426-h.htm#d0e6646', 'Gran Nayar', 'Nineteenth Century', 'Cora', 'Season rites', 'Cora', 'Edgar Martin del Campo', 'Woodworking', '', 'Food exploitation and preparation', '', '', '', '', '', '', 'Feast', '', '', '', '', '', '', 'Ritual specialists', '', 'Dance,Music'),
(8, 'Lumholtz, Carl', 'Unknown Mexico: A Record of Five Years’ Exploration Among the Tribes of the Western Sierra Madre; In the Tierra Caliente of Tepic and Jalisco; and Among the Tarascos of Michoacan, Vol. 1 London: Macmillan and Co., Limited, 1902', 'http://www.gutenberg.org/files/16426/16426-h/16426-h.htm#d0e6755', 'Gran Nayar', 'Nineteenth Century', 'Cora', 'Ritual effigy,Offering and/or sacrifice', 'Cora', 'Edgar Martin del Campo', 'Clothing / Apparel,Fabrics and fibers', 'Ritual space', '', '', 'Child raising', '', '', '', '', '', '', '', '', '', '', '', 'Cosmology,Divinities', '', ''),
(9, 'Lumholtz, Carl', 'Unknown Mexico: A Record of Five Years’ Exploration Among the Tribes of the Western Sierra Madre; In the Tierra Caliente of Tepic and Jalisco; and Among the Tarascos of Michoacan, Vol. 1 London: Macmillan and Co., Limited, 1902', 'http://www.gutenberg.org/files/16426/16426-h/16426-h.htm#d0e6755', 'Gran Nayar', 'Nineteenth Century', 'Cora', 'Funerary rites,Offering and/or sacrifice,Food-related rites,Ritual dance,Ecclesiastical cult', 'Cora', 'Edgar Martin del Campo', 'Shelter,Food exploitation or preparation,Fabrics and fibers', 'Residence', 'Food exploitation and preparation', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'Illness', 'Dance'),
(10, 'Lumholtz, Carl', 'Unknown Mexico: A Record of Five Years’ Exploration Among the Tribes of the Western Sierra Madre; In the Tierra Caliente of Tepic and Jalisco; and Among the Tarascos of Michoacan, Vol. 1 London: Macmillan and Co., Limited, 1902', 'http://www.gutenberg.org/files/16426/16426-h/16426-h.htm#d0e6850', 'Gran Nayar', 'Nineteenth Century', 'Cora', 'Ritual avoidances,Season rites,Rite of passage,Food-related rites,Ritual dance,Entheogen', 'Cora', 'Edgar Martin del Campo', '', 'Wall', 'Mode of production', '', '', '', 'Male behavior or activity', '', 'Taboo / avoidances', '', '', '', '', 'Inter-ethnic marriage', '', '', 'Cult to the dead', '', 'Dance'),
(11, 'Lumholtz, Carl', 'Unknown Mexico: A Record of Five Years’ Exploration Among the Tribes of the Western Sierra Madre; In the Tierra Caliente of Tepic and Jalisco; and Among the Tarascos of Michoacan, Vol. 1 London: Macmillan and Co., Limited, 1902', 'http://www.gutenberg.org/files/16426/16426-h/16426-h.htm#d0e6850', 'Gran Nayar', 'Nineteenth Century', 'Cora', '', 'Cora', 'Edgar Martin del Campo', '', '', '', '', '', 'Myth,Hero figure', '', '', '', '', '', '', '', 'Ethnic stereotypes,Ideas about neighbors', '', 'Morality', 'Communication with the supernatural,Divinities,Theology', '', ''),
(12, 'Lumholtz, Carl', 'Unknown Mexico: A Record of Five Years’ Exploration Among the Tribes of the Western Sierra Madre; In the Tierra Caliente of Tepic and Jalisco; and Among the Tarascos of Michoacan, Vol. 1 London: Macmillan and Co., Limited, 1902', 'http://www.gutenberg.org/files/16426/16426-h/16426-h.htm#d0e6850', 'Gran Nayar', 'Nineteenth Century', 'Cora', '', 'Cora', 'Edgar Martin del Campo', '', '', '', '', '', 'Myth', '', '', '', '', '', '', '', 'Ideas about neighbors', '', '', '', '', ''),
(13, 'Lumholtz, Carl', 'Unknown Mexico: A Record of Five Years’ Exploration Among the Tribes of the Western Sierra Madre; In the Tierra Caliente of Tepic and Jalisco; and Among the Tarascos of Michoacan, Vol. 1 London: Macmillan and Co., Limited, 1902', 'http://www.gutenberg.org/files/16426/16426-h/16426-h.htm#d0e6850', 'Gran Nayar', 'Nineteenth Century', 'Cora', '', 'Cora', 'Edgar Martin del Campo', '', '', '', '', '', 'Myth', '', '', '', '', '', '', '', '', '', '', 'Cosmology', '', ''),
(14, 'Lumholtz, Carl', 'Unknown Mexico: A Record of Five Years’ Exploration Among the Tribes of the Western Sierra Madre; In the Tierra Caliente of Tepic and Jalisco; and Among the Tarascos of Michoacan, Vol. 1 London: Macmillan and Co., Limited, 1902', 'http://www.gutenberg.org/files/16426/16426-h/16426-h.htm#d0e6850', 'Gran Nayar', 'Nineteenth Century', 'Cora', '', 'Cora', 'Edgar Martin del Campo', '', '', 'Balanced reciprocity', '', '', 'Myth', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(15, 'Lumholtz, Carl', 'Unknown Mexico: A Record of Five Years’ Exploration Among the Tribes of the Western Sierra Madre; In the Tierra Caliente of Tepic and Jalisco; and Among the Tarascos of Michoacan, Vol. 1 London: Macmillan and Co., Limited, 1902', 'http://www.gutenberg.org/files/16426/16426-h/16426-h.htm#d0e6850', 'Gran Nayar', 'Nineteenth Century', 'Cora', 'Prayer,Food-related rites,Ritual dance,Shamanic cult,Shamanism', 'Cora', 'Edgar Martin del Campo', '', '', '', 'Witchcraft accusation or trial', '', '', 'Female behavior or activity,Male behavior or activity', '', '', 'Courtship', '', '', '', '', '', 'Morality', 'Ancestor spirits,Divinities,Theology,Ritual specialists', 'Illness-inducing agent', ''),
(16, 'Lumholtz, Carl', 'Unknown Mexico: A Record of Five Years’ Exploration Among the Tribes of the Western Sierra Madre; In the Tierra Caliente of Tepic and Jalisco; and Among the Tarascos of Michoacan, Vol. 1 London: Macmillan and Co., Limited, 1902', 'http://www.gutenberg.org/files/16426/16426-h/16426-h.htm#d0e6850', 'Gran Nayar', 'Nineteenth Century', 'Cora', 'Ritual effigy,Prayer,Offering and/or sacrifice,Ritual dance,Communal cult', 'Cora', 'Edgar Martin del Campo', 'Woodworking,Fabrics and fibers', 'Ritual space', '', '', '', 'Myth', 'Female behavior or activity', '', 'Taboo / avoidances', '', '', '', '', '', '', '', 'Divinities,Theology,Ritual specialists', 'Healing instruments', 'Dance'),
(17, 'Lumholtz, Carl', 'Unknown Mexico: A Record of Five Years’ Exploration Among the Tribes of the Western Sierra Madre; In the Tierra Caliente of Tepic and Jalisco; and Among the Tarascos of Michoacan, Vol. 1 London: Macmillan and Co., Limited, 1902', 'http://www.gutenberg.org/files/16426/16426-h/16426-h.htm#d0e6850', 'Gran Nayar', 'Nineteenth Century', 'Cora', 'Funerary rites,Ritual avoidances,Prayer,Offering and/or sacrifice,Food-related rites', 'Cora', 'Edgar Martin del Campo', 'Food exploitation or preparation,Woodworking,Fabrics and fibers', 'Ritual space', '', '', '', '', '', '', 'Taboo / avoidances', '', '', '', '', 'Ideas about neighbors', '', '', 'Cosmology,Ancestor spirits,Cult to the dead,Divinities', '', ''),
(18, 'Lumholtz, Carl', 'Unknown Mexico: A Record of Five Years’ Exploration Among the Tribes of the Western Sierra Madre; In the Tierra Caliente of Tepic and Jalisco; and Among the Tarascos of Michoacan, Vol. 1 London: Macmillan and Co., Limited, 1902', 'http://www.gutenberg.org/files/16426/16426-h/16426-h.htm#d0e6850', 'Gran Nayar', 'Nineteenth Century', 'Cora', 'Ritual avoidances,Ritual effigy,Season rites,Prayer,Offering and/or sacrifice,Altar,Food-related rites,Ritual dance,Communal cult,Shamanism', 'Cora', 'Edgar Martin del Campo', 'Woodworking', 'Ritual space', '', '', '', '', 'Female behavior or activity,Male behavior or activity', '', 'Taboo / avoidances', '', '', '', '', '', '', '', 'Cult to the dead,Divinities,Ritual specialists', 'Healing instruments', 'Dance,Music'),
(19, 'Lumholtz, Carl', 'Unknown Mexico: A Record of Five Years’ Exploration Among the Tribes of the Western Sierra Madre; In the Tierra Caliente of Tepic and Jalisco; and Among the Tarascos of Michoacan, Vol. 1 London: Macmillan and Co., Limited, 1902', 'http://www.gutenberg.org/files/16426/16426-h/16426-h.htm#d0e6850', 'Gran Nayar', 'Nineteenth Century', 'Cora', 'Ritual effigy,Offering and/or sacrifice,Altar,Food-related rites,Ritual dance,Communal cult,Shamanism', 'Cora', 'Edgar Martin del Campo', '', 'Ritual space', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'Communication with the supernatural,Divinities,Theology,Ritual specialists', 'Healing specialist', 'Dance,Music'),
(20, 'Lumholtz, Carl', 'Unknown Mexico: A Record of Five Years’ Exploration Among the Tribes of the Western Sierra Madre; In the Tierra Caliente of Tepic and Jalisco; and Among the Tarascos of Michoacan, Vol. 1 London: Macmillan and Co., Limited, 1902', 'http://www.gutenberg.org/files/16426/16426-h/16426-h.htm#d0e6850', 'Gran Nayar', 'Nineteenth Century', 'Cora', '', 'Cora', 'Edgar Martin del Campo', '', 'Burial site', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'Vision or dream', '', ''),
(21, 'Boas, Franz', 'The Central Eskimo: Sixth Annual Report of the Bureau of Ethnology to the Secretary of the Smithsonian Institution, 1884-1885, Government Printing Office, Washington, 1888, pages 399-670', 'http://www.gutenberg.org/files/42084/42084-h/42084-h.htm#trade', 'Arctic', 'Nineteenth Century', 'Eskimo', 'Ritual avoidances', '', 'Edgar Martin del Campo', 'Transportation', '', 'Food exploitation and preparation,Exchange', '', '', '', '', 'Nomadic', 'Taboo / avoidances', '', '', '', '', 'Exchanges between groups', '', '', '', '', ''),
(22, 'Boas, Franz', 'The Central Eskimo: Sixth Annual Report of the Bureau of Ethnology to the Secretary of the Smithsonian Institution, 1884-1885, Government Printing Office, Washington, 1888, pages 399-670', 'http://www.gutenberg.org/files/42084/42084-h/42084-h.htm#trade', 'Arctic', 'Nineteenth Century', 'Eskimo', '', '', 'Edgar Martin del Campo', '', '', 'Negative reciprocity', 'Duel,Raids,War', '', '', '', '', '', 'Greeting ceremony', '', 'Nuclear family', '', 'Exchanges between groups,Inter-ethnic marriage', '', '', '', '', ''),
(23, 'Boas, Franz', 'The Central Eskimo: Sixth Annual Report of the Bureau of Ethnology to the Secretary of the Smithsonian Institution, 1884-1885, Government Printing Office, Washington, 1888, pages 399-670', 'http://www.gutenberg.org/files/42084/42084-h/42084-h.htm#trade', 'Arctic', 'Nineteenth Century', 'Eskimo', '', '', 'Edgar Martin del Campo', '', '', 'Negative reciprocity', '', 'Adoption,Removal', '', '', '', '', '', '', '', '', 'Inter-ethnic marriage', '', '', '', '', ''),
(24, 'Boas, Franz', 'The Central Eskimo: Sixth Annual Report of the Bureau of Ethnology to the Secretary of the Smithsonian Institution, 1884-1885, Government Printing Office, Washington, 1888, pages 399-670', 'http://www.gutenberg.org/files/42084/42084-h/42084-h.htm#trade', 'Arctic', 'Nineteenth Century', 'Eskimo', '', '', 'Edgar Martin del Campo', 'Transportation,Food exploitation or preparation,Harvest of natural materials,Skin', '', 'Food exploitation and preparation,Balanced reciprocity', '', '', '', '', 'Migrant workforce', '', '', '', '', '', 'Exchanges between groups', 'Barter', '', '', '', ''),
(25, 'Boas, Franz', 'The Central Eskimo: Sixth Annual Report of the Bureau of Ethnology to the Secretary of the Smithsonian Institution, 1884-1885, Government Printing Office, Washington, 1888, pages 399-670', 'http://www.gutenberg.org/files/42084/42084-h/42084-h.htm#trade', 'Arctic', 'Nineteenth Century', 'Eskimo', '', '', 'Edgar Martin del Campo', 'Transportation,Harvest of natural materials,Other animal products,Woodworking,Stoneworking', '', 'Exchange', '', '', '', '', '', '', '', '', '', '', 'Exchanges between groups', '', '', '', '', ''),
(26, 'Edgar Martin del Campo', '', '', 'Gran Nayar', 'Twentieth Century', 'Cora', 'Ritual dance,Mask ritual', 'Cora', 'Edgar Martin del Campo', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'Mask'),
(27, 'Edgar Martin del Campo', '', '', 'Gran Nayar', 'Twenty-first Century', 'Huichol', 'Entheogen', 'Huichol', 'Edgar Martin del Campo', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(28, 'Edgar Martin del Campo', 'Metropolitan Museum of Art', 'http://metmuseum.org/art/collection/search/312626', 'Pacific Northwest', 'Nineteenth Century', 'Kwakiutl', 'Ritual dance,Mask ritual', 'Kwakiutl', 'Edgar Martin del Campo', 'Woodworking', '', '', '', '', '', '', '', '', '', '', 'Clan', '', '', '', '', 'Totem,Religion and kinship', '', 'Mask'),
(29, '', '', '', '', '', '', '', '', 'Edgar Martin del Campo', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(30, '', '', '', '', '', '', '', '', 'Edgar Martin del Campo', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(31, '', '', '', '', '', '', '', '', 'Edgar Martin del Campo', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(32, '', '', '', '', '', '', '', '', 'Edgar Martin del Campo', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(33, '', '', '', '', '', '', '', '', 'Edgar Martin del Campo', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(34, '', '', '', '', '', '', '', '', 'Edgar Martin del Campo', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(35, '', '', '', '', '', '', '', '', 'Edgar Martin del Campo', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(36, '', '', '', '', '', '', '', '', 'Edgar Martin del Campo', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(37, '', '', '', '', '', '', '', '', 'Edgar Martin del Campo', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(38, '', '', '', '', '', '', '', '', 'Edgar Martin del Campo', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(39, '', '', '', '', '', '', '', '', 'Edgar Martin del Campo', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(40, '', '', '', '', '', '', '', '', 'Edgar Martin del Campo', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(41, '', '', '', '', '', '', '', '', 'Edgar Martin del Campo', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(42, '', '', '', '', '', '', '', '', 'Edgar Martin del Campo', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(43, '', '', '', '', '', '', '', '', 'Edgar Martin del Campo', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(44, '', '', '', '', '', '', '', '', 'Edgar Martin del Campo', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(45, '', '', '', '', '', '', '', '', 'Edgar Martin del Campo', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(46, '', '', '', '', '', '', '', '', 'Edgar Martin del Campo', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(47, '', '', '', '', '', '', '', '', 'Edgar Martin del Campo', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(48, '', '', '', '', '', '', '', '', 'Edgar Martin del Campo', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(49, '', '', '', '', '', '', '', '', 'Edgar Martin del Campo', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(50, '', '', '', '', '', '', '', '', 'Edgar Martin del Campo', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(51, '', '', '', '', '', '', '', '', 'Edgar Martin del Campo', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(52, '', '', '', '', '', '', '', '', 'Edgar Martin del Campo', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(53, '', '', '', '', '', '', '', '', 'Edgar Martin del Campo', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(54, '', '', '', '', '', '', '', '', 'Edgar Martin del Campo', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(55, 'Edgar Martin del Campo', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(56, '', '', '', '', '', '', '', '', 'Edgar Martin del Campo', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(57, 'Edgar Martin del Campo', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(58, 'Edgar Martin del Campo', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(59, 'Edgar Martin del Campo', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(60, 'Edgar Martin del Campo', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(61, 'Edgar Martin del Campo', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(62, 'Qulitalik, Paulossie and Zacharias Kunuk, dirs.', 'Nunavut Independent Television Network', 'http://www.isuma.tv/isuma-productions/angakkuiit-shaman-stories', 'Arctic', 'Twenty-first Century', 'Inuit', 'Prayer,Sorcery,Shamanic cult,Shamanism', 'Inuktitut', 'Edgar Martin del Campo', 'Shelter,Food exploitation or preparation', 'Residence', 'Food exploitation and preparation', '', '', 'Historical account', '', '', '', 'Hunting', '', '', '', '', '', '', 'Divinities,Ritual specialists,Vision or dream', 'Healing specialist,Healing rites,Healing instruments,Illness,Illness-inducing agent', 'Song'),
(63, 'Edgar Martin del Campo', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(64, 'Edgar Martin del Campo', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(65, 'Edgar Martin del Campo', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(66, 'Edgar Martin del Campo', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
