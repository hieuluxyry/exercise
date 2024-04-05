class User {
   constructor(name, age, email,telephonenumber,add) {
     this.name = name;
     this.age = age;
     this.email = email;
     this.telephonenumber = telephonenumber;
     this.add =add;
   }
 
   checkName() {
     if (this.age >= 18) {
       alert(`${this.name} là người trưởng thành.`);
     } else {
      alert(`${this.name} chưa đủ 18 tuổi.`);
     }
   }
 }
 const user1 = new User("Trần Văn A", 20, "a@gmail.com","0835882764","Thai Binh ProVine");
 user1.checkName(); // "Trần Văn A là người trưởng thành."
 
 const user2 = new User("Nguyễn Thị B", 16, "b@gmail.com","0946091475","Bac Giang Provine");
 user2.checkName(); // "Nguyễn Thị B chưa đủ 18 tuổi."
 
