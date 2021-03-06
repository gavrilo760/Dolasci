USE [master]
GO
/****** Object:  Database [Dolasci]    Script Date: 24.10.2019. 11:51:32 ******/
CREATE DATABASE [Dolasci]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Dolasci', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\Dolasci.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'Dolasci_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\Dolasci_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [Dolasci] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Dolasci].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Dolasci] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Dolasci] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Dolasci] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Dolasci] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Dolasci] SET ARITHABORT OFF 
GO
ALTER DATABASE [Dolasci] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Dolasci] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Dolasci] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Dolasci] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Dolasci] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Dolasci] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Dolasci] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Dolasci] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Dolasci] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Dolasci] SET  DISABLE_BROKER 
GO
ALTER DATABASE [Dolasci] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Dolasci] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Dolasci] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Dolasci] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Dolasci] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Dolasci] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Dolasci] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Dolasci] SET RECOVERY FULL 
GO
ALTER DATABASE [Dolasci] SET  MULTI_USER 
GO
ALTER DATABASE [Dolasci] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Dolasci] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Dolasci] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Dolasci] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [Dolasci] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'Dolasci', N'ON'
GO
ALTER DATABASE [Dolasci] SET QUERY_STORE = OFF
GO
USE [Dolasci]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 24.10.2019. 11:51:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[dolasci]    Script Date: 24.10.2019. 11:51:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[dolasci](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[radnikId] [int] NOT NULL,
	[dosaoU] [datetime2](7) NOT NULL,
	[otisaoU] [datetime2](7) NOT NULL,
	[obrokId] [int] NULL,
 CONSTRAINT [PK_dolasci] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[obroci]    Script Date: 24.10.2019. 11:51:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[obroci](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[naziv] [nvarchar](max) NULL,
 CONSTRAINT [PK_obroci] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[podrazumevaniDolasci]    Script Date: 24.10.2019. 11:51:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[podrazumevaniDolasci](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[radnikId] [int] NOT NULL,
	[dosaoU] [datetime2](7) NOT NULL,
	[otisaoU] [datetime2](7) NOT NULL,
	[obrokId] [int] NULL,
 CONSTRAINT [PK_podrazumevaniDolasci] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[radnici]    Script Date: 24.10.2019. 11:51:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[radnici](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[ime] [nvarchar](max) NOT NULL,
	[prezime] [nvarchar](max) NOT NULL,
	[adresa] [nvarchar](max) NOT NULL,
	[datumRodjenja] [datetime2](7) NOT NULL,
	[datumZaposlenja] [datetime2](7) NOT NULL,
	[brojTelefona] [nvarchar](max) NULL,
	[aktivan] [bit] NOT NULL,
 CONSTRAINT [PK_radnici] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190121154812_prva', N'2.2.3-servicing-35854')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190129103815_mi', N'2.2.3-servicing-35854')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190129104350_m', N'2.2.3-servicing-35854')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190129104423_mm', N'2.2.3-servicing-35854')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190131231233_add-migration asf', N'2.2.3-servicing-35854')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190202125558_asdf', N'2.2.3-servicing-35854')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190315183931_initi', N'2.2.3-servicing-35854')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190329114613_stringovi', N'2.2.3-servicing-35854')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190330203453_datetime', N'2.2.3-servicing-35854')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190402232900_Podrazumevani', N'2.2.3-servicing-35854')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190513164520_ujl', N'2.2.3-servicing-35854')
SET IDENTITY_INSERT [dbo].[dolasci] ON 

