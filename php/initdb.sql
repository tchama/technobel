-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Hôte : 172.17.0.6
-- Généré le :  lun. 16 avr. 2018 à 21:30
-- Version du serveur :  10.0.34-MariaDB-1~jessie
-- Version de PHP :  7.2.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `technobel`
--
CREATE DATABASE IF NOT EXISTS `technobel` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `technobel`;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `password` varchar(60) NOT NULL,
  `salt` varchar(22) NOT NULL,
  `ip` varchar(15) DEFAULT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `salt`, `ip`, `firstname`, `lastname`) VALUES
(14, 'mathieu', '$2y$10$5ace1bc741dbc8.790880uj2JSa1pZV0XG8TvqWIF6nszq7.dX.IC', '5ace1bc741dbc8.7908808', NULL, 'Mathieu', 'Jaumotte'),
(15, 'admin', '$2y$10$5ace61e09c14b5.709081uaJpUAPK9yHMlPeeUMpde1WF6EhOhL8W', '5ace61e09c14b5.7090819', NULL, 'admin', 'admin'),
(16, 'bernard', '$2y$10$5ace69cd8c86d4.235751uqyaYRs8iXl7kX7ESnFNdLipCTZMarAS', '5ace69cd8c86d4.2357512', NULL, 'Bernard', 'Clavel'),
(20, 'claude', '$2y$10$5ad4c640a39784.257868uakCkRyNLY89wYn1y4aCdShJaHlI9uim', '5ad4c640a39784.2578684', NULL, 'Claude', 'François'),
(23, 'toto', '$2y$10$5ad4d798c06c89.564367uV0c10A.m6Z53CoGHCYyTLE1x6/7YQsC', '5ad4d798c06c89.5643675', NULL, 'Toto', 'Test'),
(24, 'michel', '$2y$10$5acf181c1d6788.289309uf88SRg/6CmYwWhgGl9lCDqyDKujT6s6', '5acf181c1d6788.2893091', NULL, 'Michel', 'Lagneau'),
(26, 'nicolas', '$2y$10$5acf25879375b9.680260uGcKDFJK/KmTZTtQgk4As37hLZep0kPu', '5acf25879375b9.6802603', NULL, 'Nicolas', 'Hulot'),
(31, 'pizza', '$2y$10$5ad37d651dbdc5.728289uJNxK.m8RA2Aenpx3xQAnEwIhoXCCtGC', '5ad37d651dbdc5.7282894', NULL, 'pizza', 'domino'),
(35, 'benjamin', '$2y$10$5ad380027a4d49.294187uuSUOlvHTzwSwLuvRntQgrRVmurSjGMe', '5ad380027a4d49.2941878', NULL, 'Benjamin José', 'Robert Michel');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
