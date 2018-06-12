// Class omment in facebook
class FbComment {
  constructor(
    private user: FbUser,
    private text: string,
    private likes: number,
    private shares: number,
    private commentTime: Date
  ) {
    this.text = text;
    this.likes = likes;
    this.shares = shares;
    this.commentTime = commentTime;
  }
  // Methods

  // Text body of Comment
  getText = (): string => {
    return this.text;
  };
  getLikes = (): number => {
    return this.likes;
  };

  getShares = (): number => {
    return this.shares;
  };
}

// Class of Facebook User
class FbUser {
  constructor(
    private username: string,
    private email: string,
    private gender: string,
    private dateOfBirth: Date,
    private mobNumber: number,
    private joinedDate: Date,
    private job: string,
    private currentCity: string,
    private aboutYou: string,
    private listOfFriends?: FbUser[],
    private listOfPost?: Post[],
    private university?: string
  ) {
    this.username = username;
    this.email = email;
    this.gender = gender;
    this.dateOfBirth = dateOfBirth;
    this.joinedDate = joinedDate;
    this.mobNumber = mobNumber;
    this.job = job;
    this.currentCity = currentCity;
    this.aboutYou = aboutYou;
    this.listOfFriends = listOfFriends || ([] as FbUser[]);
    this.listOfPost = listOfPost || [];
    this.university = university;
  }

  // Methods:-

  // Username
  getUserName = (): string => {
    return this.username;
  };
  setUserName = (name: string) => {
    this.username = name;
  };

  // Gender
  getGender = (): string => {
    return this.gender;
  };

  // Email
  getEmail = (): string => {
    return this.email;
  };
  setEmail = (email: string) => {
    this.email = email;
  };

  // Data Of Birth
  getDOB = (): Date => {
    return this.dateOfBirth;
  };
  setDOB = (dob: string) => {
    this.dateOfBirth = this.dateOfBirth;
  };

  // Join Date Of FB
  getJoinDate = (): Date => {
    return this.joinedDate;
  };

  // Job
  getJobInfo = (): string => {
    return this.job;
  };
  addJobInfo = (job: string) => {
    this.job = job;
  };

  // Get List Of Post
  getListOfPost = (): Post[] => {
    return this.listOfPost;
  };

  // University
  getUniversity = (): string => {
    return this.university;
  };
  addUniversity = (string: string) => {
    this.university = this.university;
  };

  // Post
  addPost = (post: Post) => {
    this.listOfPost.push(post);
  };

  // Friends
  getListOfFriends = (): FbUser[] => {
    return this.listOfFriends;
  };
  addFriend = (friend: FbUser) => {
    // Check if friend already exists in the friend list
    if (!this.customIncludes(this.listOfFriends, friend)) {
      this.listOfFriends.push(friend);
    }

    // add ourself to the input friend's list
    if (!this.customIncludes(friend.getListOfFriends(), this)) {
      friend.addFriend(this);
    }
  };

  customIncludes = function includes(container: any, value: any) {
    var returnValue = false;
    var pos = container.indexOf(value);
    if (pos >= 0) {
      returnValue = true;
    }
    return returnValue;
  };
}

//Class of Post
class Post {
  constructor(
    private title: string,
    private postUser: FbUser,
    private content: string,
    private postLikes: number,
    private postShares: number,
    private listOfComments: FbComment[]
  ) {
    this.title = title;
    this.postUser = postUser;
    this.content = content;
    this.postLikes = postLikes;
    this.postShares = postShares;
    this.listOfComments = listOfComments;
  }

  // Methods:-

  // Function to get post title
  getTitle = (): string => {
    return this.title;
  };

  //   Function to get username of the post
  getPostUserName = (): FbUser => {
    return this.postUser;
  };

  // Function to get post share number
  getPostShares = (): number => {
    return this.postShares;
  };
}

// NewsFeed Class
class NewsFeed {
  constructor(
    private user: FbUser,
    private listOfPosts: Post[],
    private lastUpadate: Date
  ) {
    this.user = user;
    this.listOfPosts = listOfPosts;
    this.lastUpadate = lastUpadate;
  }

  getUser = (): FbUser => {
    return this.user;
  };

  getLastUpdate = (): Date => {
    return this.lastUpadate;
  };
}

