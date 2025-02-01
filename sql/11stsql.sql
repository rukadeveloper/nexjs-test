create database 11st_test;

use 11st_test;

select * from Category;
select * from Category2;
select * from Category3;
select * from searchWord;
select * from menu;
select * from User;

insert into menu (menuName,menuLink,important) values('베스트','/best', false);
insert into menu (menuName,menuLink,important) values('쇼킹딜','/shockingDeal', false);
insert into menu (menuName,menuLink,important) values('슈팅 배송','/shootingDelivery', false);
insert into menu (menuName,menuLink,important) values('쿠폰/기획전','/couponAndProduce', false);
insert into menu (menuName,menuLink,important) values('신선식품','/freshFoods',true);
insert into menu (menuName,menuLink,important) values('9900원샵','/9900Shop',true);
insert into menu (menuName,menuLink,important) values('리퍼블리','/Repbuli',true);
insert into menu (menuName,menuLink,important) values('T공식대리점','/TOfficial',false);
insert into menu (menuName,menuLink,important) values('아마존','/amazon',false);

insert into User (uid,upassword,uname,unickname,uemail,uphone,uprofile,isJoin,createdAt,DeletedAt) values ('haste8324','1234','김세중','하루카','haste8324@naver.com','01012341234','test.jpg',false,'2024-04-04','2024-04-05');


drop table Category;
drop table Category2;
drop table searchWord;
drop table User;

truncate table Category2;
truncate table Category3;

insert into Category (firstCategory,imagePositionX,imageHoverPositionX, imagePositionY,imageHoverPositionY) values ('브랜드 패션','0px','-57px','-59px','-59px');
update Category set imagePositionY = '-59px' where id = 1;
update Category set imageHoverPositionX = '-29px' where id = 1;

insert into Category2 (secondTitle, categoryId) values ('여성',1);
insert into Category2 (secondTitle, categoryId) values ('남성',1);
insert into Category2 (secondTitle, categoryId) values ('공용',1);

insert into Category3 (thirdName, thirdLink, category2Id) values ('브랜드 여성 의류','/products/woman/brandWears',1);
insert into Category3 (thirdName, thirdLink, category2Id) values ('브랜드 여성 신발','/products/woman/brandShoes',1);
insert into Category3 (thirdName, thirdLink, category2Id) values ('브랜드 여성 가발','/products/woman/brandHeads',1);
insert into Category3 (thirdName, thirdLink, category2Id) values ('디자이너 여성 의류','/products/woman/designerWears',1);

insert into Category3 (thirdName, thirdLink, category2Id) values ('브랜드 남성 의류','/products/man/brandWears',2);
insert into Category3 (thirdName, thirdLink, category2Id) values ('브랜드 남성 신발','/products/man/brandShoes',2);
insert into Category3 (thirdName, thirdLink, category2Id) values ('브랜드 남성 가발','/products/man/brandHeads',2);
insert into Category3 (thirdName, thirdLink, category2Id) values ('디자이너 남성 의류','/products/man/designerWears',2);

insert into Category3 (thirdName, thirdLink, category2Id) values ('캐주얼/유니섹스','/products/common/casualUnisex',3);
insert into Category3 (thirdName, thirdLink, category2Id) values ('브랜드 언더웨어','/products/common/brandUnderWear',3);
insert into Category3 (thirdName, thirdLink, category2Id) values ('브랜드 여행가방','/products/common/brandTravelBag',3);
insert into Category3 (thirdName, thirdLink, category2Id) values ('브랜드 지갑/벨트','/products/common/brandWalletAndBelt',3);
insert into Category3 (thirdName, thirdLink, category2Id) values ('브랜드 주얼리','/products/common/brandJewelry',3);

insert into searchWord (wordName,wordSeeNumber) values ('사람입니다.',1);
insert into searchWord (wordName,wordSeeNumber) values ('사람입니다.2',1);
insert into searchWord (wordName,wordSeeNumber) values ('사람입니다.3',1);
insert into searchWord (wordName,wordSeeNumber) values ('사람입니다.4',1);
insert into searchWord (wordName,wordSeeNumber) values ('사람입니다.5',1);