INSERT [dbo].[dolasci] ([id], [radnikId], [dosaoU], [otisaoU], [obrokId]) VALUES (3632, 6, CAST(N'2019-10-07T09:00:57.2650000' AS DateTime2), CAST(N'2019-10-07T17:00:57.2650000' AS DateTime2), NULL)
INSERT [dbo].[dolasci] ([id], [radnikId], [dosaoU], [otisaoU], [obrokId]) VALUES (3635, 6, CAST(N'2019-10-07T08:00:33.3440000' AS DateTime2), CAST(N'2019-10-07T15:00:33.3440000' AS DateTime2), 1)
INSERT [dbo].[dolasci] ([id], [radnikId], [dosaoU], [otisaoU], [obrokId]) VALUES (3637, 6, CAST(N'2019-10-07T09:00:55.0360000' AS DateTime2), CAST(N'2019-10-07T16:00:55.0360000' AS DateTime2), 1)
INSERT [dbo].[dolasci] ([id], [radnikId], [dosaoU], [otisaoU], [obrokId]) VALUES (3639, 7, CAST(N'2019-10-07T08:00:55.0470000' AS DateTime2), CAST(N'2019-10-07T15:00:55.0470000' AS DateTime2), NULL)
INSERT [dbo].[dolasci] ([id], [radnikId], [dosaoU], [otisaoU], [obrokId]) VALUES (3640, 18, CAST(N'2019-10-07T08:00:55.0480000' AS DateTime2), CAST(N'2019-10-07T16:00:55.0480000' AS DateTime2), 1)
SET IDENTITY_INSERT [dbo].[dolasci] OFF
SET IDENTITY_INSERT [dbo].[obroci] ON 

INSERT [dbo].[obroci] ([id], [naziv]) VALUES (1, N'da')
SET IDENTITY_INSERT [dbo].[obroci] OFF
SET IDENTITY_INSERT [dbo].[podrazumevaniDolasci] ON 

INSERT [dbo].[podrazumevaniDolasci] ([id], [radnikId], [dosaoU], [otisaoU], [obrokId]) VALUES (1, 6, CAST(N'2019-10-21T10:00:13.8040000' AS DateTime2), CAST(N'2019-10-21T16:00:13.8040000' AS DateTime2), 1)
INSERT [dbo].[podrazumevaniDolasci] ([id], [radnikId], [dosaoU], [otisaoU], [obrokId]) VALUES (3, 7, CAST(N'2019-04-03T08:00:00.0000000' AS DateTime2), CAST(N'2019-04-03T15:00:00.0000000' AS DateTime2), NULL)
INSERT [dbo].[podrazumevaniDolasci] ([id], [radnikId], [dosaoU], [otisaoU], [obrokId]) VALUES (9, 18, CAST(N'2019-05-10T08:00:11.4110000' AS DateTime2), CAST(N'2019-05-10T16:00:11.4110000' AS DateTime2), 1)
INSERT [dbo].[podrazumevaniDolasci] ([id], [radnikId], [dosaoU], [otisaoU], [obrokId]) VALUES (10, 6, CAST(N'2014-04-04T08:00:00.0000000' AS DateTime2), CAST(N'2014-04-04T15:00:00.0000000' AS DateTime2), 1)
SET IDENTITY_INSERT [dbo].[podrazumevaniDolasci] OFF
SET IDENTITY_INSERT [dbo].[radnici] ON 

