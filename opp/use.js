class User {
    constructor(name, age, email) {
      this.name = name;
      this.age = age;
      this.email = email;
    }
  
    checkName() {
      if (this.age >= 18) {
        console.log(`${this.name} là người trưởng thành.`);
      } else {
        console.log(`${this.name} chưa đủ 18 tuổi.`);
      }
    }
  }
  
  // Ví dụ sử dụng
  const user1 = new User("Trần Văn A", 20, "a@gmail.com");
  user1.checkName(); // "Trần Văn A là người trưởng thành."
  
  const user2 = new User("Nguyễn Thị B", 16, "b@gmail.com");
  user2.checkName(); // "Nguyễn Thị B chưa đủ 18 tuổi."
  