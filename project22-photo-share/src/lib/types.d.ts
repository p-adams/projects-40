declare namespace Lib {
  type EventPayload = {
    register: {
      data: {
        username: string;
        password: string;
      };
    };
    authenticate: {
      data: {
        username: string;
        password: string;
      };
    };
    input: {
      data: {
        field: string;
        value: string;
      };
    };
  };
}