INSERT [dbo].[radnici] ([id], [ime], [prezime], [adresa], [datumRodjenja], [datumZaposlenja], [brojTelefona], [aktivan]) VALUES (6, N'Gavrilo', N'Topalovic', N'Stari Banovci', CAST(N'1998-01-04T12:15:00.0000000' AS DateTime2), CAST(N'2019-05-25T11:15:00.0000000' AS DateTime2), N'0641119379', 0)
INSERT [dbo].[radnici] ([id], [ime], [prezime], [adresa], [datumRodjenja], [datumZaposlenja], [brojTelefona], [aktivan]) VALUES (7, N'Tamara', N'Martinovic', N'45 blok', CAST(N'1997-07-10T11:15:00.0000000' AS DateTime2), CAST(N'2019-04-01T11:15:00.0000000' AS DateTime2), N'0625239379', 0)
INSERT [dbo].[radnici] ([id], [ime], [prezime], [adresa], [datumRodjenja], [datumZaposlenja], [brojTelefona], [aktivan]) VALUES (18, N'Danije', N'Topalovic', N'Milenka Pevca 114 Stari Banovci', CAST(N'1973-05-07T12:15:00.0000000' AS DateTime2), CAST(N'2011-04-01T11:15:00.0000000' AS DateTime2), N'0638183484', 0)
INSERT [dbo].[radnici] ([id], [ime], [prezime], [adresa], [datumRodjenja], [datumZaposlenja], [brojTelefona], [aktivan]) VALUES (21, N'xzcv', N'dasdfa', N'asdfas', CAST(N'1899-11-30T12:15:00.0000000' AS DateTime2), CAST(N'1899-11-30T12:15:00.0000000' AS DateTime2), N'3235235', 0)
INSERT [dbo].[radnici] ([id], [ime], [prezime], [adresa], [datumRodjenja], [datumZaposlenja], [brojTelefona], [aktivan]) VALUES (22, N'Ime', N'Prezime', N'Novi Sad', CAST(N'1971-02-01T12:15:00.0000000' AS DateTime2), CAST(N'2002-02-21T12:15:00.0000000' AS DateTime2), N'066532166', 0)
SET IDENTITY_INSERT [dbo].[radnici] OFF
/****** Object:  Index [IX_dolasci_obrokId]    Script Date: 24.10.2019. 11:51:32 ******/
CREATE NONCLUSTERED INDEX [IX_dolasci_obrokId] ON [dbo].[dolasci]
(
	[obrokId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_dolasci_radnikId]    Script Date: 24.10.2019. 11:51:32 ******/
CREATE NONCLUSTERED INDEX [IX_dolasci_radnikId] ON [dbo].[dolasci]
(
	[radnikId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_podrazumevaniDolasci_obrokId]    Script Date: 24.10.2019. 11:51:32 ******/
CREATE NONCLUSTERED INDEX [IX_podrazumevaniDolasci_obrokId] ON [dbo].[podrazumevaniDolasci]
(
	[obrokId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_podrazumevaniDolasci_radnikId]    Script Date: 24.10.2019. 11:51:32 ******/
CREATE NONCLUSTERED INDEX [IX_podrazumevaniDolasci_radnikId] ON [dbo].[podrazumevaniDolasci]
(
	[radnikId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[radnici] ADD  DEFAULT ((0)) FOR [aktivan]
GO
ALTER TABLE [dbo].[dolasci]  WITH CHECK ADD  CONSTRAINT [FK_dolasci_obroci_obrokId] FOREIGN KEY([obrokId])
REFERENCES [dbo].[obroci] ([id])
GO
ALTER TABLE [dbo].[dolasci] CHECK CONSTRAINT [FK_dolasci_obroci_obrokId]
GO
ALTER TABLE [dbo].[dolasci]  WITH CHECK ADD  CONSTRAINT [FK_dolasci_radnici_radnikId] FOREIGN KEY([radnikId])
REFERENCES [dbo].[radnici] ([id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[dolasci] CHECK CONSTRAINT [FK_dolasci_radnici_radnikId]
GO
ALTER TABLE [dbo].[podrazumevaniDolasci]  WITH CHECK ADD  CONSTRAINT [FK_podrazumevaniDolasci_obroci_obrokId] FOREIGN KEY([obrokId])
REFERENCES [dbo].[obroci] ([id])
GO
ALTER TABLE [dbo].[podrazumevaniDolasci] CHECK CONSTRAINT [FK_podrazumevaniDolasci_obroci_obrokId]
GO
ALTER TABLE [dbo].[podrazumevaniDolasci]  WITH CHECK ADD  CONSTRAINT [FK_podrazumevaniDolasci_radnici_radnikId] FOREIGN KEY([radnikId])
REFERENCES [dbo].[radnici] ([id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[podrazumevaniDolasci] CHECK CONSTRAINT [FK_podrazumevaniDolasci_radnici_radnikId]
GO
USE [master]
GO
ALTER DATABASE [Dolasci] SET  READ_WRITE 
GO
