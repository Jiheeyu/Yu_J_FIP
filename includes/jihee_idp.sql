-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Dec 06, 2020 at 10:06 PM
-- Server version: 5.7.26
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jihee_idp`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_portfolio`
--

CREATE TABLE `tbl_portfolio` (
  `id` int(11) NOT NULL,
  `title` varchar(40) NOT NULL,
  `description` text NOT NULL,
  `thumb` varchar(60) NOT NULL,
  `source` varchar(80) NOT NULL,
  `btn_thumb` varchar(30) NOT NULL,
  `video_list` varchar(40) NOT NULL,
  `graphic_list` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_portfolio`
--

INSERT INTO `tbl_portfolio` (`id`, `title`, `description`, `thumb`, `source`, `btn_thumb`, `video_list`, `graphic_list`) VALUES
(1, 'DEMO REEL', 'My demo reel is to reveal the 3D name, 2D animation, and to show my motion design pieces. the name and 2D design are motived from my logo style like the colors. The girl in the video represents me. I created that the demo reel makes people feel cheerful and lovely.', 'port-demo-reel.jpg', 'https://www.youtube.com/embed/lDs_lcKNV5I', 'btn-deem-reel.png', 'demo', 'videoWork'),
(2, 'BEER VIDEO', 'It is a beer promotion advertisement video. My team created a mesh-up website \"Budweiser\" and \"Therabreath\". One of the project requirements is to create a mesh-up bottle design and model. Following the project, I edited our own beer promotion video which is classic and powerful.', 'port-promo-thumb.jpg', 'promo.mp4', 'btn-promo.png', 'promo', 'videoWork'),
(3, 'KIDS CHANNEL', 'The kid\'s channel video is playful and fun. I chose Disney junior kid\'s channel. I played with the mickey mouse shape in C4D. Using bright colors, moving objects can catch a kid\'s eyes.', 'port-kid-thumb.jpg', 'kids.mp4', 'btn-kids.png', 'kid', 'videoWork'),
(4, 'BEER POSTER', 'Mesh-up beer promotion portfolio work.', 'port-bottle.jpg', 'promo-full.jpg', 'btn-beer.png', 'update', 'graphicWork'),
(5, '192 BEE', 'The project is to create the label design of brand \"192 BEE \".\r\n\'The typography of 192 BEE visualizes as a bee illust shape.', 'port-bee.jpg', 'bee-full.jpg', 'btn-bee.png', 'update', 'graphicWork'),
(6, 'PIZ. APP', 'This is a Pizza app design. \"PIZ.\" app is for someone who loves pizza and would like to communicate with people who love pizza as well. ', 'port-piz.jpg', 'piz-full.jpg', 'btn-piz.png', 'update', 'graphicWork');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_portfolio`
--
ALTER TABLE `tbl_portfolio`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_portfolio`
--
ALTER TABLE `tbl_portfolio`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
