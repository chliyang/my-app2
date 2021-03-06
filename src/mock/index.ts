import Mock from "mockjs";

Mock.setup({
  timeout: "500-2500" // 表示响应时间介于 200 和 600 毫秒之间，默认值是'10-100'。
});

Mock.mock("/users/token", "post", (req: any) => {
  const body = JSON.parse(req.body);
  if (body.name === "admin200" && body.password === "111111") {
    return {
      code: 0,
      data: {
        name: "admin200",
        phone: 18759394606,
        userId: Date.now().toString().slice(-6),
        age: 20,
        token:
          // eslint-disable-next-line max-len
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjI0MDA3MTYwLCJleHAiOjE2MjQ2MTE5NjB9.s403g3cl0L0IDvrkQb25B5wOu4wDJmAr4_KHHLmT6hg"
      },
      error: null
    };
  } else {
    return {
      code: 400,
      data: {},
      error: {
        response: {
          data: { message: "Wrong UserName or Password!" },
          status: 400
        }
      }
    };
  }
});

Mock.mock("/users/email", "get", (req: any) => {
  const body = JSON.parse(req.body);
  if (body.email) {
    return {
      code: 0,
      msg: "Verify successfully"
    };
  } else {
    return {
      code: 500,
      data: {},
      msg: "Please try again"
    };
  }
});

Mock.mock("/users", "post", (req: any) => {
  const body = JSON.parse(req.body);
  if (
    body.username &&
    body.email &&
    body.password &&
    body.verifyCode === "123456"
  ) {
    return {
      code: 0,
      data: {
        email: "1234@123.com",
        id: 0,
        name: "string",
        password: "string",
        roles: [
          {
            id: 0,
            name: "string"
          }
        ],
        status: true
      },
      msg: "success"
    };
  } else {
    return {
      code: 500,
      data: {},
      msg: "Error, please try again"
    };
  }
});

Mock.mock("/users/info", "get", (req: any) => {
  return {
    code: 0,
    data: {
      rolesId: [1],
      name: "chengli",
      id: 0
    }
  };
});

Mock.mock("/products", "get", (req: any) => {
  return {
    code: 0,
    data: [
      {
        productId: "1",
        productName: "name1",
        productPrice: "200",
        productImg: "light.jpg",
        category: "food"
      },
      {
        productId: "2",
        productName: "name2",
        productPrice: "200",
        productImg: "light.jpg",
        category: "food"
      },
      {
        productId: "3",
        productName: "name3",
        productPrice: "200",
        productImg: "light.jpg",
        category: "food"
      },
      {
        productId: "4",
        productName: "name4",
        productPrice: "200",
        productImg: "light.jpg",
        category: "food"
      },
      {
        productId: "5",
        productName: "name5",
        productPrice: "200",
        productImg: "light.jpg",
        category: "food"
      }
    ]
  };
});
