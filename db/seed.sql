\c textbooks_db

DROP TABLE IF EXISTS genres CASCADE;
DROP TABLE IF EXISTS textbooks CASCADE;

CREATE TABLE genres (
  id SERIAL PRIMARY KEY,
  name TEXT,
  image TEXT
);

CREATE TABLE textbooks (
  id SERIAL PRIMARY KEY,
  title TEXT,
  author TEXT,
  rating INTEGER,
  image TEXT,
  genre_id INTEGER REFERENCES genres(id)
);

INSERT INTO genres (name, image)
VALUES ('Math', 'https://nusciencereview.files.wordpress.com/2014/12/mathbig2.jpg'),
('Biology', 'http://g-teacher.com/wp-content/uploads/2017/08/Biology.jpg'),
('Chemistry', 'https://www.unomaha.edu/college-of-arts-and-sciences/chemistry/_files/images/chemdrawing.jpg'),
('Physics', 'http://buzz2fone.com/wp-content/uploads/physics.jpg'),
('Psychology', 'http://cnu.edu/_assets/img/STOCK/Left_v_right_brain/secondary-md.jpg'),
('Medical', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCluIM9ZZm4-LL49XqzYdXCW32Mg_xuGnH0hX_aDk_8MqbeXDy'),
('Computer science', 'https://cdn-images-1.medium.com/max/1500/1*m2gDBT_nc-iE7R4AM3sHBQ.jpeg'),
('Economics', 'http://uniba-edu.cm/wp-content/uploads/2016/10/economics.jpg'),
('History', 'http://westwoodcivicclub.com/wp-content/uploads/2015/11/history.jpg');

INSERT INTO textbooks(title, author, rating, image, genre_id)
VALUES ('Calculus', 'Richard A. Hunt', 5, 'https://images-na.ssl-images-amazon.com/images/I/51kHGnjzXPL._SX381_BO1,204,203,200_.jpg', 1),
('Calculus', 'Ron Larson', 5, 'https://images.gr-assets.com/books/1182006633l/1221411.jpg', 1),
('Linear Algebra', 'Gilbert Strang', 5, 'http://math.mit.edu/~gs/linearalgebra/linearalgebra5_Front.jpg', 1),
('Discrete Mathematics', 'Rowan Garnier', 4, 'https://images-na.ssl-images-amazon.com/images/I/51kCh1GwEeL._SX326_BO1,204,203,200_.jpg', 1),
('Differential Equations', 'John Polking', 4, 'https://images-na.ssl-images-amazon.com/images/I/51R8-xb-3tL._SX390_BO1,204,203,200_.jpg', 1),
('Multivariable Calculus', 'Ron Larson', 4, 'https://images-na.ssl-images-amazon.com/images/I/516y12HDWBL._SX389_BO1,204,203,200_.jpg', 1),
('Probability and Statistics', 'Morris H. DeGroot', 4, 'https://images-na.ssl-images-amazon.com/images/I/517HnCGznHL._SX391_BO1,204,203,200_.jpg', 1),
('Molecular Biology of the Cell', 'Bruce Alberts', 5, 'https://images-na.ssl-images-amazon.com/images/I/5154dNR4SJL._SX363_BO1,204,203,200_.jpg', 2),
('Principles of Biochemistry', 'David Nelson', 4, 'https://images-na.ssl-images-amazon.com/images/I/51fWLBIMiEL._SX385_BO1,204,203,200_.jpg', 2),
('Principles of Neural Science', 'Eric R. Kandel', 5, 'https://images-na.ssl-images-amazon.com/images/I/510PSzPiYRL._SX360_BO1,204,203,200_.jpg', 2),
('Organic Chemistry', 'Leroy G. Wade', 5, 'https://images-na.ssl-images-amazon.com/images/I/617klK0yvDL._SX389_BO1,204,203,200_.jpg', 3),
('Fundamentals of Physics', 'Jearl Walker', 5, 'https://images.gr-assets.com/books/1348240123l/585316.jpg', 4),
('Psychology', 'David Myers', 5, 'https://prod-cat-files.macmillan.cloud/MediaResources/Jackets/high_res/9781464140815.jpg', 5),
('First Aid for the USMLE Step 1', 'Tao Le', 5, 'https://images-na.ssl-images-amazon.com/images/I/51q5wA1RQfL._SX388_BO1,204,203,200_.jpg', 6),
('Cracking the Coding Interview', 'Gayle Laakman McDowell', 5, 'https://images-na.ssl-images-amazon.com/images/I/41J6k0AL6yL._SX348_BO1,204,203,200_.jpg', 7),
('Microeconomics', 'Robert S. Pindyck', 4, 'https://ecs7.tokopedia.net/img/product-1/2015/10/2/5302715/5302715_f1b9a6b3-7461-4a67-b940-b15390b6e1c9.jpg', 8),
('World History', 'Ellis Esler', 4, 'https://mrcaseyhistory.files.wordpress.com/2012/09/image-1-world-history.png', 9);
