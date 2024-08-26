interface RepositoryInterface<T, U = boolean> {
  findById(id: string): T;
  findAll(): T[];
  destroy(id: string): U;
}

const object: RepositoryInterface<string> = {
  findById: function (id: string): string {
    throw new Error("Function not implemented.");
  },
  findAll: function (): string[] {
    throw new Error("Function not implemented.");
  },
  destroy: function (id: string): boolean {
    throw new Error("Function not implemented.");
  },
};

class Product {}

interface ProductRepositoryInterface
  extends RepositoryInterface<Product, Product> {}

class User {}

interface UserRepository extends RepositoryInterface<User, boolean> {}

class UserRepositoryInterface implements UserRepository {
  findById(id: string): User {
    return new User();
  }
  findAll(): User[] {
    return [new User()];
  }
  destroy(id: string): boolean {
    return false;
  }
}

export {};
