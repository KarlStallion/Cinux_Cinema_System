const Pool = require('pg').Pool;

const pool = new Pool({
    user: "karlparloja",
    password: "parloja2003", // Enter your password here
    database: "cinux", //Try to use the same name for your database
    host: "localhost",
    port: "5432"
});


const execute = async(query1, query2, query3) => {
    try {
        await pool.connect(); // gets connection
        await pool.query(query1); // sends queries
        //await pool.query(query2); // sends queries
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    }
};

const createTblQuery1 = `
    CREATE TABLE IF NOT EXISTS Movies (
      movie_id int PRIMARY KEY,
      title varchar,
      genre varchar,
      release_date date,
      director varchar,
      description text,
      poster_url varchar
    );
    
    CREATE TABLE IF NOT EXISTS Rooms (
      room_number int PRIMARY KEY,
      seating_capacity int
    );
    
    CREATE TABLE IF NOT EXISTS Users (
      user_id int PRIMARY KEY,
      username varchar,
      password varchar,
      email varchar,
      other_user_info varchar
    );
    
    CREATE TABLE IF NOT EXISTS Bookings (
      booking_id int PRIMARY KEY,
      user_id int REFERENCES Users(user_id),
      showing_id int, -- This will be a foreign key, but Showings table should be created first
      booking_date timestamp,
      total_price decimal
    );
    
    CREATE TABLE IF NOT EXISTS Seats (
      seat_id int PRIMARY KEY,
      room_number int REFERENCES Rooms(room_number),
      seat_number int,
      is_available boolean
    );
    
    CREATE TABLE IF NOT EXISTS Cinemas (
      cinema_id int PRIMARY KEY,
      cinema_name varchar,
      location varchar,
      other_cinema_info varchar
    );
    
    CREATE TABLE IF NOT EXISTS Showings (
      showing_id int PRIMARY KEY,
      movie_id int REFERENCES Movies(movie_id),
      start_time timestamp,
      end_time timestamp,
      screen_number int,
      room_number int,
      cinema_id int REFERENCES Cinemas(cinema_id)
    );
    
    -- After Showings table creation, now add the foreign key to Bookings table
    DO $$ 
    BEGIN
        IF NOT EXISTS (SELECT 1 FROM information_schema.table_constraints WHERE constraint_name = 'fk_showing') THEN
            ALTER TABLE Bookings
            ADD CONSTRAINT fk_showing
            FOREIGN KEY (showing_id) 
            REFERENCES Showings(showing_id);
        END IF;
    END $$;`;


const insertDataQuery = `INSERT INTO Movies (movie_id, title, genre, release_date, director, description, poster_url)
    VALUES
        (1, 'Movie1', 'Action', '2022-01-01', 'Director1', 'Description1', 'url1'),
        (2, 'Movie2', 'Comedy', '2022-02-01', 'Director2', 'Description2', 'url2');
    
    INSERT INTO Rooms (room_number, seating_capacity)
    VALUES
        (1, 100),
        (2, 150);
        
    INSERT INTO Users (user_id, username, password, email, other_user_info)
    VALUES
        (1, 'User1', 'password1', 'user1@example.com', 'info1'),
        (2, 'User2', 'password2', 'user2@example.com', 'info2');
    
    INSERT INTO Bookings (booking_id, user_id, showing_id, booking_date, total_price)
    VALUES
        (1, 1, 1, '2022-01-01 10:00:00', 50.00),
        (2, 2, 2, '2022-02-01 15:00:00', 60.00);
    
    INSERT INTO Seats (seat_id, room_number, seat_number, is_available)
    VALUES
        (1, 1, 101, true),
        (2, 2, 201, false);
    
    INSERT INTO Cinemas (cinema_id, cinema_name, location, other_cinema_info)
    VALUES
        (1, 'Cinema1', 'Location1', 'CinemaInfo1'),
        (2, 'Cinema2', 'Location2', 'CinemaInfo2');
    
    INSERT INTO Showings (showing_id, movie_id, start_time, end_time, screen_number, room_number, cinema_id)
    VALUES
        (1, 1, '2022-01-01 10:00:00', '2022-01-01 12:00:00', 1, 1, 1),
        (2, 2, '2022-02-01 15:00:00', '2022-02-01 17:00:00', 1, 2, 2);`;


// A function to execute the previous query   
execute(createTblQuery1, insertDataQuery).then(result => {
    if (result) {
        console.log('If does not exists, tables have been created');
    }
});

module.exports = pool;