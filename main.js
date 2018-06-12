// Class omment in facebook
var FbComment = /** @class */ (function () {
    function FbComment(user, text, likes, shares, commentTime) {
        var _this = this;
        this.user = user;
        this.text = text;
        this.likes = likes;
        this.shares = shares;
        this.commentTime = commentTime;
        // Methods
        // Text body of Comment
        this.getText = function () {
            return _this.text;
        };
        this.getLikes = function () {
            return _this.likes;
        };
        this.getShares = function () {
            return _this.shares;
        };
        this.text = text;
        this.likes = likes;
        this.shares = shares;
        this.commentTime = commentTime;
    }
    return FbComment;
}());
// Class of Facebook User
var FbUser = /** @class */ (function () {
    function FbUser(username, email, gender, dateOfBirth, mobNumber, joinedDate, job, currentCity, aboutYou, listOfFriends, listOfPost, university) {
        var _this = this;
        this.username = username;
        this.email = email;
        this.gender = gender;
        this.dateOfBirth = dateOfBirth;
        this.mobNumber = mobNumber;
        this.joinedDate = joinedDate;
        this.job = job;
        this.currentCity = currentCity;
        this.aboutYou = aboutYou;
        this.listOfFriends = listOfFriends;
        this.listOfPost = listOfPost;
        this.university = university;
        // Methods:-
        // Username
        this.getUserName = function () {
            return _this.username;
        };
        this.setUserName = function (name) {
            _this.username = name;
        };
        // Gender
        this.getGender = function () {
            return _this.gender;
        };
        // Email
        this.getEmail = function () {
            return _this.email;
        };
        this.setEmail = function (email) {
            _this.email = email;
        };
        // Data Of Birth
        this.getDOB = function () {
            return _this.dateOfBirth;
        };
        this.setDOB = function (dob) {
            _this.dateOfBirth = _this.dateOfBirth;
        };
        // Join Date Of FB
        this.getJoinDate = function () {
            return _this.joinedDate;
        };
        // Job
        this.getJobInfo = function () {
            return _this.job;
        };
        this.addJobInfo = function (job) {
            _this.job = job;
        };
        // Get List Of Post
        this.getListOfPost = function () {
            return _this.listOfPost;
        };
        // University
        this.getUniversity = function () {
            return _this.university;
        };
        this.addUniversity = function (string) {
            _this.university = _this.university;
        };
        // Post
        this.addPost = function (post) {
            _this.listOfPost.push(post);
        };
        // Friends
        this.getListOfFriends = function () {
            return _this.listOfFriends;
        };
        this.addFriend = function (friend) {
            // Check if friend already exists in the friend list
            if (!_this.customIncludes(_this.listOfFriends, friend)) {
                _this.listOfFriends.push(friend);
            }
            // add ourself to the input friend's list
            if (!_this.customIncludes(friend.getListOfFriends(), _this)) {
                friend.addFriend(_this);
            }
        };
        this.customIncludes = function includes(container, value) {
            var returnValue = false;
            var pos = container.indexOf(value);
            if (pos >= 0) {
                returnValue = true;
            }
            return returnValue;
        };
        this.username = username;
        this.email = email;
        this.gender = gender;
        this.dateOfBirth = dateOfBirth;
        this.joinedDate = joinedDate;
        this.mobNumber = mobNumber;
        this.job = job;
        this.currentCity = currentCity;
        this.aboutYou = aboutYou;
        this.listOfFriends = listOfFriends || [];
        this.listOfPost = listOfPost || [];
        this.university = university;
    }
    return FbUser;
}());
//Class of Post
var Post = /** @class */ (function () {
    function Post(title, postUser, content, postLikes, postShares, listOfComments) {
        var _this = this;
        this.title = title;
        this.postUser = postUser;
        this.content = content;
        this.postLikes = postLikes;
        this.postShares = postShares;
        this.listOfComments = listOfComments;
        // Methods:-
        // Function to get post title
        this.getTitle = function () {
            return _this.title;
        };
        //   Function to get username of the post
        this.getPostUserName = function () {
            return _this.postUser;
        };
        // Function to get post share number
        this.getPostShares = function () {
            return _this.postShares;
        };
        this.title = title;
        this.postUser = postUser;
        this.content = content;
        this.postLikes = postLikes;
        this.postShares = postShares;
        this.listOfComments = listOfComments;
    }
    return Post;
}());
// NewsFeed Class
var NewsFeed = /** @class */ (function () {
    function NewsFeed(user, listOfPosts, lastUpadate) {
        var _this = this;
        this.user = user;
        this.listOfPosts = listOfPosts;
        this.lastUpadate = lastUpadate;
        this.getUser = function () {
            return _this.user;
        };
        this.getLastUpdate = function () {
            return _this.lastUpadate;
        };
        this.user = user;
        this.listOfPosts = listOfPosts;
        this.lastUpadate = lastUpadate;
    }
    return NewsFeed;
}());
// User1
var user1 = new FbUser("Anurag", "anuragkothare@outlook.com", "male", new Date("February 9, 1995"), 8359990905, new Date("March 18 2009"), "Web Developer", "Banglore-City", "I am hard working ambititous guy");
// User2
var user2 = new FbUser("Mahesh", "mahesh@outlook.com", "male", new Date("June 4, 1991"), 835999888, new Date("March 12, 2011"), "Civil Servant", "Gurgaon", "I am Legend");
// User3
var user3 = new FbUser("Radhika", "rahhl@outlook.com", "female", new Date("July 1, 1995"), 835999121, new Date("September 23, 2011"), "Electronics Enginner", "Kanpur", "I am hard working ambititous guy");
var user4 = new FbUser("Rahul", "rahhl@outlook.com", "male", new Date("April 22, 1998"), 835999877, new Date("September 20, 2015"), "Teacher", "Jaipur", "I am lazy");
var user3 = new FbUser("Ramesh", "ram@outlook.com", "male", new Date("June 4, 1991"), 8359933232, new Date("November 12, 2010"), "Data Scientist", "New Delhi", "I am genius");
var user4 = new FbUser("Aman", "aman@outlook.com", "male", new Date("May19, 1996"), 835999888, new Date("October 2, 2012"), "Surgeon", "Chennai", "I am loving man with passion");
user1.addFriend(user2);
user1.addFriend(user3);
user2.addFriend(user4);
user2.addFriend(user3);
user3.addFriend(user4);
var comment1 = new FbComment(user1, "Welcome to Facebook Social Newtwork", 87, 101, new Date("June 12, 2018"));
var comment2 = new FbComment(user3, "Experience good Social Connection.", 100, 91, new Date("June 19, 2018"));
var comment3 = new FbComment(user4, "This i another great comment.", 200, 102, new Date("Sep 9, 2018"));
var comment4 = new FbComment(user3, "This is so good to have you as a friend.", 1002, 873, new Date("Aug 23, 2018"));
var comment5 = new FbComment(user4, "This picture is so  beautiful.", 1090, 866, new Date("Aug 30, 2018"));
var comment6 = new FbComment(user4, "This place is so amazing.", 999, 83, new Date("Aug 28, 2018"));
var comment7 = new FbComment(user3, "I like his attitude.", 999, 83, new Date("Aug 28, 2018"));
var comment8 = new FbComment(user3, "This place is so amazing.", 999, 83, new Date("Aug 28, 2018"));
var commentList1 = [comment1, comment2];
var commentList2 = [comment3, comment4];
var commentList3 = [comment5, comment6];
var commentList4 = [comment6, comment7];
var post1 = new Post("title1", user1, "My first ever post", 35, 57, commentList1);
var post2 = new Post("title2", user1, "My second post is here", 89, 34, commentList2);
var post3 = new Post("title3", user2, "My third post is here", 90, 56, commentList3);
var post4 = new Post("title4", user4, "My fourth post is here", 90, 56, commentList4);
user1.addPost(post3);
user1.addPost(post1);
user1.addPost(post2);
user2.addPost(post3);
user2.addPost(post1);
user2.addPost(post3);
user3.addPost(post3);
user3.addPost(post3);
user4.addPost(post4);
user4.addPost(post3);
// Printing
// utility function to print information about user
var printUserInfo = function (user) {
    console.log(" User Information:\n          Username is " + user.getUserName() + " \n\n          Email is " + user.getEmail() + " \n\n          D.O.B. is " + user.getDOB() + " \n\n          Gender is " + user.getGender() + " \n\n          Join Date of FB is " + user.getJoinDate() + " \n\n          List of friends are " + user
        .getListOfFriends()
        .map(function (friend, i) { return ("" + friend.getUserName()).trim(); })
        .join(", ") + " \n\n          List of Posts are " + user
        .getListOfPost()
        .map(function (post, i) { return ("" + post.getTitle()).trim(); })
        .join(", ") + " \n\n           \n          ");
};
// User 1
printUserInfo(user1);
// User 2
printUserInfo(user2);
// User 3
printUserInfo(user3);
// User 4
printUserInfo(user4);
