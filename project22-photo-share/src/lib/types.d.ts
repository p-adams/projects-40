declare namespace Lib {
  type EventPayload = {
    identitySubmit: {
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
