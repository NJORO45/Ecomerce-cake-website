-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 17, 2024 at 05:04 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `baecakes`
--

-- --------------------------------------------------------

--
-- Table structure for table `adminlogin`
--

CREATE TABLE `adminlogin` (
  `unid` varchar(255) NOT NULL,
  `userName` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `session` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `adminlogin`
--

INSERT INTO `adminlogin` (`unid`, `userName`, `password`, `session`) VALUES
('67836', '@Admin', '@Admin!', '0863');

-- --------------------------------------------------------

--
-- Table structure for table `canceled orders`
--

CREATE TABLE `canceled orders` (
  `cart_unid` varchar(255) NOT NULL,
  `user_unid` varchar(255) NOT NULL,
  `no_of_products` int(255) NOT NULL,
  `total_Amount` varchar(255) NOT NULL,
  `delivery_fee` varchar(255) NOT NULL,
  `productamount` varchar(255) NOT NULL,
  `dateAdded` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `canceled orders`
--

INSERT INTO `canceled orders` (`cart_unid`, `user_unid`, `no_of_products`, `total_Amount`, `delivery_fee`, `productamount`, `dateAdded`) VALUES
('17917623', '20245449', 3, '1210800', '0', '1210800', '2024-09-04 11:15:09');

-- --------------------------------------------------------

--
-- Table structure for table `completed orders`
--

CREATE TABLE `completed orders` (
  `unid` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `deliverdetails`
--

CREATE TABLE `deliverdetails` (
  `cart_unid` varchar(255) NOT NULL,
  `county` varchar(255) NOT NULL,
  `town` varchar(255) NOT NULL,
  `street` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ipns`
--

CREATE TABLE `ipns` (
  `pesapalNotification` varchar(255) NOT NULL,
  `pesapalTrackingId` varchar(255) NOT NULL,
  `pesapal_merchant_reference` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ipns`
--

INSERT INTO `ipns` (`pesapalNotification`, `pesapalTrackingId`, `pesapal_merchant_reference`, `status`) VALUES
('CHANGE', '445', '789', '');

-- --------------------------------------------------------

--
-- Table structure for table `login-table`
--

CREATE TABLE `login-table` (
  `unid` int(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `tel` varchar(255) NOT NULL,
  `pwwd` varchar(255) NOT NULL,
  `session` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `login-table`
--



-- --------------------------------------------------------

--
-- Table structure for table `new orders`
--

CREATE TABLE `new orders` (
  `cart_unid` varchar(255) NOT NULL,
  `user_unid` varchar(255) NOT NULL,
  `no_of_products` int(255) NOT NULL,
  `total_Amount` varchar(255) NOT NULL,
  `delivery_fee` varchar(255) NOT NULL,
  `productamount` varchar(255) NOT NULL,
  `dateAdded` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `new orders`
--



-- --------------------------------------------------------

--
-- Table structure for table `order_history`
--

CREATE TABLE `order_history` (
  `cart_unid` varchar(255) NOT NULL,
  `user_unid` varchar(255) NOT NULL,
  `qnty` varchar(255) NOT NULL,
  `total_price` varchar(255) NOT NULL,
  `order_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `delivery_fee` int(255) NOT NULL,
  `tax` varchar(255) NOT NULL,
  `overal_total` varchar(255) NOT NULL,
  `payment_status` varchar(255) NOT NULL,
  `order_tracking_id` varchar(255) NOT NULL,
  `merchant_reference` varchar(255) NOT NULL,
  `confirmation_code` varchar(255) NOT NULL,
  `payment_status_description` varchar(255) NOT NULL,
  `payment_status_code` varchar(255) NOT NULL,
  `payment_method` varchar(255) NOT NULL,
  `feedbackAmount` varchar(255) NOT NULL,
  `currency` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `order_history`
--

-- --------------------------------------------------------

--
-- Table structure for table `pending orders`
--

CREATE TABLE `pending orders` (
  `cart_unid` varchar(255) NOT NULL,
  `user_unid` varchar(255) NOT NULL,
  `no_of_products` varchar(255) NOT NULL,
  `total_amount` varchar(255) NOT NULL,
  `delivery_fee` varchar(255) NOT NULL,
  `productamount` varchar(255) NOT NULL,
  `dateAdded` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pending orders`
--



-- --------------------------------------------------------

--
-- Table structure for table `product-items`
--

CREATE TABLE `product-items` (
  `hotDeals` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `unid` int(100) NOT NULL,
  `description` text NOT NULL,
  `price` varchar(255) NOT NULL,
  `qnty` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product-items`
--

INSERT INTO `product-items` (`hotDeals`, `category`, `unid`, `description`, `price`, `qnty`, `image`) VALUES
('ordinary ', 'birthday', 36615, 'honey flavour', '600', '2', 'img/db0b.jpg'),
('ordinary ', 'birthday', 70870, 'honey flavour', '600', '2', 'img/e86a.jpg'),
('ordinary ', 'birthday', 2043975, 'honey flavour', '600', '2', 'img/4998.jpg'),
('hotDeals ', 'valentines', 63119770, 'honey flavour', '100', '5', 'img/8979.jpg'),
('ordinary ', 'birthday', 855305638, 'lemon flavour', '600', '2', 'img/68f8.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `shopping-cart`
--

CREATE TABLE `shopping-cart` (
  `Deals` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `cart-unid` int(255) NOT NULL,
  `user_unid` varchar(255) NOT NULL,
  `item-unid` int(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `color` text NOT NULL,
  `price` int(255) NOT NULL,
  `qnty` int(255) NOT NULL,
  `TotalPrice` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `checkoutState` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `shopping-cart`
--

INSERT INTO `shopping-cart` (`Deals`, `category`, `cart-unid`, `user_unid`, `item-unid`, `description`, `name`, `color`, `price`, `qnty`, `TotalPrice`, `image`, `checkoutState`) VALUES
('hotDeals ', 'birthday', 92688, '20245449', 63471902, 'lemon flavour', 'samuel mwangi', 'yellow', 600, 4000, '2400000', 'img/085b.jpg', 'true'),
('hotDeals ', 'birthday', 7634339, '20245449', 63471902, 'lemon flavour', '', '', 600, 2000, '1200000', 'img/085b.jpg', 'true'),
('hotDeals ', 'birthday', 58667, '20245449', 63471902, 'lemon flavour', '', '', 600, 2000, '1200000', 'img/085b.jpg', 'true'),
('hotDeals ', 'birthday', 471744, '20245449', 63471902, 'lemon flavour', '', '', 600, 2000, '1200000', 'img/085b.jpg', 'true'),
('hotDeals ', 'birthday', 869839, '20245449', 63471902, 'lemon flavour', '', '', 600, 2000, '1200000', 'img/085b.jpg', 'true'),
('hotDeals ', 'birthday', 47024, '20245449', 63471902, 'lemon flavour', '', '', 600, 2000, '1200000', 'img/085b.jpg', 'true'),
('hotDeals ', 'birthday', 64505, '20245449', 63471902, 'lemon flavour', '', '', 600, 6000, '3600000', 'img/085b.jpg', 'true'),
('ordinary ', 'birthday', 64505, '20245449', 36615, 'honey flavour', '', '', 600, 4, '2400', 'img/db0b.jpg', 'true'),
('ordinary ', 'birthday', 64505, '20245449', 70870, 'honey flavour', '', '', 600, 4, '2400', 'img/e86a.jpg', 'true'),
('ordinary ', 'birthday', 64505, '20245449', 855305638, 'lemon flavour', '', '', 600, 4, '2400', 'img/68f8.jpg', 'true'),
('hotDeals ', 'birthday', 17917623, '20245449', 63471902, 'lemon flavour', '', '', 600, 2000, '1200000', 'img/085b.jpg', 'true'),
('ordinary ', 'birthday', 17917623, '20245449', 36615, 'honey flavour', '', '', 600, 4, '2400', 'img/db0b.jpg', 'true'),
('ordinary ', 'birthday', 17917623, '20245449', 70870, 'honey flavour', '', '', 600, 14, '8400', 'img/e86a.jpg', 'true'),
('hotDeals ', 'birthday', 76956170, '20245449', 63471902, 'lemon flavour', '', '', 600, 2000, '1200000', 'img/085b.jpg', 'true'),
('ordinary ', 'birthday', 76956170, '20245449', 70870, 'honey flavour', '', '', 600, 2, '1200', 'img/e86a.jpg', 'true'),
('hotDeals ', 'birthday', 5011656, '20245449', 63471902, 'lemon flavour', '', '', 600, 2000, '1200000', 'img/085b.jpg', 'true'),
('hotDeals ', 'birthday', 185532, '20245449', 63471902, 'lemon flavour', '', '', 600, 2000, '1200000', 'img/085b.jpg', 'true'),
('hotDeals ', 'birthday', 99890, '20245449', 63471902, 'lemon flavour', '', '', 600, 2000, '1200000', 'img/085b.jpg', 'true'),
('hotDeals ', 'valentines', 4242, '20245449', 63119770, 'honey flavour', '', '', 100, 10, '1000', 'img/8979.jpg', 'true'),
('hotDeals ', 'valentines', 34745, '20245449', 63119770, 'honey flavour', '', '', 100, 10, '1000', 'img/8979.jpg', 'true'),
('hotDeals ', 'valentines', 48189024, '20245449', 63119770, 'honey flavour', '', '', 100, 5, '500', 'img/8979.jpg', 'true'),
('hotDeals ', 'valentines', 49840901, '20245449', 63119770, 'honey flavour', '', '', 100, 5, '500', 'img/8979.jpg', 'true'),
('hotDeals ', 'valentines', 9902245, '20245449', 63119770, 'honey flavour', '', '', 100, 5, '500', 'img/8979.jpg', 'true'),
('hotDeals ', 'valentines', 65838547, '20245449', 63119770, 'honey flavour', '', '', 100, 5, '500', 'img/8979.jpg', 'true'),
('hotDeals ', 'valentines', 52074289, '20245449', 63119770, 'honey flavour', '', '', 100, 5, '500', 'img/8979.jpg', 'true'),
('hotDeals ', 'valentines', 532458, '20245449', 63119770, 'honey flavour', '', '', 100, 5, '500', 'img/8979.jpg', 'true'),
('hotDeals ', 'valentines', 77446, '20245449', 63119770, 'honey flavour', '', '', 100, 5, '500', 'img/8979.jpg', 'true'),
('hotDeals ', 'valentines', 64864646, '20245449', 63119770, 'honey flavour', '', '', 100, 5, '500', 'img/8979.jpg', 'true'),
('hotDeals ', 'valentines', 8842, '20245449', 63119770, 'honey flavour', '', '', 100, 5, '500', 'img/8979.jpg', 'true'),
('hotDeals ', 'valentines', 99004, '20245449', 63119770, 'honey flavour', '', '', 100, 5, '500', 'img/8979.jpg', 'true'),
('hotDeals ', 'valentines', 1244907, '481656542', 63119770, 'honey flavour', '', '', 100, 5, '500', 'img/8979.jpg', 'false'),
('ordinary ', 'birthday', 1244907, '481656542', 36615, 'honey flavour', '', '', 600, 2, '1200', 'img/db0b.jpg', 'false'),
('hotDeals ', 'valentines', 62429047, '609841091', 63119770, 'honey flavour', '', '', 100, 5, '500', 'img/8979.jpg', 'false'),
('hotDeals ', 'valentines', 342405, '49234025', 63119770, 'honey flavour', '', '', 100, 5, '500', 'img/8979.jpg', 'false'),
('hotDeals ', 'valentines', 7486357, '20245449', 63119770, 'honey flavour', '', '', 100, 30, '600', 'img/8979.jpg', 'true'),
('ordinary ', 'birthday', 7486357, '20245449', 36615, 'honey flavour', '', '', 600, 6, '1800', 'img/db0b.jpg', 'true'),
('hotDeals ', 'valentines', 153669, '850726', 63119770, 'honey flavour', '', '', 100, 5, '500', 'img/8979.jpg', 'false'),
('hotDeals ', 'valentines', 16990, '2235', 63119770, 'honey flavour', '', '', 100, 5, '100', 'img/8979.jpg', 'false'),
('hotDeals ', 'valentines', 727205, '20245449', 63119770, 'honey flavour', '', '', 100, 5, '100', 'img/8979.jpg', 'true'),
('hotDeals ', 'valentines', 26113, '20245449', 63119770, 'honey flavour', '', '', 100, 5, '100', 'img/8979.jpg', 'true'),
('hotDeals ', 'valentines', 3940373, '20245449', 63119770, 'honey flavour', '', '', 100, 5, '100', 'img/8979.jpg', 'true'),
('hotDeals ', 'valentines', 8485, '20245449', 63119770, 'honey flavour', '', '', 100, 5, '100', 'img/8979.jpg', 'true'),
('hotDeals ', 'valentines', 83512, '20245449', 63119770, 'honey flavour', '', '', 100, 5, '100', 'img/8979.jpg', 'true');

-- --------------------------------------------------------

--
-- Table structure for table `testimonials`
--

CREATE TABLE `testimonials` (
  `testianial` text NOT NULL,
  `name` varchar(255) NOT NULL,
  `rating` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `testimonials`
--

INSERT INTO `testimonials` (`testianial`, `name`, `rating`) VALUES
('Bae cakes has the best cakes. I\'ve been ordering cakes from this store and they are the best in the business. Highly recommended Bae cakes', 'samael', 0),
('We bought a vacuum. It was definitely not a Bosch and it was like a toy. We called to return it. They picked it up as promised. But refused to accept it as the box had been open. Of course it had, to see the product, but it was not damaged. So they would not return it. They lie and their goods are fake. DO NOT USE THIS COMPANY.', 'timothy', 0),
('Bae cakes has the best cakes. I\'ve been ordering cakes from this store and they are the best in the business. Highly recommended Bae cakes', 'samael', 0),
('We bought a vacuum. It was definitely not a Bosch and it was like a toy. We called to return it. They picked it up as promised. But refused to accept it as the box had been open. Of course it had, to see the product, but it was not damaged. So they would not return it. They lie and their goods are fake. DO NOT USE THIS COMPANY.', 'timothy', 0),
('We bought a vacuum. It was definitely not a Bosc', 'sam', 0),
('We bought a vacuum. It was definitely not a Bosc', 'sam', 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `adminlogin`
--
ALTER TABLE `adminlogin`
  ADD PRIMARY KEY (`userName`),
  ADD UNIQUE KEY `unid` (`unid`);

--
-- Indexes for table `login-table`
--
ALTER TABLE `login-table`
  ADD UNIQUE KEY `unid` (`unid`);

--
-- Indexes for table `order_history`
--
ALTER TABLE `order_history`
  ADD UNIQUE KEY `cart_unid` (`cart_unid`),
  ADD KEY `order_tracking_id` (`order_tracking_id`);

--
-- Indexes for table `pending orders`
--
ALTER TABLE `pending orders`
  ADD UNIQUE KEY `cart_unid` (`cart_unid`);

--
-- Indexes for table `product-items`
--
ALTER TABLE `product-items`
  ADD UNIQUE KEY `unid` (`unid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
