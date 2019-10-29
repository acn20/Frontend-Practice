export class Post {
    user: Object; /*{
        "username": "alex",
        "profilePictureUrl": "",
        "profileUrl": ""
    }*/
    picture: string;
    time: string; /*"2019-07-20 12:59:55"*/
    location: string;
    likes: any;/*{
        "count": 2,
        "firstLikeProfilePic": "",
        "people": [
            "andreea",
            "cristina"
        ]
    }*/
    topComment: any; /*{
        "user": "andreea",
        "text": "beautiful"
    }*/
}