// User1
var user1 = new FbUser(
  "Anurag",
  "anuragkothare@outlook.com",
  "male",
  new Date("February 9, 1995"),
  8359990905,
  new Date("March 18 2009"),
  "Web Developer",
  "Banglore-City",
  "I am hard working ambititous guy"
);

// User2
var user2 = new FbUser(
  "Mahesh",
  "mahesh@outlook.com",
  "male",
  new Date("June 4, 1991"),
  835999888,
  new Date("March 12, 2011"),
  "Civil Servant",
  "Gurgaon",
  "I am Legend"
);

// User3
var user3 = new FbUser(
  "Radhika",
  "rahhl@outlook.com",
  "female",
  new Date("July 1, 1995"),
  835999121,
  new Date("September 23, 2011"),
  "Electronics Enginner",
  "Kanpur",
  "I am hard working ambititous guy"
);

var user4 = new FbUser(
  "Rahul",
  "rahhl@outlook.com",
  "male",
  new Date("April 22, 1998"),
  835999877,
  new Date("September 20, 2015"),
  "Teacher",
  "Jaipur",
  "I am lazy"
);

var user3 = new FbUser(
  "Ramesh",
  "ram@outlook.com",
  "male",
  new Date("June 4, 1991"),
  8359933232,
  new Date("November 12, 2010"),
  "Data Scientist",
  "New Delhi",
  "I am genius"
);

var user4 = new FbUser(
  "Aman",
  "aman@outlook.com",
  "male",
  new Date("May19, 1996"),
  835999888,
  new Date("October 2, 2012"),
  "Surgeon",
  "Chennai",
  "I am loving man with passion"
);

user1.addFriend(user2);
user1.addFriend(user3);

user2.addFriend(user4);
user2.addFriend(user3);

user3.addFriend(user4);

let comment1 = new FbComment(
  user1,
  "Welcome to Facebook Social Newtwork",
  87,
  101,
  new Date("June 12, 2018")
);

let comment2 = new FbComment(
  user3,
  "Experience good Social Connection.",
  100,
  91,
  new Date("June 19, 2018")
);

let comment3 = new FbComment(
  user4,
  "This i another great comment.",
  200,
  102,
  new Date("Sep 9, 2018")
);

let comment4 = new FbComment(
  user3,
  "This is so good to have you as a friend.",
  1002,
  873,
  new Date("Aug 23, 2018")
);

let comment5 = new FbComment(
  user4,
  "This picture is so  beautiful.",
  1090,
  866,
  new Date("Aug 30, 2018")
);

let comment6 = new FbComment(
  user4,
  "This place is so amazing.",
  999,
  83,
  new Date("Aug 28, 2018")
);

let comment7 = new FbComment(
  user3,
  "I like his attitude.",
  999,
  83,
  new Date("Aug 28, 2018")
);

let comment8 = new FbComment(
  user3,
  "This place is so amazing.",
  999,
  83,
  new Date("Aug 28, 2018")
);

var commentList1: FbComment[] = [comment1, comment2];
var commentList2: FbComment[] = [comment3, comment4];
var commentList3: FbComment[] = [comment5, comment6];
var commentList4: FbComment[] = [comment6, comment7];

let post1 = new Post(
  "title1",
  user1,
  "My first ever post",
  35,
  57,
  commentList1
);

let post2 = new Post(
  "title2",
  user1,
  "My second post is here",
  89,
  34,
  commentList2
);

let post3 = new Post(
  "title3",
  user2,
  "My third post is here",
  90,
  56,
  commentList3
);

let post4 = new Post(
  "title4",
  user4,
  "My fourth post is here",
  90,
  56,
  commentList4
);

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
var printUserInfo = (user: FbUser) => {
  console.log(
    ` User Information:
          Username is ${user.getUserName()} \n
          Email is ${user.getEmail()} \n
          D.O.B. is ${user.getDOB()} \n
          Gender is ${user.getGender()} \n
          Join Date of FB is ${user.getJoinDate()} \n
          List of friends are ${user
            .getListOfFriends()
            .map((friend, i) => `${friend.getUserName()}`.trim())
            .join(", ")} \n
          List of Posts are ${user
            .getListOfPost()
            .map((post, i) => `${post.getTitle()}`.trim())
            .join(", ")} \n
           
          `
  );
};
// User 1
printUserInfo(user1);
// User 2
printUserInfo(user2);
// User 3
printUserInfo(user3);
// User 4
printUserInfo(user4);
