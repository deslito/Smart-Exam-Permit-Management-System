
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model Invigilator
 * 
 */
export type Invigilator = $Result.DefaultSelection<Prisma.$InvigilatorPayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model CourseUnit
 * 
 */
export type CourseUnit = $Result.DefaultSelection<Prisma.$CourseUnitPayload>
/**
 * Model EnrolledCourseUnit
 * 
 */
export type EnrolledCourseUnit = $Result.DefaultSelection<Prisma.$EnrolledCourseUnitPayload>
/**
 * Model Exam
 * 
 */
export type Exam = $Result.DefaultSelection<Prisma.$ExamPayload>
/**
 * Model ExamAssignment
 * 
 */
export type ExamAssignment = $Result.DefaultSelection<Prisma.$ExamAssignmentPayload>
/**
 * Model StudentQrCode
 * 
 */
export type StudentQrCode = $Result.DefaultSelection<Prisma.$StudentQrCodePayload>
/**
 * Model Programme
 * 
 */
export type Programme = $Result.DefaultSelection<Prisma.$ProgrammePayload>
/**
 * Model FacultyOrSchool
 * 
 */
export type FacultyOrSchool = $Result.DefaultSelection<Prisma.$FacultyOrSchoolPayload>
/**
 * Model Department
 * 
 */
export type Department = $Result.DefaultSelection<Prisma.$DepartmentPayload>
/**
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  STUDENT: 'STUDENT',
  INVIGILATOR: 'INVIGILATOR',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const StudyMode: {
  DAY: 'DAY',
  EVENING: 'EVENING'
};

export type StudyMode = (typeof StudyMode)[keyof typeof StudyMode]


export const Semester: {
  ONE: 'ONE',
  TWO: 'TWO'
};

export type Semester = (typeof Semester)[keyof typeof Semester]


export const PaymentStatus: {
  paid: 'paid',
  pending: 'pending'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const PermitStatus: {
  valid: 'valid',
  invalid: 'invalid'
};

export type PermitStatus = (typeof PermitStatus)[keyof typeof PermitStatus]


export const CourseCategory: {
  CORE: 'CORE',
  ELECTIVE: 'ELECTIVE'
};

export type CourseCategory = (typeof CourseCategory)[keyof typeof CourseCategory]


export const CourseType: {
  Bachelor: 'Bachelor',
  Diploma: 'Diploma',
  Master: 'Master',
  Phd: 'Phd'
};

export type CourseType = (typeof CourseType)[keyof typeof CourseType]


export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE'
};

export type Gender = (typeof Gender)[keyof typeof Gender]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type StudyMode = $Enums.StudyMode

export const StudyMode: typeof $Enums.StudyMode

export type Semester = $Enums.Semester

export const Semester: typeof $Enums.Semester

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type PermitStatus = $Enums.PermitStatus

export const PermitStatus: typeof $Enums.PermitStatus

export type CourseCategory = $Enums.CourseCategory

export const CourseCategory: typeof $Enums.CourseCategory

export type CourseType = $Enums.CourseType

export const CourseType: typeof $Enums.CourseType

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invigilator`: Exposes CRUD operations for the **Invigilator** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invigilators
    * const invigilators = await prisma.invigilator.findMany()
    * ```
    */
  get invigilator(): Prisma.InvigilatorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.courseUnit`: Exposes CRUD operations for the **CourseUnit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CourseUnits
    * const courseUnits = await prisma.courseUnit.findMany()
    * ```
    */
  get courseUnit(): Prisma.CourseUnitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.enrolledCourseUnit`: Exposes CRUD operations for the **EnrolledCourseUnit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EnrolledCourseUnits
    * const enrolledCourseUnits = await prisma.enrolledCourseUnit.findMany()
    * ```
    */
  get enrolledCourseUnit(): Prisma.EnrolledCourseUnitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exam`: Exposes CRUD operations for the **Exam** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exams
    * const exams = await prisma.exam.findMany()
    * ```
    */
  get exam(): Prisma.ExamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.examAssignment`: Exposes CRUD operations for the **ExamAssignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExamAssignments
    * const examAssignments = await prisma.examAssignment.findMany()
    * ```
    */
  get examAssignment(): Prisma.ExamAssignmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studentQrCode`: Exposes CRUD operations for the **StudentQrCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentQrCodes
    * const studentQrCodes = await prisma.studentQrCode.findMany()
    * ```
    */
  get studentQrCode(): Prisma.StudentQrCodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.programme`: Exposes CRUD operations for the **Programme** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Programmes
    * const programmes = await prisma.programme.findMany()
    * ```
    */
  get programme(): Prisma.ProgrammeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.facultyOrSchool`: Exposes CRUD operations for the **FacultyOrSchool** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FacultyOrSchools
    * const facultyOrSchools = await prisma.facultyOrSchool.findMany()
    * ```
    */
  get facultyOrSchool(): Prisma.FacultyOrSchoolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.department`: Exposes CRUD operations for the **Department** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.department.findMany()
    * ```
    */
  get department(): Prisma.DepartmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Student: 'Student',
    Invigilator: 'Invigilator',
    Admin: 'Admin',
    CourseUnit: 'CourseUnit',
    EnrolledCourseUnit: 'EnrolledCourseUnit',
    Exam: 'Exam',
    ExamAssignment: 'ExamAssignment',
    StudentQrCode: 'StudentQrCode',
    Programme: 'Programme',
    FacultyOrSchool: 'FacultyOrSchool',
    Department: 'Department',
    Course: 'Course'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "student" | "invigilator" | "admin" | "courseUnit" | "enrolledCourseUnit" | "exam" | "examAssignment" | "studentQrCode" | "programme" | "facultyOrSchool" | "department" | "course"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      Invigilator: {
        payload: Prisma.$InvigilatorPayload<ExtArgs>
        fields: Prisma.InvigilatorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvigilatorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvigilatorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvigilatorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvigilatorPayload>
          }
          findFirst: {
            args: Prisma.InvigilatorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvigilatorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvigilatorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvigilatorPayload>
          }
          findMany: {
            args: Prisma.InvigilatorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvigilatorPayload>[]
          }
          create: {
            args: Prisma.InvigilatorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvigilatorPayload>
          }
          createMany: {
            args: Prisma.InvigilatorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvigilatorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvigilatorPayload>[]
          }
          delete: {
            args: Prisma.InvigilatorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvigilatorPayload>
          }
          update: {
            args: Prisma.InvigilatorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvigilatorPayload>
          }
          deleteMany: {
            args: Prisma.InvigilatorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvigilatorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvigilatorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvigilatorPayload>[]
          }
          upsert: {
            args: Prisma.InvigilatorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvigilatorPayload>
          }
          aggregate: {
            args: Prisma.InvigilatorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvigilator>
          }
          groupBy: {
            args: Prisma.InvigilatorGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvigilatorGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvigilatorCountArgs<ExtArgs>
            result: $Utils.Optional<InvigilatorCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      CourseUnit: {
        payload: Prisma.$CourseUnitPayload<ExtArgs>
        fields: Prisma.CourseUnitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseUnitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseUnitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseUnitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseUnitPayload>
          }
          findFirst: {
            args: Prisma.CourseUnitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseUnitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseUnitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseUnitPayload>
          }
          findMany: {
            args: Prisma.CourseUnitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseUnitPayload>[]
          }
          create: {
            args: Prisma.CourseUnitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseUnitPayload>
          }
          createMany: {
            args: Prisma.CourseUnitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseUnitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseUnitPayload>[]
          }
          delete: {
            args: Prisma.CourseUnitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseUnitPayload>
          }
          update: {
            args: Prisma.CourseUnitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseUnitPayload>
          }
          deleteMany: {
            args: Prisma.CourseUnitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUnitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseUnitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseUnitPayload>[]
          }
          upsert: {
            args: Prisma.CourseUnitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseUnitPayload>
          }
          aggregate: {
            args: Prisma.CourseUnitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourseUnit>
          }
          groupBy: {
            args: Prisma.CourseUnitGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseUnitGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseUnitCountArgs<ExtArgs>
            result: $Utils.Optional<CourseUnitCountAggregateOutputType> | number
          }
        }
      }
      EnrolledCourseUnit: {
        payload: Prisma.$EnrolledCourseUnitPayload<ExtArgs>
        fields: Prisma.EnrolledCourseUnitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnrolledCourseUnitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrolledCourseUnitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnrolledCourseUnitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrolledCourseUnitPayload>
          }
          findFirst: {
            args: Prisma.EnrolledCourseUnitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrolledCourseUnitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnrolledCourseUnitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrolledCourseUnitPayload>
          }
          findMany: {
            args: Prisma.EnrolledCourseUnitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrolledCourseUnitPayload>[]
          }
          create: {
            args: Prisma.EnrolledCourseUnitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrolledCourseUnitPayload>
          }
          createMany: {
            args: Prisma.EnrolledCourseUnitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EnrolledCourseUnitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrolledCourseUnitPayload>[]
          }
          delete: {
            args: Prisma.EnrolledCourseUnitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrolledCourseUnitPayload>
          }
          update: {
            args: Prisma.EnrolledCourseUnitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrolledCourseUnitPayload>
          }
          deleteMany: {
            args: Prisma.EnrolledCourseUnitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnrolledCourseUnitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EnrolledCourseUnitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrolledCourseUnitPayload>[]
          }
          upsert: {
            args: Prisma.EnrolledCourseUnitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrolledCourseUnitPayload>
          }
          aggregate: {
            args: Prisma.EnrolledCourseUnitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnrolledCourseUnit>
          }
          groupBy: {
            args: Prisma.EnrolledCourseUnitGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnrolledCourseUnitGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnrolledCourseUnitCountArgs<ExtArgs>
            result: $Utils.Optional<EnrolledCourseUnitCountAggregateOutputType> | number
          }
        }
      }
      Exam: {
        payload: Prisma.$ExamPayload<ExtArgs>
        fields: Prisma.ExamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          findFirst: {
            args: Prisma.ExamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          findMany: {
            args: Prisma.ExamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>[]
          }
          create: {
            args: Prisma.ExamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          createMany: {
            args: Prisma.ExamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>[]
          }
          delete: {
            args: Prisma.ExamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          update: {
            args: Prisma.ExamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          deleteMany: {
            args: Prisma.ExamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>[]
          }
          upsert: {
            args: Prisma.ExamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          aggregate: {
            args: Prisma.ExamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExam>
          }
          groupBy: {
            args: Prisma.ExamGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExamGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExamCountArgs<ExtArgs>
            result: $Utils.Optional<ExamCountAggregateOutputType> | number
          }
        }
      }
      ExamAssignment: {
        payload: Prisma.$ExamAssignmentPayload<ExtArgs>
        fields: Prisma.ExamAssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExamAssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamAssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExamAssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamAssignmentPayload>
          }
          findFirst: {
            args: Prisma.ExamAssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamAssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExamAssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamAssignmentPayload>
          }
          findMany: {
            args: Prisma.ExamAssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamAssignmentPayload>[]
          }
          create: {
            args: Prisma.ExamAssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamAssignmentPayload>
          }
          createMany: {
            args: Prisma.ExamAssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExamAssignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamAssignmentPayload>[]
          }
          delete: {
            args: Prisma.ExamAssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamAssignmentPayload>
          }
          update: {
            args: Prisma.ExamAssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamAssignmentPayload>
          }
          deleteMany: {
            args: Prisma.ExamAssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExamAssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExamAssignmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamAssignmentPayload>[]
          }
          upsert: {
            args: Prisma.ExamAssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamAssignmentPayload>
          }
          aggregate: {
            args: Prisma.ExamAssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExamAssignment>
          }
          groupBy: {
            args: Prisma.ExamAssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExamAssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExamAssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<ExamAssignmentCountAggregateOutputType> | number
          }
        }
      }
      StudentQrCode: {
        payload: Prisma.$StudentQrCodePayload<ExtArgs>
        fields: Prisma.StudentQrCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentQrCodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentQrCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentQrCodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentQrCodePayload>
          }
          findFirst: {
            args: Prisma.StudentQrCodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentQrCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentQrCodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentQrCodePayload>
          }
          findMany: {
            args: Prisma.StudentQrCodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentQrCodePayload>[]
          }
          create: {
            args: Prisma.StudentQrCodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentQrCodePayload>
          }
          createMany: {
            args: Prisma.StudentQrCodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentQrCodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentQrCodePayload>[]
          }
          delete: {
            args: Prisma.StudentQrCodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentQrCodePayload>
          }
          update: {
            args: Prisma.StudentQrCodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentQrCodePayload>
          }
          deleteMany: {
            args: Prisma.StudentQrCodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentQrCodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentQrCodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentQrCodePayload>[]
          }
          upsert: {
            args: Prisma.StudentQrCodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentQrCodePayload>
          }
          aggregate: {
            args: Prisma.StudentQrCodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentQrCode>
          }
          groupBy: {
            args: Prisma.StudentQrCodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentQrCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentQrCodeCountArgs<ExtArgs>
            result: $Utils.Optional<StudentQrCodeCountAggregateOutputType> | number
          }
        }
      }
      Programme: {
        payload: Prisma.$ProgrammePayload<ExtArgs>
        fields: Prisma.ProgrammeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProgrammeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgrammePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProgrammeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgrammePayload>
          }
          findFirst: {
            args: Prisma.ProgrammeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgrammePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProgrammeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgrammePayload>
          }
          findMany: {
            args: Prisma.ProgrammeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgrammePayload>[]
          }
          create: {
            args: Prisma.ProgrammeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgrammePayload>
          }
          createMany: {
            args: Prisma.ProgrammeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProgrammeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgrammePayload>[]
          }
          delete: {
            args: Prisma.ProgrammeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgrammePayload>
          }
          update: {
            args: Prisma.ProgrammeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgrammePayload>
          }
          deleteMany: {
            args: Prisma.ProgrammeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProgrammeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProgrammeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgrammePayload>[]
          }
          upsert: {
            args: Prisma.ProgrammeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgrammePayload>
          }
          aggregate: {
            args: Prisma.ProgrammeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgramme>
          }
          groupBy: {
            args: Prisma.ProgrammeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProgrammeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProgrammeCountArgs<ExtArgs>
            result: $Utils.Optional<ProgrammeCountAggregateOutputType> | number
          }
        }
      }
      FacultyOrSchool: {
        payload: Prisma.$FacultyOrSchoolPayload<ExtArgs>
        fields: Prisma.FacultyOrSchoolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FacultyOrSchoolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyOrSchoolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FacultyOrSchoolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyOrSchoolPayload>
          }
          findFirst: {
            args: Prisma.FacultyOrSchoolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyOrSchoolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FacultyOrSchoolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyOrSchoolPayload>
          }
          findMany: {
            args: Prisma.FacultyOrSchoolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyOrSchoolPayload>[]
          }
          create: {
            args: Prisma.FacultyOrSchoolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyOrSchoolPayload>
          }
          createMany: {
            args: Prisma.FacultyOrSchoolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FacultyOrSchoolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyOrSchoolPayload>[]
          }
          delete: {
            args: Prisma.FacultyOrSchoolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyOrSchoolPayload>
          }
          update: {
            args: Prisma.FacultyOrSchoolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyOrSchoolPayload>
          }
          deleteMany: {
            args: Prisma.FacultyOrSchoolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FacultyOrSchoolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FacultyOrSchoolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyOrSchoolPayload>[]
          }
          upsert: {
            args: Prisma.FacultyOrSchoolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyOrSchoolPayload>
          }
          aggregate: {
            args: Prisma.FacultyOrSchoolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFacultyOrSchool>
          }
          groupBy: {
            args: Prisma.FacultyOrSchoolGroupByArgs<ExtArgs>
            result: $Utils.Optional<FacultyOrSchoolGroupByOutputType>[]
          }
          count: {
            args: Prisma.FacultyOrSchoolCountArgs<ExtArgs>
            result: $Utils.Optional<FacultyOrSchoolCountAggregateOutputType> | number
          }
        }
      }
      Department: {
        payload: Prisma.$DepartmentPayload<ExtArgs>
        fields: Prisma.DepartmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findFirst: {
            args: Prisma.DepartmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findMany: {
            args: Prisma.DepartmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          create: {
            args: Prisma.DepartmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          createMany: {
            args: Prisma.DepartmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepartmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          delete: {
            args: Prisma.DepartmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          update: {
            args: Prisma.DepartmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          deleteMany: {
            args: Prisma.DepartmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepartmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DepartmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          upsert: {
            args: Prisma.DepartmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          aggregate: {
            args: Prisma.DepartmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartment>
          }
          groupBy: {
            args: Prisma.DepartmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartmentCountArgs<ExtArgs>
            result: $Utils.Optional<DepartmentCountAggregateOutputType> | number
          }
        }
      }
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    student?: StudentOmit
    invigilator?: InvigilatorOmit
    admin?: AdminOmit
    courseUnit?: CourseUnitOmit
    enrolledCourseUnit?: EnrolledCourseUnitOmit
    exam?: ExamOmit
    examAssignment?: ExamAssignmentOmit
    studentQrCode?: StudentQrCodeOmit
    programme?: ProgrammeOmit
    facultyOrSchool?: FacultyOrSchoolOmit
    department?: DepartmentOmit
    course?: CourseOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    enrolledUnits: number
    studentQrCodes: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enrolledUnits?: boolean | StudentCountOutputTypeCountEnrolledUnitsArgs
    studentQrCodes?: boolean | StudentCountOutputTypeCountStudentQrCodesArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountEnrolledUnitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrolledCourseUnitWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountStudentQrCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentQrCodeWhereInput
  }


  /**
   * Count Type InvigilatorCountOutputType
   */

  export type InvigilatorCountOutputType = {
    assignedExams: number
  }

  export type InvigilatorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignedExams?: boolean | InvigilatorCountOutputTypeCountAssignedExamsArgs
  }

  // Custom InputTypes
  /**
   * InvigilatorCountOutputType without action
   */
  export type InvigilatorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvigilatorCountOutputType
     */
    select?: InvigilatorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InvigilatorCountOutputType without action
   */
  export type InvigilatorCountOutputTypeCountAssignedExamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamAssignmentWhereInput
  }


  /**
   * Count Type CourseUnitCountOutputType
   */

  export type CourseUnitCountOutputType = {
    enrolledBy: number
    exams: number
  }

  export type CourseUnitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enrolledBy?: boolean | CourseUnitCountOutputTypeCountEnrolledByArgs
    exams?: boolean | CourseUnitCountOutputTypeCountExamsArgs
  }

  // Custom InputTypes
  /**
   * CourseUnitCountOutputType without action
   */
  export type CourseUnitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseUnitCountOutputType
     */
    select?: CourseUnitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseUnitCountOutputType without action
   */
  export type CourseUnitCountOutputTypeCountEnrolledByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrolledCourseUnitWhereInput
  }

  /**
   * CourseUnitCountOutputType without action
   */
  export type CourseUnitCountOutputTypeCountExamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamWhereInput
  }


  /**
   * Count Type ExamCountOutputType
   */

  export type ExamCountOutputType = {
    invigilators: number
  }

  export type ExamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invigilators?: boolean | ExamCountOutputTypeCountInvigilatorsArgs
  }

  // Custom InputTypes
  /**
   * ExamCountOutputType without action
   */
  export type ExamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamCountOutputType
     */
    select?: ExamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExamCountOutputType without action
   */
  export type ExamCountOutputTypeCountInvigilatorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamAssignmentWhereInput
  }


  /**
   * Count Type ProgrammeCountOutputType
   */

  export type ProgrammeCountOutputType = {
    students: number
  }

  export type ProgrammeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | ProgrammeCountOutputTypeCountStudentsArgs
  }

  // Custom InputTypes
  /**
   * ProgrammeCountOutputType without action
   */
  export type ProgrammeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgrammeCountOutputType
     */
    select?: ProgrammeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProgrammeCountOutputType without action
   */
  export type ProgrammeCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
  }


  /**
   * Count Type FacultyOrSchoolCountOutputType
   */

  export type FacultyOrSchoolCountOutputType = {
    departments: number
    admins: number
  }

  export type FacultyOrSchoolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departments?: boolean | FacultyOrSchoolCountOutputTypeCountDepartmentsArgs
    admins?: boolean | FacultyOrSchoolCountOutputTypeCountAdminsArgs
  }

  // Custom InputTypes
  /**
   * FacultyOrSchoolCountOutputType without action
   */
  export type FacultyOrSchoolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyOrSchoolCountOutputType
     */
    select?: FacultyOrSchoolCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FacultyOrSchoolCountOutputType without action
   */
  export type FacultyOrSchoolCountOutputTypeCountDepartmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
  }

  /**
   * FacultyOrSchoolCountOutputType without action
   */
  export type FacultyOrSchoolCountOutputTypeCountAdminsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
  }


  /**
   * Count Type DepartmentCountOutputType
   */

  export type DepartmentCountOutputType = {
    courses: number
    invigilators: number
  }

  export type DepartmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | DepartmentCountOutputTypeCountCoursesArgs
    invigilators?: boolean | DepartmentCountOutputTypeCountInvigilatorsArgs
  }

  // Custom InputTypes
  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentCountOutputType
     */
    select?: DepartmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountInvigilatorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvigilatorWhereInput
  }


  /**
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    programmes: number
    courseUnits: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    programmes?: boolean | CourseCountOutputTypeCountProgrammesArgs
    courseUnits?: boolean | CourseCountOutputTypeCountCourseUnitsArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountProgrammesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgrammeWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountCourseUnitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseUnitWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | User$studentArgs<ExtArgs>
    invigilator?: boolean | User$invigilatorArgs<ExtArgs>
    admin?: boolean | User$adminArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | User$studentArgs<ExtArgs>
    invigilator?: boolean | User$invigilatorArgs<ExtArgs>
    admin?: boolean | User$adminArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs> | null
      invigilator: Prisma.$InvigilatorPayload<ExtArgs> | null
      admin: Prisma.$AdminPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends User$studentArgs<ExtArgs> = {}>(args?: Subset<T, User$studentArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    invigilator<T extends User$invigilatorArgs<ExtArgs> = {}>(args?: Subset<T, User$invigilatorArgs<ExtArgs>>): Prisma__InvigilatorClient<$Result.GetResult<Prisma.$InvigilatorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    admin<T extends User$adminArgs<ExtArgs> = {}>(args?: Subset<T, User$adminArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.student
   */
  export type User$studentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
  }

  /**
   * User.invigilator
   */
  export type User$invigilatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invigilator
     */
    select?: InvigilatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invigilator
     */
    omit?: InvigilatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvigilatorInclude<ExtArgs> | null
    where?: InvigilatorWhereInput
  }

  /**
   * User.admin
   */
  export type User$adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    studyYear: number | null
  }

  export type StudentSumAggregateOutputType = {
    studyYear: number | null
  }

  export type StudentMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    otherNames: string | null
    lastName: string | null
    studentNo: string | null
    regNo: string | null
    gender: $Enums.Gender | null
    studyYear: number | null
    campus: string | null
    academicYear: string | null
    currentSemester: $Enums.Semester | null
    picture: string | null
    paymentStatus: $Enums.PaymentStatus | null
    permitStatus: $Enums.PermitStatus | null
    programmeId: string | null
  }

  export type StudentMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    otherNames: string | null
    lastName: string | null
    studentNo: string | null
    regNo: string | null
    gender: $Enums.Gender | null
    studyYear: number | null
    campus: string | null
    academicYear: string | null
    currentSemester: $Enums.Semester | null
    picture: string | null
    paymentStatus: $Enums.PaymentStatus | null
    permitStatus: $Enums.PermitStatus | null
    programmeId: string | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    firstName: number
    otherNames: number
    lastName: number
    studentNo: number
    regNo: number
    gender: number
    studyYear: number
    campus: number
    academicYear: number
    currentSemester: number
    picture: number
    paymentStatus: number
    permitStatus: number
    programmeId: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    studyYear?: true
  }

  export type StudentSumAggregateInputType = {
    studyYear?: true
  }

  export type StudentMinAggregateInputType = {
    id?: true
    firstName?: true
    otherNames?: true
    lastName?: true
    studentNo?: true
    regNo?: true
    gender?: true
    studyYear?: true
    campus?: true
    academicYear?: true
    currentSemester?: true
    picture?: true
    paymentStatus?: true
    permitStatus?: true
    programmeId?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    firstName?: true
    otherNames?: true
    lastName?: true
    studentNo?: true
    regNo?: true
    gender?: true
    studyYear?: true
    campus?: true
    academicYear?: true
    currentSemester?: true
    picture?: true
    paymentStatus?: true
    permitStatus?: true
    programmeId?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    firstName?: true
    otherNames?: true
    lastName?: true
    studentNo?: true
    regNo?: true
    gender?: true
    studyYear?: true
    campus?: true
    academicYear?: true
    currentSemester?: true
    picture?: true
    paymentStatus?: true
    permitStatus?: true
    programmeId?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: string
    firstName: string
    otherNames: string | null
    lastName: string
    studentNo: string
    regNo: string
    gender: $Enums.Gender
    studyYear: number
    campus: string
    academicYear: string
    currentSemester: $Enums.Semester
    picture: string | null
    paymentStatus: $Enums.PaymentStatus
    permitStatus: $Enums.PermitStatus
    programmeId: string
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    otherNames?: boolean
    lastName?: boolean
    studentNo?: boolean
    regNo?: boolean
    gender?: boolean
    studyYear?: boolean
    campus?: boolean
    academicYear?: boolean
    currentSemester?: boolean
    picture?: boolean
    paymentStatus?: boolean
    permitStatus?: boolean
    programmeId?: boolean
    programme?: boolean | ProgrammeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    enrolledUnits?: boolean | Student$enrolledUnitsArgs<ExtArgs>
    studentQrCodes?: boolean | Student$studentQrCodesArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    otherNames?: boolean
    lastName?: boolean
    studentNo?: boolean
    regNo?: boolean
    gender?: boolean
    studyYear?: boolean
    campus?: boolean
    academicYear?: boolean
    currentSemester?: boolean
    picture?: boolean
    paymentStatus?: boolean
    permitStatus?: boolean
    programmeId?: boolean
    programme?: boolean | ProgrammeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    otherNames?: boolean
    lastName?: boolean
    studentNo?: boolean
    regNo?: boolean
    gender?: boolean
    studyYear?: boolean
    campus?: boolean
    academicYear?: boolean
    currentSemester?: boolean
    picture?: boolean
    paymentStatus?: boolean
    permitStatus?: boolean
    programmeId?: boolean
    programme?: boolean | ProgrammeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectScalar = {
    id?: boolean
    firstName?: boolean
    otherNames?: boolean
    lastName?: boolean
    studentNo?: boolean
    regNo?: boolean
    gender?: boolean
    studyYear?: boolean
    campus?: boolean
    academicYear?: boolean
    currentSemester?: boolean
    picture?: boolean
    paymentStatus?: boolean
    permitStatus?: boolean
    programmeId?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "otherNames" | "lastName" | "studentNo" | "regNo" | "gender" | "studyYear" | "campus" | "academicYear" | "currentSemester" | "picture" | "paymentStatus" | "permitStatus" | "programmeId", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    programme?: boolean | ProgrammeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    enrolledUnits?: boolean | Student$enrolledUnitsArgs<ExtArgs>
    studentQrCodes?: boolean | Student$studentQrCodesArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    programme?: boolean | ProgrammeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StudentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    programme?: boolean | ProgrammeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      programme: Prisma.$ProgrammePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      enrolledUnits: Prisma.$EnrolledCourseUnitPayload<ExtArgs>[]
      studentQrCodes: Prisma.$StudentQrCodePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      otherNames: string | null
      lastName: string
      studentNo: string
      regNo: string
      gender: $Enums.Gender
      studyYear: number
      campus: string
      academicYear: string
      currentSemester: $Enums.Semester
      picture: string | null
      paymentStatus: $Enums.PaymentStatus
      permitStatus: $Enums.PermitStatus
      programmeId: string
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {StudentCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {StudentUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudentUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    programme<T extends ProgrammeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProgrammeDefaultArgs<ExtArgs>>): Prisma__ProgrammeClient<$Result.GetResult<Prisma.$ProgrammePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    enrolledUnits<T extends Student$enrolledUnitsArgs<ExtArgs> = {}>(args?: Subset<T, Student$enrolledUnitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrolledCourseUnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    studentQrCodes<T extends Student$studentQrCodesArgs<ExtArgs> = {}>(args?: Subset<T, Student$studentQrCodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentQrCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'String'>
    readonly firstName: FieldRef<"Student", 'String'>
    readonly otherNames: FieldRef<"Student", 'String'>
    readonly lastName: FieldRef<"Student", 'String'>
    readonly studentNo: FieldRef<"Student", 'String'>
    readonly regNo: FieldRef<"Student", 'String'>
    readonly gender: FieldRef<"Student", 'Gender'>
    readonly studyYear: FieldRef<"Student", 'Int'>
    readonly campus: FieldRef<"Student", 'String'>
    readonly academicYear: FieldRef<"Student", 'String'>
    readonly currentSemester: FieldRef<"Student", 'Semester'>
    readonly picture: FieldRef<"Student", 'String'>
    readonly paymentStatus: FieldRef<"Student", 'PaymentStatus'>
    readonly permitStatus: FieldRef<"Student", 'PermitStatus'>
    readonly programmeId: FieldRef<"Student", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student createManyAndReturn
   */
  export type StudentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student updateManyAndReturn
   */
  export type StudentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student.enrolledUnits
   */
  export type Student$enrolledUnitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledCourseUnit
     */
    select?: EnrolledCourseUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnrolledCourseUnit
     */
    omit?: EnrolledCourseUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolledCourseUnitInclude<ExtArgs> | null
    where?: EnrolledCourseUnitWhereInput
    orderBy?: EnrolledCourseUnitOrderByWithRelationInput | EnrolledCourseUnitOrderByWithRelationInput[]
    cursor?: EnrolledCourseUnitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrolledCourseUnitScalarFieldEnum | EnrolledCourseUnitScalarFieldEnum[]
  }

  /**
   * Student.studentQrCodes
   */
  export type Student$studentQrCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentQrCode
     */
    select?: StudentQrCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentQrCode
     */
    omit?: StudentQrCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentQrCodeInclude<ExtArgs> | null
    where?: StudentQrCodeWhereInput
    orderBy?: StudentQrCodeOrderByWithRelationInput | StudentQrCodeOrderByWithRelationInput[]
    cursor?: StudentQrCodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentQrCodeScalarFieldEnum | StudentQrCodeScalarFieldEnum[]
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model Invigilator
   */

  export type AggregateInvigilator = {
    _count: InvigilatorCountAggregateOutputType | null
    _min: InvigilatorMinAggregateOutputType | null
    _max: InvigilatorMaxAggregateOutputType | null
  }

  export type InvigilatorMinAggregateOutputType = {
    id: string | null
    invigilatorNumber: string | null
    title: string | null
    firstName: string | null
    otherNames: string | null
    lastName: string | null
    picture: string | null
    departmentId: string | null
  }

  export type InvigilatorMaxAggregateOutputType = {
    id: string | null
    invigilatorNumber: string | null
    title: string | null
    firstName: string | null
    otherNames: string | null
    lastName: string | null
    picture: string | null
    departmentId: string | null
  }

  export type InvigilatorCountAggregateOutputType = {
    id: number
    invigilatorNumber: number
    title: number
    firstName: number
    otherNames: number
    lastName: number
    picture: number
    departmentId: number
    _all: number
  }


  export type InvigilatorMinAggregateInputType = {
    id?: true
    invigilatorNumber?: true
    title?: true
    firstName?: true
    otherNames?: true
    lastName?: true
    picture?: true
    departmentId?: true
  }

  export type InvigilatorMaxAggregateInputType = {
    id?: true
    invigilatorNumber?: true
    title?: true
    firstName?: true
    otherNames?: true
    lastName?: true
    picture?: true
    departmentId?: true
  }

  export type InvigilatorCountAggregateInputType = {
    id?: true
    invigilatorNumber?: true
    title?: true
    firstName?: true
    otherNames?: true
    lastName?: true
    picture?: true
    departmentId?: true
    _all?: true
  }

  export type InvigilatorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invigilator to aggregate.
     */
    where?: InvigilatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invigilators to fetch.
     */
    orderBy?: InvigilatorOrderByWithRelationInput | InvigilatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvigilatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invigilators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invigilators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invigilators
    **/
    _count?: true | InvigilatorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvigilatorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvigilatorMaxAggregateInputType
  }

  export type GetInvigilatorAggregateType<T extends InvigilatorAggregateArgs> = {
        [P in keyof T & keyof AggregateInvigilator]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvigilator[P]>
      : GetScalarType<T[P], AggregateInvigilator[P]>
  }




  export type InvigilatorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvigilatorWhereInput
    orderBy?: InvigilatorOrderByWithAggregationInput | InvigilatorOrderByWithAggregationInput[]
    by: InvigilatorScalarFieldEnum[] | InvigilatorScalarFieldEnum
    having?: InvigilatorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvigilatorCountAggregateInputType | true
    _min?: InvigilatorMinAggregateInputType
    _max?: InvigilatorMaxAggregateInputType
  }

  export type InvigilatorGroupByOutputType = {
    id: string
    invigilatorNumber: string
    title: string
    firstName: string
    otherNames: string | null
    lastName: string
    picture: string | null
    departmentId: string
    _count: InvigilatorCountAggregateOutputType | null
    _min: InvigilatorMinAggregateOutputType | null
    _max: InvigilatorMaxAggregateOutputType | null
  }

  type GetInvigilatorGroupByPayload<T extends InvigilatorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvigilatorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvigilatorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvigilatorGroupByOutputType[P]>
            : GetScalarType<T[P], InvigilatorGroupByOutputType[P]>
        }
      >
    >


  export type InvigilatorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invigilatorNumber?: boolean
    title?: boolean
    firstName?: boolean
    otherNames?: boolean
    lastName?: boolean
    picture?: boolean
    departmentId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    assignedExams?: boolean | Invigilator$assignedExamsArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    _count?: boolean | InvigilatorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invigilator"]>

  export type InvigilatorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invigilatorNumber?: boolean
    title?: boolean
    firstName?: boolean
    otherNames?: boolean
    lastName?: boolean
    picture?: boolean
    departmentId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invigilator"]>

  export type InvigilatorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invigilatorNumber?: boolean
    title?: boolean
    firstName?: boolean
    otherNames?: boolean
    lastName?: boolean
    picture?: boolean
    departmentId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invigilator"]>

  export type InvigilatorSelectScalar = {
    id?: boolean
    invigilatorNumber?: boolean
    title?: boolean
    firstName?: boolean
    otherNames?: boolean
    lastName?: boolean
    picture?: boolean
    departmentId?: boolean
  }

  export type InvigilatorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "invigilatorNumber" | "title" | "firstName" | "otherNames" | "lastName" | "picture" | "departmentId", ExtArgs["result"]["invigilator"]>
  export type InvigilatorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    assignedExams?: boolean | Invigilator$assignedExamsArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    _count?: boolean | InvigilatorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InvigilatorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }
  export type InvigilatorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }

  export type $InvigilatorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invigilator"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      assignedExams: Prisma.$ExamAssignmentPayload<ExtArgs>[]
      department: Prisma.$DepartmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      invigilatorNumber: string
      title: string
      firstName: string
      otherNames: string | null
      lastName: string
      picture: string | null
      departmentId: string
    }, ExtArgs["result"]["invigilator"]>
    composites: {}
  }

  type InvigilatorGetPayload<S extends boolean | null | undefined | InvigilatorDefaultArgs> = $Result.GetResult<Prisma.$InvigilatorPayload, S>

  type InvigilatorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvigilatorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvigilatorCountAggregateInputType | true
    }

  export interface InvigilatorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invigilator'], meta: { name: 'Invigilator' } }
    /**
     * Find zero or one Invigilator that matches the filter.
     * @param {InvigilatorFindUniqueArgs} args - Arguments to find a Invigilator
     * @example
     * // Get one Invigilator
     * const invigilator = await prisma.invigilator.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvigilatorFindUniqueArgs>(args: SelectSubset<T, InvigilatorFindUniqueArgs<ExtArgs>>): Prisma__InvigilatorClient<$Result.GetResult<Prisma.$InvigilatorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invigilator that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvigilatorFindUniqueOrThrowArgs} args - Arguments to find a Invigilator
     * @example
     * // Get one Invigilator
     * const invigilator = await prisma.invigilator.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvigilatorFindUniqueOrThrowArgs>(args: SelectSubset<T, InvigilatorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvigilatorClient<$Result.GetResult<Prisma.$InvigilatorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invigilator that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvigilatorFindFirstArgs} args - Arguments to find a Invigilator
     * @example
     * // Get one Invigilator
     * const invigilator = await prisma.invigilator.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvigilatorFindFirstArgs>(args?: SelectSubset<T, InvigilatorFindFirstArgs<ExtArgs>>): Prisma__InvigilatorClient<$Result.GetResult<Prisma.$InvigilatorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invigilator that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvigilatorFindFirstOrThrowArgs} args - Arguments to find a Invigilator
     * @example
     * // Get one Invigilator
     * const invigilator = await prisma.invigilator.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvigilatorFindFirstOrThrowArgs>(args?: SelectSubset<T, InvigilatorFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvigilatorClient<$Result.GetResult<Prisma.$InvigilatorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invigilators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvigilatorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invigilators
     * const invigilators = await prisma.invigilator.findMany()
     * 
     * // Get first 10 Invigilators
     * const invigilators = await prisma.invigilator.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invigilatorWithIdOnly = await prisma.invigilator.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvigilatorFindManyArgs>(args?: SelectSubset<T, InvigilatorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvigilatorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invigilator.
     * @param {InvigilatorCreateArgs} args - Arguments to create a Invigilator.
     * @example
     * // Create one Invigilator
     * const Invigilator = await prisma.invigilator.create({
     *   data: {
     *     // ... data to create a Invigilator
     *   }
     * })
     * 
     */
    create<T extends InvigilatorCreateArgs>(args: SelectSubset<T, InvigilatorCreateArgs<ExtArgs>>): Prisma__InvigilatorClient<$Result.GetResult<Prisma.$InvigilatorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invigilators.
     * @param {InvigilatorCreateManyArgs} args - Arguments to create many Invigilators.
     * @example
     * // Create many Invigilators
     * const invigilator = await prisma.invigilator.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvigilatorCreateManyArgs>(args?: SelectSubset<T, InvigilatorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invigilators and returns the data saved in the database.
     * @param {InvigilatorCreateManyAndReturnArgs} args - Arguments to create many Invigilators.
     * @example
     * // Create many Invigilators
     * const invigilator = await prisma.invigilator.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invigilators and only return the `id`
     * const invigilatorWithIdOnly = await prisma.invigilator.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvigilatorCreateManyAndReturnArgs>(args?: SelectSubset<T, InvigilatorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvigilatorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invigilator.
     * @param {InvigilatorDeleteArgs} args - Arguments to delete one Invigilator.
     * @example
     * // Delete one Invigilator
     * const Invigilator = await prisma.invigilator.delete({
     *   where: {
     *     // ... filter to delete one Invigilator
     *   }
     * })
     * 
     */
    delete<T extends InvigilatorDeleteArgs>(args: SelectSubset<T, InvigilatorDeleteArgs<ExtArgs>>): Prisma__InvigilatorClient<$Result.GetResult<Prisma.$InvigilatorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invigilator.
     * @param {InvigilatorUpdateArgs} args - Arguments to update one Invigilator.
     * @example
     * // Update one Invigilator
     * const invigilator = await prisma.invigilator.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvigilatorUpdateArgs>(args: SelectSubset<T, InvigilatorUpdateArgs<ExtArgs>>): Prisma__InvigilatorClient<$Result.GetResult<Prisma.$InvigilatorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invigilators.
     * @param {InvigilatorDeleteManyArgs} args - Arguments to filter Invigilators to delete.
     * @example
     * // Delete a few Invigilators
     * const { count } = await prisma.invigilator.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvigilatorDeleteManyArgs>(args?: SelectSubset<T, InvigilatorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invigilators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvigilatorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invigilators
     * const invigilator = await prisma.invigilator.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvigilatorUpdateManyArgs>(args: SelectSubset<T, InvigilatorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invigilators and returns the data updated in the database.
     * @param {InvigilatorUpdateManyAndReturnArgs} args - Arguments to update many Invigilators.
     * @example
     * // Update many Invigilators
     * const invigilator = await prisma.invigilator.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invigilators and only return the `id`
     * const invigilatorWithIdOnly = await prisma.invigilator.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InvigilatorUpdateManyAndReturnArgs>(args: SelectSubset<T, InvigilatorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvigilatorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invigilator.
     * @param {InvigilatorUpsertArgs} args - Arguments to update or create a Invigilator.
     * @example
     * // Update or create a Invigilator
     * const invigilator = await prisma.invigilator.upsert({
     *   create: {
     *     // ... data to create a Invigilator
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invigilator we want to update
     *   }
     * })
     */
    upsert<T extends InvigilatorUpsertArgs>(args: SelectSubset<T, InvigilatorUpsertArgs<ExtArgs>>): Prisma__InvigilatorClient<$Result.GetResult<Prisma.$InvigilatorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invigilators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvigilatorCountArgs} args - Arguments to filter Invigilators to count.
     * @example
     * // Count the number of Invigilators
     * const count = await prisma.invigilator.count({
     *   where: {
     *     // ... the filter for the Invigilators we want to count
     *   }
     * })
    **/
    count<T extends InvigilatorCountArgs>(
      args?: Subset<T, InvigilatorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvigilatorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invigilator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvigilatorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvigilatorAggregateArgs>(args: Subset<T, InvigilatorAggregateArgs>): Prisma.PrismaPromise<GetInvigilatorAggregateType<T>>

    /**
     * Group by Invigilator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvigilatorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InvigilatorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvigilatorGroupByArgs['orderBy'] }
        : { orderBy?: InvigilatorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InvigilatorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvigilatorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invigilator model
   */
  readonly fields: InvigilatorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invigilator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvigilatorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assignedExams<T extends Invigilator$assignedExamsArgs<ExtArgs> = {}>(args?: Subset<T, Invigilator$assignedExamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    department<T extends DepartmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepartmentDefaultArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Invigilator model
   */
  interface InvigilatorFieldRefs {
    readonly id: FieldRef<"Invigilator", 'String'>
    readonly invigilatorNumber: FieldRef<"Invigilator", 'String'>
    readonly title: FieldRef<"Invigilator", 'String'>
    readonly firstName: FieldRef<"Invigilator", 'String'>
    readonly otherNames: FieldRef<"Invigilator", 'String'>
    readonly lastName: FieldRef<"Invigilator", 'String'>
    readonly picture: FieldRef<"Invigilator", 'String'>
    readonly departmentId: FieldRef<"Invigilator", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Invigilator findUnique
   */
  export type InvigilatorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invigilator
     */
    select?: InvigilatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invigilator
     */
    omit?: InvigilatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvigilatorInclude<ExtArgs> | null
    /**
     * Filter, which Invigilator to fetch.
     */
    where: InvigilatorWhereUniqueInput
  }

  /**
   * Invigilator findUniqueOrThrow
   */
  export type InvigilatorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invigilator
     */
    select?: InvigilatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invigilator
     */
    omit?: InvigilatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvigilatorInclude<ExtArgs> | null
    /**
     * Filter, which Invigilator to fetch.
     */
    where: InvigilatorWhereUniqueInput
  }

  /**
   * Invigilator findFirst
   */
  export type InvigilatorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invigilator
     */
    select?: InvigilatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invigilator
     */
    omit?: InvigilatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvigilatorInclude<ExtArgs> | null
    /**
     * Filter, which Invigilator to fetch.
     */
    where?: InvigilatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invigilators to fetch.
     */
    orderBy?: InvigilatorOrderByWithRelationInput | InvigilatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invigilators.
     */
    cursor?: InvigilatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invigilators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invigilators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invigilators.
     */
    distinct?: InvigilatorScalarFieldEnum | InvigilatorScalarFieldEnum[]
  }

  /**
   * Invigilator findFirstOrThrow
   */
  export type InvigilatorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invigilator
     */
    select?: InvigilatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invigilator
     */
    omit?: InvigilatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvigilatorInclude<ExtArgs> | null
    /**
     * Filter, which Invigilator to fetch.
     */
    where?: InvigilatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invigilators to fetch.
     */
    orderBy?: InvigilatorOrderByWithRelationInput | InvigilatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invigilators.
     */
    cursor?: InvigilatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invigilators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invigilators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invigilators.
     */
    distinct?: InvigilatorScalarFieldEnum | InvigilatorScalarFieldEnum[]
  }

  /**
   * Invigilator findMany
   */
  export type InvigilatorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invigilator
     */
    select?: InvigilatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invigilator
     */
    omit?: InvigilatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvigilatorInclude<ExtArgs> | null
    /**
     * Filter, which Invigilators to fetch.
     */
    where?: InvigilatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invigilators to fetch.
     */
    orderBy?: InvigilatorOrderByWithRelationInput | InvigilatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invigilators.
     */
    cursor?: InvigilatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invigilators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invigilators.
     */
    skip?: number
    distinct?: InvigilatorScalarFieldEnum | InvigilatorScalarFieldEnum[]
  }

  /**
   * Invigilator create
   */
  export type InvigilatorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invigilator
     */
    select?: InvigilatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invigilator
     */
    omit?: InvigilatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvigilatorInclude<ExtArgs> | null
    /**
     * The data needed to create a Invigilator.
     */
    data: XOR<InvigilatorCreateInput, InvigilatorUncheckedCreateInput>
  }

  /**
   * Invigilator createMany
   */
  export type InvigilatorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invigilators.
     */
    data: InvigilatorCreateManyInput | InvigilatorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invigilator createManyAndReturn
   */
  export type InvigilatorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invigilator
     */
    select?: InvigilatorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invigilator
     */
    omit?: InvigilatorOmit<ExtArgs> | null
    /**
     * The data used to create many Invigilators.
     */
    data: InvigilatorCreateManyInput | InvigilatorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvigilatorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invigilator update
   */
  export type InvigilatorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invigilator
     */
    select?: InvigilatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invigilator
     */
    omit?: InvigilatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvigilatorInclude<ExtArgs> | null
    /**
     * The data needed to update a Invigilator.
     */
    data: XOR<InvigilatorUpdateInput, InvigilatorUncheckedUpdateInput>
    /**
     * Choose, which Invigilator to update.
     */
    where: InvigilatorWhereUniqueInput
  }

  /**
   * Invigilator updateMany
   */
  export type InvigilatorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invigilators.
     */
    data: XOR<InvigilatorUpdateManyMutationInput, InvigilatorUncheckedUpdateManyInput>
    /**
     * Filter which Invigilators to update
     */
    where?: InvigilatorWhereInput
    /**
     * Limit how many Invigilators to update.
     */
    limit?: number
  }

  /**
   * Invigilator updateManyAndReturn
   */
  export type InvigilatorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invigilator
     */
    select?: InvigilatorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invigilator
     */
    omit?: InvigilatorOmit<ExtArgs> | null
    /**
     * The data used to update Invigilators.
     */
    data: XOR<InvigilatorUpdateManyMutationInput, InvigilatorUncheckedUpdateManyInput>
    /**
     * Filter which Invigilators to update
     */
    where?: InvigilatorWhereInput
    /**
     * Limit how many Invigilators to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvigilatorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invigilator upsert
   */
  export type InvigilatorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invigilator
     */
    select?: InvigilatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invigilator
     */
    omit?: InvigilatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvigilatorInclude<ExtArgs> | null
    /**
     * The filter to search for the Invigilator to update in case it exists.
     */
    where: InvigilatorWhereUniqueInput
    /**
     * In case the Invigilator found by the `where` argument doesn't exist, create a new Invigilator with this data.
     */
    create: XOR<InvigilatorCreateInput, InvigilatorUncheckedCreateInput>
    /**
     * In case the Invigilator was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvigilatorUpdateInput, InvigilatorUncheckedUpdateInput>
  }

  /**
   * Invigilator delete
   */
  export type InvigilatorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invigilator
     */
    select?: InvigilatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invigilator
     */
    omit?: InvigilatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvigilatorInclude<ExtArgs> | null
    /**
     * Filter which Invigilator to delete.
     */
    where: InvigilatorWhereUniqueInput
  }

  /**
   * Invigilator deleteMany
   */
  export type InvigilatorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invigilators to delete
     */
    where?: InvigilatorWhereInput
    /**
     * Limit how many Invigilators to delete.
     */
    limit?: number
  }

  /**
   * Invigilator.assignedExams
   */
  export type Invigilator$assignedExamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAssignment
     */
    select?: ExamAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAssignment
     */
    omit?: ExamAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAssignmentInclude<ExtArgs> | null
    where?: ExamAssignmentWhereInput
    orderBy?: ExamAssignmentOrderByWithRelationInput | ExamAssignmentOrderByWithRelationInput[]
    cursor?: ExamAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExamAssignmentScalarFieldEnum | ExamAssignmentScalarFieldEnum[]
  }

  /**
   * Invigilator without action
   */
  export type InvigilatorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invigilator
     */
    select?: InvigilatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invigilator
     */
    omit?: InvigilatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvigilatorInclude<ExtArgs> | null
  }


  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    otherNames: string | null
    lastName: string | null
    picture: string | null
    facultyOrSchoolId: string | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    otherNames: string | null
    lastName: string | null
    picture: string | null
    facultyOrSchoolId: string | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    firstName: number
    otherNames: number
    lastName: number
    picture: number
    facultyOrSchoolId: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    firstName?: true
    otherNames?: true
    lastName?: true
    picture?: true
    facultyOrSchoolId?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    firstName?: true
    otherNames?: true
    lastName?: true
    picture?: true
    facultyOrSchoolId?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    firstName?: true
    otherNames?: true
    lastName?: true
    picture?: true
    facultyOrSchoolId?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    firstName: string
    otherNames: string | null
    lastName: string
    picture: string | null
    facultyOrSchoolId: string
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    otherNames?: boolean
    lastName?: boolean
    picture?: boolean
    facultyOrSchoolId?: boolean
    facultyOrSchool?: boolean | FacultyOrSchoolDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    otherNames?: boolean
    lastName?: boolean
    picture?: boolean
    facultyOrSchoolId?: boolean
    facultyOrSchool?: boolean | FacultyOrSchoolDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    otherNames?: boolean
    lastName?: boolean
    picture?: boolean
    facultyOrSchoolId?: boolean
    facultyOrSchool?: boolean | FacultyOrSchoolDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    firstName?: boolean
    otherNames?: boolean
    lastName?: boolean
    picture?: boolean
    facultyOrSchoolId?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "otherNames" | "lastName" | "picture" | "facultyOrSchoolId", ExtArgs["result"]["admin"]>
  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facultyOrSchool?: boolean | FacultyOrSchoolDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AdminIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facultyOrSchool?: boolean | FacultyOrSchoolDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AdminIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facultyOrSchool?: boolean | FacultyOrSchoolDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      facultyOrSchool: Prisma.$FacultyOrSchoolPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      otherNames: string | null
      lastName: string
      picture: string | null
      facultyOrSchoolId: string
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    facultyOrSchool<T extends FacultyOrSchoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FacultyOrSchoolDefaultArgs<ExtArgs>>): Prisma__FacultyOrSchoolClient<$Result.GetResult<Prisma.$FacultyOrSchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'String'>
    readonly firstName: FieldRef<"Admin", 'String'>
    readonly otherNames: FieldRef<"Admin", 'String'>
    readonly lastName: FieldRef<"Admin", 'String'>
    readonly picture: FieldRef<"Admin", 'String'>
    readonly facultyOrSchoolId: FieldRef<"Admin", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
  }


  /**
   * Model CourseUnit
   */

  export type AggregateCourseUnit = {
    _count: CourseUnitCountAggregateOutputType | null
    _avg: CourseUnitAvgAggregateOutputType | null
    _sum: CourseUnitSumAggregateOutputType | null
    _min: CourseUnitMinAggregateOutputType | null
    _max: CourseUnitMaxAggregateOutputType | null
  }

  export type CourseUnitAvgAggregateOutputType = {
    credits: number | null
    year: number | null
  }

  export type CourseUnitSumAggregateOutputType = {
    credits: number | null
    year: number | null
  }

  export type CourseUnitMinAggregateOutputType = {
    id: string | null
    code: string | null
    title: string | null
    credits: number | null
    year: number | null
    semester: $Enums.Semester | null
    category: $Enums.CourseCategory | null
    courseName: string | null
  }

  export type CourseUnitMaxAggregateOutputType = {
    id: string | null
    code: string | null
    title: string | null
    credits: number | null
    year: number | null
    semester: $Enums.Semester | null
    category: $Enums.CourseCategory | null
    courseName: string | null
  }

  export type CourseUnitCountAggregateOutputType = {
    id: number
    code: number
    title: number
    credits: number
    year: number
    semester: number
    category: number
    courseName: number
    _all: number
  }


  export type CourseUnitAvgAggregateInputType = {
    credits?: true
    year?: true
  }

  export type CourseUnitSumAggregateInputType = {
    credits?: true
    year?: true
  }

  export type CourseUnitMinAggregateInputType = {
    id?: true
    code?: true
    title?: true
    credits?: true
    year?: true
    semester?: true
    category?: true
    courseName?: true
  }

  export type CourseUnitMaxAggregateInputType = {
    id?: true
    code?: true
    title?: true
    credits?: true
    year?: true
    semester?: true
    category?: true
    courseName?: true
  }

  export type CourseUnitCountAggregateInputType = {
    id?: true
    code?: true
    title?: true
    credits?: true
    year?: true
    semester?: true
    category?: true
    courseName?: true
    _all?: true
  }

  export type CourseUnitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseUnit to aggregate.
     */
    where?: CourseUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseUnits to fetch.
     */
    orderBy?: CourseUnitOrderByWithRelationInput | CourseUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CourseUnits
    **/
    _count?: true | CourseUnitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseUnitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseUnitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseUnitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseUnitMaxAggregateInputType
  }

  export type GetCourseUnitAggregateType<T extends CourseUnitAggregateArgs> = {
        [P in keyof T & keyof AggregateCourseUnit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourseUnit[P]>
      : GetScalarType<T[P], AggregateCourseUnit[P]>
  }




  export type CourseUnitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseUnitWhereInput
    orderBy?: CourseUnitOrderByWithAggregationInput | CourseUnitOrderByWithAggregationInput[]
    by: CourseUnitScalarFieldEnum[] | CourseUnitScalarFieldEnum
    having?: CourseUnitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseUnitCountAggregateInputType | true
    _avg?: CourseUnitAvgAggregateInputType
    _sum?: CourseUnitSumAggregateInputType
    _min?: CourseUnitMinAggregateInputType
    _max?: CourseUnitMaxAggregateInputType
  }

  export type CourseUnitGroupByOutputType = {
    id: string
    code: string
    title: string
    credits: number
    year: number
    semester: $Enums.Semester
    category: $Enums.CourseCategory
    courseName: string
    _count: CourseUnitCountAggregateOutputType | null
    _avg: CourseUnitAvgAggregateOutputType | null
    _sum: CourseUnitSumAggregateOutputType | null
    _min: CourseUnitMinAggregateOutputType | null
    _max: CourseUnitMaxAggregateOutputType | null
  }

  type GetCourseUnitGroupByPayload<T extends CourseUnitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseUnitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseUnitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseUnitGroupByOutputType[P]>
            : GetScalarType<T[P], CourseUnitGroupByOutputType[P]>
        }
      >
    >


  export type CourseUnitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    title?: boolean
    credits?: boolean
    year?: boolean
    semester?: boolean
    category?: boolean
    courseName?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    enrolledBy?: boolean | CourseUnit$enrolledByArgs<ExtArgs>
    exams?: boolean | CourseUnit$examsArgs<ExtArgs>
    _count?: boolean | CourseUnitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseUnit"]>

  export type CourseUnitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    title?: boolean
    credits?: boolean
    year?: boolean
    semester?: boolean
    category?: boolean
    courseName?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseUnit"]>

  export type CourseUnitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    title?: boolean
    credits?: boolean
    year?: boolean
    semester?: boolean
    category?: boolean
    courseName?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseUnit"]>

  export type CourseUnitSelectScalar = {
    id?: boolean
    code?: boolean
    title?: boolean
    credits?: boolean
    year?: boolean
    semester?: boolean
    category?: boolean
    courseName?: boolean
  }

  export type CourseUnitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "title" | "credits" | "year" | "semester" | "category" | "courseName", ExtArgs["result"]["courseUnit"]>
  export type CourseUnitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    enrolledBy?: boolean | CourseUnit$enrolledByArgs<ExtArgs>
    exams?: boolean | CourseUnit$examsArgs<ExtArgs>
    _count?: boolean | CourseUnitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseUnitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type CourseUnitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $CourseUnitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CourseUnit"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      enrolledBy: Prisma.$EnrolledCourseUnitPayload<ExtArgs>[]
      exams: Prisma.$ExamPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      title: string
      credits: number
      year: number
      semester: $Enums.Semester
      category: $Enums.CourseCategory
      courseName: string
    }, ExtArgs["result"]["courseUnit"]>
    composites: {}
  }

  type CourseUnitGetPayload<S extends boolean | null | undefined | CourseUnitDefaultArgs> = $Result.GetResult<Prisma.$CourseUnitPayload, S>

  type CourseUnitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseUnitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseUnitCountAggregateInputType | true
    }

  export interface CourseUnitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CourseUnit'], meta: { name: 'CourseUnit' } }
    /**
     * Find zero or one CourseUnit that matches the filter.
     * @param {CourseUnitFindUniqueArgs} args - Arguments to find a CourseUnit
     * @example
     * // Get one CourseUnit
     * const courseUnit = await prisma.courseUnit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseUnitFindUniqueArgs>(args: SelectSubset<T, CourseUnitFindUniqueArgs<ExtArgs>>): Prisma__CourseUnitClient<$Result.GetResult<Prisma.$CourseUnitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CourseUnit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseUnitFindUniqueOrThrowArgs} args - Arguments to find a CourseUnit
     * @example
     * // Get one CourseUnit
     * const courseUnit = await prisma.courseUnit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseUnitFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseUnitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseUnitClient<$Result.GetResult<Prisma.$CourseUnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseUnit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUnitFindFirstArgs} args - Arguments to find a CourseUnit
     * @example
     * // Get one CourseUnit
     * const courseUnit = await prisma.courseUnit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseUnitFindFirstArgs>(args?: SelectSubset<T, CourseUnitFindFirstArgs<ExtArgs>>): Prisma__CourseUnitClient<$Result.GetResult<Prisma.$CourseUnitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseUnit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUnitFindFirstOrThrowArgs} args - Arguments to find a CourseUnit
     * @example
     * // Get one CourseUnit
     * const courseUnit = await prisma.courseUnit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseUnitFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseUnitFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseUnitClient<$Result.GetResult<Prisma.$CourseUnitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CourseUnits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUnitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CourseUnits
     * const courseUnits = await prisma.courseUnit.findMany()
     * 
     * // Get first 10 CourseUnits
     * const courseUnits = await prisma.courseUnit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseUnitWithIdOnly = await prisma.courseUnit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseUnitFindManyArgs>(args?: SelectSubset<T, CourseUnitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseUnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CourseUnit.
     * @param {CourseUnitCreateArgs} args - Arguments to create a CourseUnit.
     * @example
     * // Create one CourseUnit
     * const CourseUnit = await prisma.courseUnit.create({
     *   data: {
     *     // ... data to create a CourseUnit
     *   }
     * })
     * 
     */
    create<T extends CourseUnitCreateArgs>(args: SelectSubset<T, CourseUnitCreateArgs<ExtArgs>>): Prisma__CourseUnitClient<$Result.GetResult<Prisma.$CourseUnitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CourseUnits.
     * @param {CourseUnitCreateManyArgs} args - Arguments to create many CourseUnits.
     * @example
     * // Create many CourseUnits
     * const courseUnit = await prisma.courseUnit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseUnitCreateManyArgs>(args?: SelectSubset<T, CourseUnitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CourseUnits and returns the data saved in the database.
     * @param {CourseUnitCreateManyAndReturnArgs} args - Arguments to create many CourseUnits.
     * @example
     * // Create many CourseUnits
     * const courseUnit = await prisma.courseUnit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CourseUnits and only return the `id`
     * const courseUnitWithIdOnly = await prisma.courseUnit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseUnitCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseUnitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseUnitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CourseUnit.
     * @param {CourseUnitDeleteArgs} args - Arguments to delete one CourseUnit.
     * @example
     * // Delete one CourseUnit
     * const CourseUnit = await prisma.courseUnit.delete({
     *   where: {
     *     // ... filter to delete one CourseUnit
     *   }
     * })
     * 
     */
    delete<T extends CourseUnitDeleteArgs>(args: SelectSubset<T, CourseUnitDeleteArgs<ExtArgs>>): Prisma__CourseUnitClient<$Result.GetResult<Prisma.$CourseUnitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CourseUnit.
     * @param {CourseUnitUpdateArgs} args - Arguments to update one CourseUnit.
     * @example
     * // Update one CourseUnit
     * const courseUnit = await prisma.courseUnit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseUnitUpdateArgs>(args: SelectSubset<T, CourseUnitUpdateArgs<ExtArgs>>): Prisma__CourseUnitClient<$Result.GetResult<Prisma.$CourseUnitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CourseUnits.
     * @param {CourseUnitDeleteManyArgs} args - Arguments to filter CourseUnits to delete.
     * @example
     * // Delete a few CourseUnits
     * const { count } = await prisma.courseUnit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseUnitDeleteManyArgs>(args?: SelectSubset<T, CourseUnitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseUnits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUnitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CourseUnits
     * const courseUnit = await prisma.courseUnit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseUnitUpdateManyArgs>(args: SelectSubset<T, CourseUnitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseUnits and returns the data updated in the database.
     * @param {CourseUnitUpdateManyAndReturnArgs} args - Arguments to update many CourseUnits.
     * @example
     * // Update many CourseUnits
     * const courseUnit = await prisma.courseUnit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CourseUnits and only return the `id`
     * const courseUnitWithIdOnly = await prisma.courseUnit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CourseUnitUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseUnitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseUnitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CourseUnit.
     * @param {CourseUnitUpsertArgs} args - Arguments to update or create a CourseUnit.
     * @example
     * // Update or create a CourseUnit
     * const courseUnit = await prisma.courseUnit.upsert({
     *   create: {
     *     // ... data to create a CourseUnit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CourseUnit we want to update
     *   }
     * })
     */
    upsert<T extends CourseUnitUpsertArgs>(args: SelectSubset<T, CourseUnitUpsertArgs<ExtArgs>>): Prisma__CourseUnitClient<$Result.GetResult<Prisma.$CourseUnitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CourseUnits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUnitCountArgs} args - Arguments to filter CourseUnits to count.
     * @example
     * // Count the number of CourseUnits
     * const count = await prisma.courseUnit.count({
     *   where: {
     *     // ... the filter for the CourseUnits we want to count
     *   }
     * })
    **/
    count<T extends CourseUnitCountArgs>(
      args?: Subset<T, CourseUnitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseUnitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CourseUnit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUnitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseUnitAggregateArgs>(args: Subset<T, CourseUnitAggregateArgs>): Prisma.PrismaPromise<GetCourseUnitAggregateType<T>>

    /**
     * Group by CourseUnit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUnitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourseUnitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseUnitGroupByArgs['orderBy'] }
        : { orderBy?: CourseUnitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourseUnitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseUnitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CourseUnit model
   */
  readonly fields: CourseUnitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CourseUnit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseUnitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    enrolledBy<T extends CourseUnit$enrolledByArgs<ExtArgs> = {}>(args?: Subset<T, CourseUnit$enrolledByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrolledCourseUnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    exams<T extends CourseUnit$examsArgs<ExtArgs> = {}>(args?: Subset<T, CourseUnit$examsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CourseUnit model
   */
  interface CourseUnitFieldRefs {
    readonly id: FieldRef<"CourseUnit", 'String'>
    readonly code: FieldRef<"CourseUnit", 'String'>
    readonly title: FieldRef<"CourseUnit", 'String'>
    readonly credits: FieldRef<"CourseUnit", 'Int'>
    readonly year: FieldRef<"CourseUnit", 'Int'>
    readonly semester: FieldRef<"CourseUnit", 'Semester'>
    readonly category: FieldRef<"CourseUnit", 'CourseCategory'>
    readonly courseName: FieldRef<"CourseUnit", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CourseUnit findUnique
   */
  export type CourseUnitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseUnit
     */
    select?: CourseUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseUnit
     */
    omit?: CourseUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseUnitInclude<ExtArgs> | null
    /**
     * Filter, which CourseUnit to fetch.
     */
    where: CourseUnitWhereUniqueInput
  }

  /**
   * CourseUnit findUniqueOrThrow
   */
  export type CourseUnitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseUnit
     */
    select?: CourseUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseUnit
     */
    omit?: CourseUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseUnitInclude<ExtArgs> | null
    /**
     * Filter, which CourseUnit to fetch.
     */
    where: CourseUnitWhereUniqueInput
  }

  /**
   * CourseUnit findFirst
   */
  export type CourseUnitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseUnit
     */
    select?: CourseUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseUnit
     */
    omit?: CourseUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseUnitInclude<ExtArgs> | null
    /**
     * Filter, which CourseUnit to fetch.
     */
    where?: CourseUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseUnits to fetch.
     */
    orderBy?: CourseUnitOrderByWithRelationInput | CourseUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseUnits.
     */
    cursor?: CourseUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseUnits.
     */
    distinct?: CourseUnitScalarFieldEnum | CourseUnitScalarFieldEnum[]
  }

  /**
   * CourseUnit findFirstOrThrow
   */
  export type CourseUnitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseUnit
     */
    select?: CourseUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseUnit
     */
    omit?: CourseUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseUnitInclude<ExtArgs> | null
    /**
     * Filter, which CourseUnit to fetch.
     */
    where?: CourseUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseUnits to fetch.
     */
    orderBy?: CourseUnitOrderByWithRelationInput | CourseUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseUnits.
     */
    cursor?: CourseUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseUnits.
     */
    distinct?: CourseUnitScalarFieldEnum | CourseUnitScalarFieldEnum[]
  }

  /**
   * CourseUnit findMany
   */
  export type CourseUnitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseUnit
     */
    select?: CourseUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseUnit
     */
    omit?: CourseUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseUnitInclude<ExtArgs> | null
    /**
     * Filter, which CourseUnits to fetch.
     */
    where?: CourseUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseUnits to fetch.
     */
    orderBy?: CourseUnitOrderByWithRelationInput | CourseUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CourseUnits.
     */
    cursor?: CourseUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseUnits.
     */
    skip?: number
    distinct?: CourseUnitScalarFieldEnum | CourseUnitScalarFieldEnum[]
  }

  /**
   * CourseUnit create
   */
  export type CourseUnitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseUnit
     */
    select?: CourseUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseUnit
     */
    omit?: CourseUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseUnitInclude<ExtArgs> | null
    /**
     * The data needed to create a CourseUnit.
     */
    data: XOR<CourseUnitCreateInput, CourseUnitUncheckedCreateInput>
  }

  /**
   * CourseUnit createMany
   */
  export type CourseUnitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CourseUnits.
     */
    data: CourseUnitCreateManyInput | CourseUnitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CourseUnit createManyAndReturn
   */
  export type CourseUnitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseUnit
     */
    select?: CourseUnitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CourseUnit
     */
    omit?: CourseUnitOmit<ExtArgs> | null
    /**
     * The data used to create many CourseUnits.
     */
    data: CourseUnitCreateManyInput | CourseUnitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseUnitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CourseUnit update
   */
  export type CourseUnitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseUnit
     */
    select?: CourseUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseUnit
     */
    omit?: CourseUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseUnitInclude<ExtArgs> | null
    /**
     * The data needed to update a CourseUnit.
     */
    data: XOR<CourseUnitUpdateInput, CourseUnitUncheckedUpdateInput>
    /**
     * Choose, which CourseUnit to update.
     */
    where: CourseUnitWhereUniqueInput
  }

  /**
   * CourseUnit updateMany
   */
  export type CourseUnitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CourseUnits.
     */
    data: XOR<CourseUnitUpdateManyMutationInput, CourseUnitUncheckedUpdateManyInput>
    /**
     * Filter which CourseUnits to update
     */
    where?: CourseUnitWhereInput
    /**
     * Limit how many CourseUnits to update.
     */
    limit?: number
  }

  /**
   * CourseUnit updateManyAndReturn
   */
  export type CourseUnitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseUnit
     */
    select?: CourseUnitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CourseUnit
     */
    omit?: CourseUnitOmit<ExtArgs> | null
    /**
     * The data used to update CourseUnits.
     */
    data: XOR<CourseUnitUpdateManyMutationInput, CourseUnitUncheckedUpdateManyInput>
    /**
     * Filter which CourseUnits to update
     */
    where?: CourseUnitWhereInput
    /**
     * Limit how many CourseUnits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseUnitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CourseUnit upsert
   */
  export type CourseUnitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseUnit
     */
    select?: CourseUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseUnit
     */
    omit?: CourseUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseUnitInclude<ExtArgs> | null
    /**
     * The filter to search for the CourseUnit to update in case it exists.
     */
    where: CourseUnitWhereUniqueInput
    /**
     * In case the CourseUnit found by the `where` argument doesn't exist, create a new CourseUnit with this data.
     */
    create: XOR<CourseUnitCreateInput, CourseUnitUncheckedCreateInput>
    /**
     * In case the CourseUnit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUnitUpdateInput, CourseUnitUncheckedUpdateInput>
  }

  /**
   * CourseUnit delete
   */
  export type CourseUnitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseUnit
     */
    select?: CourseUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseUnit
     */
    omit?: CourseUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseUnitInclude<ExtArgs> | null
    /**
     * Filter which CourseUnit to delete.
     */
    where: CourseUnitWhereUniqueInput
  }

  /**
   * CourseUnit deleteMany
   */
  export type CourseUnitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseUnits to delete
     */
    where?: CourseUnitWhereInput
    /**
     * Limit how many CourseUnits to delete.
     */
    limit?: number
  }

  /**
   * CourseUnit.enrolledBy
   */
  export type CourseUnit$enrolledByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledCourseUnit
     */
    select?: EnrolledCourseUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnrolledCourseUnit
     */
    omit?: EnrolledCourseUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolledCourseUnitInclude<ExtArgs> | null
    where?: EnrolledCourseUnitWhereInput
    orderBy?: EnrolledCourseUnitOrderByWithRelationInput | EnrolledCourseUnitOrderByWithRelationInput[]
    cursor?: EnrolledCourseUnitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrolledCourseUnitScalarFieldEnum | EnrolledCourseUnitScalarFieldEnum[]
  }

  /**
   * CourseUnit.exams
   */
  export type CourseUnit$examsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    where?: ExamWhereInput
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    cursor?: ExamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }

  /**
   * CourseUnit without action
   */
  export type CourseUnitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseUnit
     */
    select?: CourseUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseUnit
     */
    omit?: CourseUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseUnitInclude<ExtArgs> | null
  }


  /**
   * Model EnrolledCourseUnit
   */

  export type AggregateEnrolledCourseUnit = {
    _count: EnrolledCourseUnitCountAggregateOutputType | null
    _avg: EnrolledCourseUnitAvgAggregateOutputType | null
    _sum: EnrolledCourseUnitSumAggregateOutputType | null
    _min: EnrolledCourseUnitMinAggregateOutputType | null
    _max: EnrolledCourseUnitMaxAggregateOutputType | null
  }

  export type EnrolledCourseUnitAvgAggregateOutputType = {
    attempt: number | null
    year: number | null
  }

  export type EnrolledCourseUnitSumAggregateOutputType = {
    attempt: number | null
    year: number | null
  }

  export type EnrolledCourseUnitMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    courseUnitId: string | null
    attempt: number | null
    year: number | null
    semester: $Enums.Semester | null
    isInvigilatorApproved: boolean | null
    invigilatorApprovedAt: Date | null
    approvedBy: string | null
  }

  export type EnrolledCourseUnitMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    courseUnitId: string | null
    attempt: number | null
    year: number | null
    semester: $Enums.Semester | null
    isInvigilatorApproved: boolean | null
    invigilatorApprovedAt: Date | null
    approvedBy: string | null
  }

  export type EnrolledCourseUnitCountAggregateOutputType = {
    id: number
    studentId: number
    courseUnitId: number
    attempt: number
    year: number
    semester: number
    isInvigilatorApproved: number
    invigilatorApprovedAt: number
    approvedBy: number
    _all: number
  }


  export type EnrolledCourseUnitAvgAggregateInputType = {
    attempt?: true
    year?: true
  }

  export type EnrolledCourseUnitSumAggregateInputType = {
    attempt?: true
    year?: true
  }

  export type EnrolledCourseUnitMinAggregateInputType = {
    id?: true
    studentId?: true
    courseUnitId?: true
    attempt?: true
    year?: true
    semester?: true
    isInvigilatorApproved?: true
    invigilatorApprovedAt?: true
    approvedBy?: true
  }

  export type EnrolledCourseUnitMaxAggregateInputType = {
    id?: true
    studentId?: true
    courseUnitId?: true
    attempt?: true
    year?: true
    semester?: true
    isInvigilatorApproved?: true
    invigilatorApprovedAt?: true
    approvedBy?: true
  }

  export type EnrolledCourseUnitCountAggregateInputType = {
    id?: true
    studentId?: true
    courseUnitId?: true
    attempt?: true
    year?: true
    semester?: true
    isInvigilatorApproved?: true
    invigilatorApprovedAt?: true
    approvedBy?: true
    _all?: true
  }

  export type EnrolledCourseUnitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EnrolledCourseUnit to aggregate.
     */
    where?: EnrolledCourseUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnrolledCourseUnits to fetch.
     */
    orderBy?: EnrolledCourseUnitOrderByWithRelationInput | EnrolledCourseUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnrolledCourseUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnrolledCourseUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnrolledCourseUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EnrolledCourseUnits
    **/
    _count?: true | EnrolledCourseUnitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnrolledCourseUnitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnrolledCourseUnitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnrolledCourseUnitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnrolledCourseUnitMaxAggregateInputType
  }

  export type GetEnrolledCourseUnitAggregateType<T extends EnrolledCourseUnitAggregateArgs> = {
        [P in keyof T & keyof AggregateEnrolledCourseUnit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnrolledCourseUnit[P]>
      : GetScalarType<T[P], AggregateEnrolledCourseUnit[P]>
  }




  export type EnrolledCourseUnitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrolledCourseUnitWhereInput
    orderBy?: EnrolledCourseUnitOrderByWithAggregationInput | EnrolledCourseUnitOrderByWithAggregationInput[]
    by: EnrolledCourseUnitScalarFieldEnum[] | EnrolledCourseUnitScalarFieldEnum
    having?: EnrolledCourseUnitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnrolledCourseUnitCountAggregateInputType | true
    _avg?: EnrolledCourseUnitAvgAggregateInputType
    _sum?: EnrolledCourseUnitSumAggregateInputType
    _min?: EnrolledCourseUnitMinAggregateInputType
    _max?: EnrolledCourseUnitMaxAggregateInputType
  }

  export type EnrolledCourseUnitGroupByOutputType = {
    id: string
    studentId: string
    courseUnitId: string
    attempt: number
    year: number
    semester: $Enums.Semester
    isInvigilatorApproved: boolean
    invigilatorApprovedAt: Date | null
    approvedBy: string | null
    _count: EnrolledCourseUnitCountAggregateOutputType | null
    _avg: EnrolledCourseUnitAvgAggregateOutputType | null
    _sum: EnrolledCourseUnitSumAggregateOutputType | null
    _min: EnrolledCourseUnitMinAggregateOutputType | null
    _max: EnrolledCourseUnitMaxAggregateOutputType | null
  }

  type GetEnrolledCourseUnitGroupByPayload<T extends EnrolledCourseUnitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnrolledCourseUnitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnrolledCourseUnitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnrolledCourseUnitGroupByOutputType[P]>
            : GetScalarType<T[P], EnrolledCourseUnitGroupByOutputType[P]>
        }
      >
    >


  export type EnrolledCourseUnitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    courseUnitId?: boolean
    attempt?: boolean
    year?: boolean
    semester?: boolean
    isInvigilatorApproved?: boolean
    invigilatorApprovedAt?: boolean
    approvedBy?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    courseUnit?: boolean | CourseUnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrolledCourseUnit"]>

  export type EnrolledCourseUnitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    courseUnitId?: boolean
    attempt?: boolean
    year?: boolean
    semester?: boolean
    isInvigilatorApproved?: boolean
    invigilatorApprovedAt?: boolean
    approvedBy?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    courseUnit?: boolean | CourseUnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrolledCourseUnit"]>

  export type EnrolledCourseUnitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    courseUnitId?: boolean
    attempt?: boolean
    year?: boolean
    semester?: boolean
    isInvigilatorApproved?: boolean
    invigilatorApprovedAt?: boolean
    approvedBy?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    courseUnit?: boolean | CourseUnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrolledCourseUnit"]>

  export type EnrolledCourseUnitSelectScalar = {
    id?: boolean
    studentId?: boolean
    courseUnitId?: boolean
    attempt?: boolean
    year?: boolean
    semester?: boolean
    isInvigilatorApproved?: boolean
    invigilatorApprovedAt?: boolean
    approvedBy?: boolean
  }

  export type EnrolledCourseUnitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "courseUnitId" | "attempt" | "year" | "semester" | "isInvigilatorApproved" | "invigilatorApprovedAt" | "approvedBy", ExtArgs["result"]["enrolledCourseUnit"]>
  export type EnrolledCourseUnitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    courseUnit?: boolean | CourseUnitDefaultArgs<ExtArgs>
  }
  export type EnrolledCourseUnitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    courseUnit?: boolean | CourseUnitDefaultArgs<ExtArgs>
  }
  export type EnrolledCourseUnitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    courseUnit?: boolean | CourseUnitDefaultArgs<ExtArgs>
  }

  export type $EnrolledCourseUnitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EnrolledCourseUnit"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      courseUnit: Prisma.$CourseUnitPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      courseUnitId: string
      attempt: number
      year: number
      semester: $Enums.Semester
      isInvigilatorApproved: boolean
      invigilatorApprovedAt: Date | null
      approvedBy: string | null
    }, ExtArgs["result"]["enrolledCourseUnit"]>
    composites: {}
  }

  type EnrolledCourseUnitGetPayload<S extends boolean | null | undefined | EnrolledCourseUnitDefaultArgs> = $Result.GetResult<Prisma.$EnrolledCourseUnitPayload, S>

  type EnrolledCourseUnitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnrolledCourseUnitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnrolledCourseUnitCountAggregateInputType | true
    }

  export interface EnrolledCourseUnitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EnrolledCourseUnit'], meta: { name: 'EnrolledCourseUnit' } }
    /**
     * Find zero or one EnrolledCourseUnit that matches the filter.
     * @param {EnrolledCourseUnitFindUniqueArgs} args - Arguments to find a EnrolledCourseUnit
     * @example
     * // Get one EnrolledCourseUnit
     * const enrolledCourseUnit = await prisma.enrolledCourseUnit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnrolledCourseUnitFindUniqueArgs>(args: SelectSubset<T, EnrolledCourseUnitFindUniqueArgs<ExtArgs>>): Prisma__EnrolledCourseUnitClient<$Result.GetResult<Prisma.$EnrolledCourseUnitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EnrolledCourseUnit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnrolledCourseUnitFindUniqueOrThrowArgs} args - Arguments to find a EnrolledCourseUnit
     * @example
     * // Get one EnrolledCourseUnit
     * const enrolledCourseUnit = await prisma.enrolledCourseUnit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnrolledCourseUnitFindUniqueOrThrowArgs>(args: SelectSubset<T, EnrolledCourseUnitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnrolledCourseUnitClient<$Result.GetResult<Prisma.$EnrolledCourseUnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EnrolledCourseUnit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrolledCourseUnitFindFirstArgs} args - Arguments to find a EnrolledCourseUnit
     * @example
     * // Get one EnrolledCourseUnit
     * const enrolledCourseUnit = await prisma.enrolledCourseUnit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnrolledCourseUnitFindFirstArgs>(args?: SelectSubset<T, EnrolledCourseUnitFindFirstArgs<ExtArgs>>): Prisma__EnrolledCourseUnitClient<$Result.GetResult<Prisma.$EnrolledCourseUnitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EnrolledCourseUnit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrolledCourseUnitFindFirstOrThrowArgs} args - Arguments to find a EnrolledCourseUnit
     * @example
     * // Get one EnrolledCourseUnit
     * const enrolledCourseUnit = await prisma.enrolledCourseUnit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnrolledCourseUnitFindFirstOrThrowArgs>(args?: SelectSubset<T, EnrolledCourseUnitFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnrolledCourseUnitClient<$Result.GetResult<Prisma.$EnrolledCourseUnitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EnrolledCourseUnits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrolledCourseUnitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EnrolledCourseUnits
     * const enrolledCourseUnits = await prisma.enrolledCourseUnit.findMany()
     * 
     * // Get first 10 EnrolledCourseUnits
     * const enrolledCourseUnits = await prisma.enrolledCourseUnit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enrolledCourseUnitWithIdOnly = await prisma.enrolledCourseUnit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnrolledCourseUnitFindManyArgs>(args?: SelectSubset<T, EnrolledCourseUnitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrolledCourseUnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EnrolledCourseUnit.
     * @param {EnrolledCourseUnitCreateArgs} args - Arguments to create a EnrolledCourseUnit.
     * @example
     * // Create one EnrolledCourseUnit
     * const EnrolledCourseUnit = await prisma.enrolledCourseUnit.create({
     *   data: {
     *     // ... data to create a EnrolledCourseUnit
     *   }
     * })
     * 
     */
    create<T extends EnrolledCourseUnitCreateArgs>(args: SelectSubset<T, EnrolledCourseUnitCreateArgs<ExtArgs>>): Prisma__EnrolledCourseUnitClient<$Result.GetResult<Prisma.$EnrolledCourseUnitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EnrolledCourseUnits.
     * @param {EnrolledCourseUnitCreateManyArgs} args - Arguments to create many EnrolledCourseUnits.
     * @example
     * // Create many EnrolledCourseUnits
     * const enrolledCourseUnit = await prisma.enrolledCourseUnit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnrolledCourseUnitCreateManyArgs>(args?: SelectSubset<T, EnrolledCourseUnitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EnrolledCourseUnits and returns the data saved in the database.
     * @param {EnrolledCourseUnitCreateManyAndReturnArgs} args - Arguments to create many EnrolledCourseUnits.
     * @example
     * // Create many EnrolledCourseUnits
     * const enrolledCourseUnit = await prisma.enrolledCourseUnit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EnrolledCourseUnits and only return the `id`
     * const enrolledCourseUnitWithIdOnly = await prisma.enrolledCourseUnit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EnrolledCourseUnitCreateManyAndReturnArgs>(args?: SelectSubset<T, EnrolledCourseUnitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrolledCourseUnitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EnrolledCourseUnit.
     * @param {EnrolledCourseUnitDeleteArgs} args - Arguments to delete one EnrolledCourseUnit.
     * @example
     * // Delete one EnrolledCourseUnit
     * const EnrolledCourseUnit = await prisma.enrolledCourseUnit.delete({
     *   where: {
     *     // ... filter to delete one EnrolledCourseUnit
     *   }
     * })
     * 
     */
    delete<T extends EnrolledCourseUnitDeleteArgs>(args: SelectSubset<T, EnrolledCourseUnitDeleteArgs<ExtArgs>>): Prisma__EnrolledCourseUnitClient<$Result.GetResult<Prisma.$EnrolledCourseUnitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EnrolledCourseUnit.
     * @param {EnrolledCourseUnitUpdateArgs} args - Arguments to update one EnrolledCourseUnit.
     * @example
     * // Update one EnrolledCourseUnit
     * const enrolledCourseUnit = await prisma.enrolledCourseUnit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnrolledCourseUnitUpdateArgs>(args: SelectSubset<T, EnrolledCourseUnitUpdateArgs<ExtArgs>>): Prisma__EnrolledCourseUnitClient<$Result.GetResult<Prisma.$EnrolledCourseUnitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EnrolledCourseUnits.
     * @param {EnrolledCourseUnitDeleteManyArgs} args - Arguments to filter EnrolledCourseUnits to delete.
     * @example
     * // Delete a few EnrolledCourseUnits
     * const { count } = await prisma.enrolledCourseUnit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnrolledCourseUnitDeleteManyArgs>(args?: SelectSubset<T, EnrolledCourseUnitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EnrolledCourseUnits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrolledCourseUnitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EnrolledCourseUnits
     * const enrolledCourseUnit = await prisma.enrolledCourseUnit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnrolledCourseUnitUpdateManyArgs>(args: SelectSubset<T, EnrolledCourseUnitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EnrolledCourseUnits and returns the data updated in the database.
     * @param {EnrolledCourseUnitUpdateManyAndReturnArgs} args - Arguments to update many EnrolledCourseUnits.
     * @example
     * // Update many EnrolledCourseUnits
     * const enrolledCourseUnit = await prisma.enrolledCourseUnit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EnrolledCourseUnits and only return the `id`
     * const enrolledCourseUnitWithIdOnly = await prisma.enrolledCourseUnit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EnrolledCourseUnitUpdateManyAndReturnArgs>(args: SelectSubset<T, EnrolledCourseUnitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrolledCourseUnitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EnrolledCourseUnit.
     * @param {EnrolledCourseUnitUpsertArgs} args - Arguments to update or create a EnrolledCourseUnit.
     * @example
     * // Update or create a EnrolledCourseUnit
     * const enrolledCourseUnit = await prisma.enrolledCourseUnit.upsert({
     *   create: {
     *     // ... data to create a EnrolledCourseUnit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EnrolledCourseUnit we want to update
     *   }
     * })
     */
    upsert<T extends EnrolledCourseUnitUpsertArgs>(args: SelectSubset<T, EnrolledCourseUnitUpsertArgs<ExtArgs>>): Prisma__EnrolledCourseUnitClient<$Result.GetResult<Prisma.$EnrolledCourseUnitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EnrolledCourseUnits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrolledCourseUnitCountArgs} args - Arguments to filter EnrolledCourseUnits to count.
     * @example
     * // Count the number of EnrolledCourseUnits
     * const count = await prisma.enrolledCourseUnit.count({
     *   where: {
     *     // ... the filter for the EnrolledCourseUnits we want to count
     *   }
     * })
    **/
    count<T extends EnrolledCourseUnitCountArgs>(
      args?: Subset<T, EnrolledCourseUnitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnrolledCourseUnitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EnrolledCourseUnit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrolledCourseUnitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EnrolledCourseUnitAggregateArgs>(args: Subset<T, EnrolledCourseUnitAggregateArgs>): Prisma.PrismaPromise<GetEnrolledCourseUnitAggregateType<T>>

    /**
     * Group by EnrolledCourseUnit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrolledCourseUnitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EnrolledCourseUnitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnrolledCourseUnitGroupByArgs['orderBy'] }
        : { orderBy?: EnrolledCourseUnitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EnrolledCourseUnitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnrolledCourseUnitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EnrolledCourseUnit model
   */
  readonly fields: EnrolledCourseUnitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EnrolledCourseUnit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnrolledCourseUnitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    courseUnit<T extends CourseUnitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseUnitDefaultArgs<ExtArgs>>): Prisma__CourseUnitClient<$Result.GetResult<Prisma.$CourseUnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EnrolledCourseUnit model
   */
  interface EnrolledCourseUnitFieldRefs {
    readonly id: FieldRef<"EnrolledCourseUnit", 'String'>
    readonly studentId: FieldRef<"EnrolledCourseUnit", 'String'>
    readonly courseUnitId: FieldRef<"EnrolledCourseUnit", 'String'>
    readonly attempt: FieldRef<"EnrolledCourseUnit", 'Int'>
    readonly year: FieldRef<"EnrolledCourseUnit", 'Int'>
    readonly semester: FieldRef<"EnrolledCourseUnit", 'Semester'>
    readonly isInvigilatorApproved: FieldRef<"EnrolledCourseUnit", 'Boolean'>
    readonly invigilatorApprovedAt: FieldRef<"EnrolledCourseUnit", 'DateTime'>
    readonly approvedBy: FieldRef<"EnrolledCourseUnit", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EnrolledCourseUnit findUnique
   */
  export type EnrolledCourseUnitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledCourseUnit
     */
    select?: EnrolledCourseUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnrolledCourseUnit
     */
    omit?: EnrolledCourseUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolledCourseUnitInclude<ExtArgs> | null
    /**
     * Filter, which EnrolledCourseUnit to fetch.
     */
    where: EnrolledCourseUnitWhereUniqueInput
  }

  /**
   * EnrolledCourseUnit findUniqueOrThrow
   */
  export type EnrolledCourseUnitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledCourseUnit
     */
    select?: EnrolledCourseUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnrolledCourseUnit
     */
    omit?: EnrolledCourseUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolledCourseUnitInclude<ExtArgs> | null
    /**
     * Filter, which EnrolledCourseUnit to fetch.
     */
    where: EnrolledCourseUnitWhereUniqueInput
  }

  /**
   * EnrolledCourseUnit findFirst
   */
  export type EnrolledCourseUnitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledCourseUnit
     */
    select?: EnrolledCourseUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnrolledCourseUnit
     */
    omit?: EnrolledCourseUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolledCourseUnitInclude<ExtArgs> | null
    /**
     * Filter, which EnrolledCourseUnit to fetch.
     */
    where?: EnrolledCourseUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnrolledCourseUnits to fetch.
     */
    orderBy?: EnrolledCourseUnitOrderByWithRelationInput | EnrolledCourseUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EnrolledCourseUnits.
     */
    cursor?: EnrolledCourseUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnrolledCourseUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnrolledCourseUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EnrolledCourseUnits.
     */
    distinct?: EnrolledCourseUnitScalarFieldEnum | EnrolledCourseUnitScalarFieldEnum[]
  }

  /**
   * EnrolledCourseUnit findFirstOrThrow
   */
  export type EnrolledCourseUnitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledCourseUnit
     */
    select?: EnrolledCourseUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnrolledCourseUnit
     */
    omit?: EnrolledCourseUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolledCourseUnitInclude<ExtArgs> | null
    /**
     * Filter, which EnrolledCourseUnit to fetch.
     */
    where?: EnrolledCourseUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnrolledCourseUnits to fetch.
     */
    orderBy?: EnrolledCourseUnitOrderByWithRelationInput | EnrolledCourseUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EnrolledCourseUnits.
     */
    cursor?: EnrolledCourseUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnrolledCourseUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnrolledCourseUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EnrolledCourseUnits.
     */
    distinct?: EnrolledCourseUnitScalarFieldEnum | EnrolledCourseUnitScalarFieldEnum[]
  }

  /**
   * EnrolledCourseUnit findMany
   */
  export type EnrolledCourseUnitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledCourseUnit
     */
    select?: EnrolledCourseUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnrolledCourseUnit
     */
    omit?: EnrolledCourseUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolledCourseUnitInclude<ExtArgs> | null
    /**
     * Filter, which EnrolledCourseUnits to fetch.
     */
    where?: EnrolledCourseUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnrolledCourseUnits to fetch.
     */
    orderBy?: EnrolledCourseUnitOrderByWithRelationInput | EnrolledCourseUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EnrolledCourseUnits.
     */
    cursor?: EnrolledCourseUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnrolledCourseUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnrolledCourseUnits.
     */
    skip?: number
    distinct?: EnrolledCourseUnitScalarFieldEnum | EnrolledCourseUnitScalarFieldEnum[]
  }

  /**
   * EnrolledCourseUnit create
   */
  export type EnrolledCourseUnitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledCourseUnit
     */
    select?: EnrolledCourseUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnrolledCourseUnit
     */
    omit?: EnrolledCourseUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolledCourseUnitInclude<ExtArgs> | null
    /**
     * The data needed to create a EnrolledCourseUnit.
     */
    data: XOR<EnrolledCourseUnitCreateInput, EnrolledCourseUnitUncheckedCreateInput>
  }

  /**
   * EnrolledCourseUnit createMany
   */
  export type EnrolledCourseUnitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EnrolledCourseUnits.
     */
    data: EnrolledCourseUnitCreateManyInput | EnrolledCourseUnitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EnrolledCourseUnit createManyAndReturn
   */
  export type EnrolledCourseUnitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledCourseUnit
     */
    select?: EnrolledCourseUnitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EnrolledCourseUnit
     */
    omit?: EnrolledCourseUnitOmit<ExtArgs> | null
    /**
     * The data used to create many EnrolledCourseUnits.
     */
    data: EnrolledCourseUnitCreateManyInput | EnrolledCourseUnitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolledCourseUnitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EnrolledCourseUnit update
   */
  export type EnrolledCourseUnitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledCourseUnit
     */
    select?: EnrolledCourseUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnrolledCourseUnit
     */
    omit?: EnrolledCourseUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolledCourseUnitInclude<ExtArgs> | null
    /**
     * The data needed to update a EnrolledCourseUnit.
     */
    data: XOR<EnrolledCourseUnitUpdateInput, EnrolledCourseUnitUncheckedUpdateInput>
    /**
     * Choose, which EnrolledCourseUnit to update.
     */
    where: EnrolledCourseUnitWhereUniqueInput
  }

  /**
   * EnrolledCourseUnit updateMany
   */
  export type EnrolledCourseUnitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EnrolledCourseUnits.
     */
    data: XOR<EnrolledCourseUnitUpdateManyMutationInput, EnrolledCourseUnitUncheckedUpdateManyInput>
    /**
     * Filter which EnrolledCourseUnits to update
     */
    where?: EnrolledCourseUnitWhereInput
    /**
     * Limit how many EnrolledCourseUnits to update.
     */
    limit?: number
  }

  /**
   * EnrolledCourseUnit updateManyAndReturn
   */
  export type EnrolledCourseUnitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledCourseUnit
     */
    select?: EnrolledCourseUnitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EnrolledCourseUnit
     */
    omit?: EnrolledCourseUnitOmit<ExtArgs> | null
    /**
     * The data used to update EnrolledCourseUnits.
     */
    data: XOR<EnrolledCourseUnitUpdateManyMutationInput, EnrolledCourseUnitUncheckedUpdateManyInput>
    /**
     * Filter which EnrolledCourseUnits to update
     */
    where?: EnrolledCourseUnitWhereInput
    /**
     * Limit how many EnrolledCourseUnits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolledCourseUnitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EnrolledCourseUnit upsert
   */
  export type EnrolledCourseUnitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledCourseUnit
     */
    select?: EnrolledCourseUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnrolledCourseUnit
     */
    omit?: EnrolledCourseUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolledCourseUnitInclude<ExtArgs> | null
    /**
     * The filter to search for the EnrolledCourseUnit to update in case it exists.
     */
    where: EnrolledCourseUnitWhereUniqueInput
    /**
     * In case the EnrolledCourseUnit found by the `where` argument doesn't exist, create a new EnrolledCourseUnit with this data.
     */
    create: XOR<EnrolledCourseUnitCreateInput, EnrolledCourseUnitUncheckedCreateInput>
    /**
     * In case the EnrolledCourseUnit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnrolledCourseUnitUpdateInput, EnrolledCourseUnitUncheckedUpdateInput>
  }

  /**
   * EnrolledCourseUnit delete
   */
  export type EnrolledCourseUnitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledCourseUnit
     */
    select?: EnrolledCourseUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnrolledCourseUnit
     */
    omit?: EnrolledCourseUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolledCourseUnitInclude<ExtArgs> | null
    /**
     * Filter which EnrolledCourseUnit to delete.
     */
    where: EnrolledCourseUnitWhereUniqueInput
  }

  /**
   * EnrolledCourseUnit deleteMany
   */
  export type EnrolledCourseUnitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EnrolledCourseUnits to delete
     */
    where?: EnrolledCourseUnitWhereInput
    /**
     * Limit how many EnrolledCourseUnits to delete.
     */
    limit?: number
  }

  /**
   * EnrolledCourseUnit without action
   */
  export type EnrolledCourseUnitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledCourseUnit
     */
    select?: EnrolledCourseUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnrolledCourseUnit
     */
    omit?: EnrolledCourseUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolledCourseUnitInclude<ExtArgs> | null
  }


  /**
   * Model Exam
   */

  export type AggregateExam = {
    _count: ExamCountAggregateOutputType | null
    _min: ExamMinAggregateOutputType | null
    _max: ExamMaxAggregateOutputType | null
  }

  export type ExamMinAggregateOutputType = {
    id: string | null
    courseUnitId: string | null
    examDate: Date | null
    startTime: Date | null
    endTime: Date | null
    venue: string | null
    isApproved: boolean | null
    approvedAt: Date | null
  }

  export type ExamMaxAggregateOutputType = {
    id: string | null
    courseUnitId: string | null
    examDate: Date | null
    startTime: Date | null
    endTime: Date | null
    venue: string | null
    isApproved: boolean | null
    approvedAt: Date | null
  }

  export type ExamCountAggregateOutputType = {
    id: number
    courseUnitId: number
    examDate: number
    startTime: number
    endTime: number
    venue: number
    isApproved: number
    approvedAt: number
    _all: number
  }


  export type ExamMinAggregateInputType = {
    id?: true
    courseUnitId?: true
    examDate?: true
    startTime?: true
    endTime?: true
    venue?: true
    isApproved?: true
    approvedAt?: true
  }

  export type ExamMaxAggregateInputType = {
    id?: true
    courseUnitId?: true
    examDate?: true
    startTime?: true
    endTime?: true
    venue?: true
    isApproved?: true
    approvedAt?: true
  }

  export type ExamCountAggregateInputType = {
    id?: true
    courseUnitId?: true
    examDate?: true
    startTime?: true
    endTime?: true
    venue?: true
    isApproved?: true
    approvedAt?: true
    _all?: true
  }

  export type ExamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exam to aggregate.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Exams
    **/
    _count?: true | ExamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExamMaxAggregateInputType
  }

  export type GetExamAggregateType<T extends ExamAggregateArgs> = {
        [P in keyof T & keyof AggregateExam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExam[P]>
      : GetScalarType<T[P], AggregateExam[P]>
  }




  export type ExamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamWhereInput
    orderBy?: ExamOrderByWithAggregationInput | ExamOrderByWithAggregationInput[]
    by: ExamScalarFieldEnum[] | ExamScalarFieldEnum
    having?: ExamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExamCountAggregateInputType | true
    _min?: ExamMinAggregateInputType
    _max?: ExamMaxAggregateInputType
  }

  export type ExamGroupByOutputType = {
    id: string
    courseUnitId: string
    examDate: Date
    startTime: Date
    endTime: Date
    venue: string
    isApproved: boolean
    approvedAt: Date | null
    _count: ExamCountAggregateOutputType | null
    _min: ExamMinAggregateOutputType | null
    _max: ExamMaxAggregateOutputType | null
  }

  type GetExamGroupByPayload<T extends ExamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExamGroupByOutputType[P]>
            : GetScalarType<T[P], ExamGroupByOutputType[P]>
        }
      >
    >


  export type ExamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseUnitId?: boolean
    examDate?: boolean
    startTime?: boolean
    endTime?: boolean
    venue?: boolean
    isApproved?: boolean
    approvedAt?: boolean
    courseUnit?: boolean | CourseUnitDefaultArgs<ExtArgs>
    invigilators?: boolean | Exam$invigilatorsArgs<ExtArgs>
    _count?: boolean | ExamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exam"]>

  export type ExamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseUnitId?: boolean
    examDate?: boolean
    startTime?: boolean
    endTime?: boolean
    venue?: boolean
    isApproved?: boolean
    approvedAt?: boolean
    courseUnit?: boolean | CourseUnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exam"]>

  export type ExamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseUnitId?: boolean
    examDate?: boolean
    startTime?: boolean
    endTime?: boolean
    venue?: boolean
    isApproved?: boolean
    approvedAt?: boolean
    courseUnit?: boolean | CourseUnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exam"]>

  export type ExamSelectScalar = {
    id?: boolean
    courseUnitId?: boolean
    examDate?: boolean
    startTime?: boolean
    endTime?: boolean
    venue?: boolean
    isApproved?: boolean
    approvedAt?: boolean
  }

  export type ExamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "courseUnitId" | "examDate" | "startTime" | "endTime" | "venue" | "isApproved" | "approvedAt", ExtArgs["result"]["exam"]>
  export type ExamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courseUnit?: boolean | CourseUnitDefaultArgs<ExtArgs>
    invigilators?: boolean | Exam$invigilatorsArgs<ExtArgs>
    _count?: boolean | ExamCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courseUnit?: boolean | CourseUnitDefaultArgs<ExtArgs>
  }
  export type ExamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courseUnit?: boolean | CourseUnitDefaultArgs<ExtArgs>
  }

  export type $ExamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Exam"
    objects: {
      courseUnit: Prisma.$CourseUnitPayload<ExtArgs>
      invigilators: Prisma.$ExamAssignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      courseUnitId: string
      examDate: Date
      startTime: Date
      endTime: Date
      venue: string
      isApproved: boolean
      approvedAt: Date | null
    }, ExtArgs["result"]["exam"]>
    composites: {}
  }

  type ExamGetPayload<S extends boolean | null | undefined | ExamDefaultArgs> = $Result.GetResult<Prisma.$ExamPayload, S>

  type ExamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExamCountAggregateInputType | true
    }

  export interface ExamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Exam'], meta: { name: 'Exam' } }
    /**
     * Find zero or one Exam that matches the filter.
     * @param {ExamFindUniqueArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExamFindUniqueArgs>(args: SelectSubset<T, ExamFindUniqueArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Exam that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExamFindUniqueOrThrowArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExamFindUniqueOrThrowArgs>(args: SelectSubset<T, ExamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exam that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamFindFirstArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExamFindFirstArgs>(args?: SelectSubset<T, ExamFindFirstArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exam that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamFindFirstOrThrowArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExamFindFirstOrThrowArgs>(args?: SelectSubset<T, ExamFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Exams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exams
     * const exams = await prisma.exam.findMany()
     * 
     * // Get first 10 Exams
     * const exams = await prisma.exam.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const examWithIdOnly = await prisma.exam.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExamFindManyArgs>(args?: SelectSubset<T, ExamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Exam.
     * @param {ExamCreateArgs} args - Arguments to create a Exam.
     * @example
     * // Create one Exam
     * const Exam = await prisma.exam.create({
     *   data: {
     *     // ... data to create a Exam
     *   }
     * })
     * 
     */
    create<T extends ExamCreateArgs>(args: SelectSubset<T, ExamCreateArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Exams.
     * @param {ExamCreateManyArgs} args - Arguments to create many Exams.
     * @example
     * // Create many Exams
     * const exam = await prisma.exam.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExamCreateManyArgs>(args?: SelectSubset<T, ExamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Exams and returns the data saved in the database.
     * @param {ExamCreateManyAndReturnArgs} args - Arguments to create many Exams.
     * @example
     * // Create many Exams
     * const exam = await prisma.exam.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Exams and only return the `id`
     * const examWithIdOnly = await prisma.exam.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExamCreateManyAndReturnArgs>(args?: SelectSubset<T, ExamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Exam.
     * @param {ExamDeleteArgs} args - Arguments to delete one Exam.
     * @example
     * // Delete one Exam
     * const Exam = await prisma.exam.delete({
     *   where: {
     *     // ... filter to delete one Exam
     *   }
     * })
     * 
     */
    delete<T extends ExamDeleteArgs>(args: SelectSubset<T, ExamDeleteArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Exam.
     * @param {ExamUpdateArgs} args - Arguments to update one Exam.
     * @example
     * // Update one Exam
     * const exam = await prisma.exam.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExamUpdateArgs>(args: SelectSubset<T, ExamUpdateArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Exams.
     * @param {ExamDeleteManyArgs} args - Arguments to filter Exams to delete.
     * @example
     * // Delete a few Exams
     * const { count } = await prisma.exam.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExamDeleteManyArgs>(args?: SelectSubset<T, ExamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exams
     * const exam = await prisma.exam.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExamUpdateManyArgs>(args: SelectSubset<T, ExamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exams and returns the data updated in the database.
     * @param {ExamUpdateManyAndReturnArgs} args - Arguments to update many Exams.
     * @example
     * // Update many Exams
     * const exam = await prisma.exam.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Exams and only return the `id`
     * const examWithIdOnly = await prisma.exam.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExamUpdateManyAndReturnArgs>(args: SelectSubset<T, ExamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Exam.
     * @param {ExamUpsertArgs} args - Arguments to update or create a Exam.
     * @example
     * // Update or create a Exam
     * const exam = await prisma.exam.upsert({
     *   create: {
     *     // ... data to create a Exam
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exam we want to update
     *   }
     * })
     */
    upsert<T extends ExamUpsertArgs>(args: SelectSubset<T, ExamUpsertArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Exams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamCountArgs} args - Arguments to filter Exams to count.
     * @example
     * // Count the number of Exams
     * const count = await prisma.exam.count({
     *   where: {
     *     // ... the filter for the Exams we want to count
     *   }
     * })
    **/
    count<T extends ExamCountArgs>(
      args?: Subset<T, ExamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExamAggregateArgs>(args: Subset<T, ExamAggregateArgs>): Prisma.PrismaPromise<GetExamAggregateType<T>>

    /**
     * Group by Exam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExamGroupByArgs['orderBy'] }
        : { orderBy?: ExamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Exam model
   */
  readonly fields: ExamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Exam.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    courseUnit<T extends CourseUnitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseUnitDefaultArgs<ExtArgs>>): Prisma__CourseUnitClient<$Result.GetResult<Prisma.$CourseUnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    invigilators<T extends Exam$invigilatorsArgs<ExtArgs> = {}>(args?: Subset<T, Exam$invigilatorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Exam model
   */
  interface ExamFieldRefs {
    readonly id: FieldRef<"Exam", 'String'>
    readonly courseUnitId: FieldRef<"Exam", 'String'>
    readonly examDate: FieldRef<"Exam", 'DateTime'>
    readonly startTime: FieldRef<"Exam", 'DateTime'>
    readonly endTime: FieldRef<"Exam", 'DateTime'>
    readonly venue: FieldRef<"Exam", 'String'>
    readonly isApproved: FieldRef<"Exam", 'Boolean'>
    readonly approvedAt: FieldRef<"Exam", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Exam findUnique
   */
  export type ExamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where: ExamWhereUniqueInput
  }

  /**
   * Exam findUniqueOrThrow
   */
  export type ExamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where: ExamWhereUniqueInput
  }

  /**
   * Exam findFirst
   */
  export type ExamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exams.
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exams.
     */
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }

  /**
   * Exam findFirstOrThrow
   */
  export type ExamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exams.
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exams.
     */
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }

  /**
   * Exam findMany
   */
  export type ExamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exams to fetch.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Exams.
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }

  /**
   * Exam create
   */
  export type ExamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * The data needed to create a Exam.
     */
    data: XOR<ExamCreateInput, ExamUncheckedCreateInput>
  }

  /**
   * Exam createMany
   */
  export type ExamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Exams.
     */
    data: ExamCreateManyInput | ExamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Exam createManyAndReturn
   */
  export type ExamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * The data used to create many Exams.
     */
    data: ExamCreateManyInput | ExamCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Exam update
   */
  export type ExamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * The data needed to update a Exam.
     */
    data: XOR<ExamUpdateInput, ExamUncheckedUpdateInput>
    /**
     * Choose, which Exam to update.
     */
    where: ExamWhereUniqueInput
  }

  /**
   * Exam updateMany
   */
  export type ExamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Exams.
     */
    data: XOR<ExamUpdateManyMutationInput, ExamUncheckedUpdateManyInput>
    /**
     * Filter which Exams to update
     */
    where?: ExamWhereInput
    /**
     * Limit how many Exams to update.
     */
    limit?: number
  }

  /**
   * Exam updateManyAndReturn
   */
  export type ExamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * The data used to update Exams.
     */
    data: XOR<ExamUpdateManyMutationInput, ExamUncheckedUpdateManyInput>
    /**
     * Filter which Exams to update
     */
    where?: ExamWhereInput
    /**
     * Limit how many Exams to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Exam upsert
   */
  export type ExamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * The filter to search for the Exam to update in case it exists.
     */
    where: ExamWhereUniqueInput
    /**
     * In case the Exam found by the `where` argument doesn't exist, create a new Exam with this data.
     */
    create: XOR<ExamCreateInput, ExamUncheckedCreateInput>
    /**
     * In case the Exam was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExamUpdateInput, ExamUncheckedUpdateInput>
  }

  /**
   * Exam delete
   */
  export type ExamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter which Exam to delete.
     */
    where: ExamWhereUniqueInput
  }

  /**
   * Exam deleteMany
   */
  export type ExamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exams to delete
     */
    where?: ExamWhereInput
    /**
     * Limit how many Exams to delete.
     */
    limit?: number
  }

  /**
   * Exam.invigilators
   */
  export type Exam$invigilatorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAssignment
     */
    select?: ExamAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAssignment
     */
    omit?: ExamAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAssignmentInclude<ExtArgs> | null
    where?: ExamAssignmentWhereInput
    orderBy?: ExamAssignmentOrderByWithRelationInput | ExamAssignmentOrderByWithRelationInput[]
    cursor?: ExamAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExamAssignmentScalarFieldEnum | ExamAssignmentScalarFieldEnum[]
  }

  /**
   * Exam without action
   */
  export type ExamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
  }


  /**
   * Model ExamAssignment
   */

  export type AggregateExamAssignment = {
    _count: ExamAssignmentCountAggregateOutputType | null
    _min: ExamAssignmentMinAggregateOutputType | null
    _max: ExamAssignmentMaxAggregateOutputType | null
  }

  export type ExamAssignmentMinAggregateOutputType = {
    id: string | null
    invigilatorId: string | null
    examId: string | null
  }

  export type ExamAssignmentMaxAggregateOutputType = {
    id: string | null
    invigilatorId: string | null
    examId: string | null
  }

  export type ExamAssignmentCountAggregateOutputType = {
    id: number
    invigilatorId: number
    examId: number
    _all: number
  }


  export type ExamAssignmentMinAggregateInputType = {
    id?: true
    invigilatorId?: true
    examId?: true
  }

  export type ExamAssignmentMaxAggregateInputType = {
    id?: true
    invigilatorId?: true
    examId?: true
  }

  export type ExamAssignmentCountAggregateInputType = {
    id?: true
    invigilatorId?: true
    examId?: true
    _all?: true
  }

  export type ExamAssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExamAssignment to aggregate.
     */
    where?: ExamAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamAssignments to fetch.
     */
    orderBy?: ExamAssignmentOrderByWithRelationInput | ExamAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExamAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExamAssignments
    **/
    _count?: true | ExamAssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExamAssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExamAssignmentMaxAggregateInputType
  }

  export type GetExamAssignmentAggregateType<T extends ExamAssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateExamAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExamAssignment[P]>
      : GetScalarType<T[P], AggregateExamAssignment[P]>
  }




  export type ExamAssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamAssignmentWhereInput
    orderBy?: ExamAssignmentOrderByWithAggregationInput | ExamAssignmentOrderByWithAggregationInput[]
    by: ExamAssignmentScalarFieldEnum[] | ExamAssignmentScalarFieldEnum
    having?: ExamAssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExamAssignmentCountAggregateInputType | true
    _min?: ExamAssignmentMinAggregateInputType
    _max?: ExamAssignmentMaxAggregateInputType
  }

  export type ExamAssignmentGroupByOutputType = {
    id: string
    invigilatorId: string
    examId: string
    _count: ExamAssignmentCountAggregateOutputType | null
    _min: ExamAssignmentMinAggregateOutputType | null
    _max: ExamAssignmentMaxAggregateOutputType | null
  }

  type GetExamAssignmentGroupByPayload<T extends ExamAssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExamAssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExamAssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExamAssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], ExamAssignmentGroupByOutputType[P]>
        }
      >
    >


  export type ExamAssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invigilatorId?: boolean
    examId?: boolean
    invigilator?: boolean | InvigilatorDefaultArgs<ExtArgs>
    exam?: boolean | ExamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examAssignment"]>

  export type ExamAssignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invigilatorId?: boolean
    examId?: boolean
    invigilator?: boolean | InvigilatorDefaultArgs<ExtArgs>
    exam?: boolean | ExamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examAssignment"]>

  export type ExamAssignmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invigilatorId?: boolean
    examId?: boolean
    invigilator?: boolean | InvigilatorDefaultArgs<ExtArgs>
    exam?: boolean | ExamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examAssignment"]>

  export type ExamAssignmentSelectScalar = {
    id?: boolean
    invigilatorId?: boolean
    examId?: boolean
  }

  export type ExamAssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "invigilatorId" | "examId", ExtArgs["result"]["examAssignment"]>
  export type ExamAssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invigilator?: boolean | InvigilatorDefaultArgs<ExtArgs>
    exam?: boolean | ExamDefaultArgs<ExtArgs>
  }
  export type ExamAssignmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invigilator?: boolean | InvigilatorDefaultArgs<ExtArgs>
    exam?: boolean | ExamDefaultArgs<ExtArgs>
  }
  export type ExamAssignmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invigilator?: boolean | InvigilatorDefaultArgs<ExtArgs>
    exam?: boolean | ExamDefaultArgs<ExtArgs>
  }

  export type $ExamAssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExamAssignment"
    objects: {
      invigilator: Prisma.$InvigilatorPayload<ExtArgs>
      exam: Prisma.$ExamPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      invigilatorId: string
      examId: string
    }, ExtArgs["result"]["examAssignment"]>
    composites: {}
  }

  type ExamAssignmentGetPayload<S extends boolean | null | undefined | ExamAssignmentDefaultArgs> = $Result.GetResult<Prisma.$ExamAssignmentPayload, S>

  type ExamAssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExamAssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExamAssignmentCountAggregateInputType | true
    }

  export interface ExamAssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExamAssignment'], meta: { name: 'ExamAssignment' } }
    /**
     * Find zero or one ExamAssignment that matches the filter.
     * @param {ExamAssignmentFindUniqueArgs} args - Arguments to find a ExamAssignment
     * @example
     * // Get one ExamAssignment
     * const examAssignment = await prisma.examAssignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExamAssignmentFindUniqueArgs>(args: SelectSubset<T, ExamAssignmentFindUniqueArgs<ExtArgs>>): Prisma__ExamAssignmentClient<$Result.GetResult<Prisma.$ExamAssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExamAssignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExamAssignmentFindUniqueOrThrowArgs} args - Arguments to find a ExamAssignment
     * @example
     * // Get one ExamAssignment
     * const examAssignment = await prisma.examAssignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExamAssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, ExamAssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExamAssignmentClient<$Result.GetResult<Prisma.$ExamAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExamAssignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamAssignmentFindFirstArgs} args - Arguments to find a ExamAssignment
     * @example
     * // Get one ExamAssignment
     * const examAssignment = await prisma.examAssignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExamAssignmentFindFirstArgs>(args?: SelectSubset<T, ExamAssignmentFindFirstArgs<ExtArgs>>): Prisma__ExamAssignmentClient<$Result.GetResult<Prisma.$ExamAssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExamAssignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamAssignmentFindFirstOrThrowArgs} args - Arguments to find a ExamAssignment
     * @example
     * // Get one ExamAssignment
     * const examAssignment = await prisma.examAssignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExamAssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, ExamAssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExamAssignmentClient<$Result.GetResult<Prisma.$ExamAssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExamAssignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamAssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExamAssignments
     * const examAssignments = await prisma.examAssignment.findMany()
     * 
     * // Get first 10 ExamAssignments
     * const examAssignments = await prisma.examAssignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const examAssignmentWithIdOnly = await prisma.examAssignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExamAssignmentFindManyArgs>(args?: SelectSubset<T, ExamAssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExamAssignment.
     * @param {ExamAssignmentCreateArgs} args - Arguments to create a ExamAssignment.
     * @example
     * // Create one ExamAssignment
     * const ExamAssignment = await prisma.examAssignment.create({
     *   data: {
     *     // ... data to create a ExamAssignment
     *   }
     * })
     * 
     */
    create<T extends ExamAssignmentCreateArgs>(args: SelectSubset<T, ExamAssignmentCreateArgs<ExtArgs>>): Prisma__ExamAssignmentClient<$Result.GetResult<Prisma.$ExamAssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExamAssignments.
     * @param {ExamAssignmentCreateManyArgs} args - Arguments to create many ExamAssignments.
     * @example
     * // Create many ExamAssignments
     * const examAssignment = await prisma.examAssignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExamAssignmentCreateManyArgs>(args?: SelectSubset<T, ExamAssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExamAssignments and returns the data saved in the database.
     * @param {ExamAssignmentCreateManyAndReturnArgs} args - Arguments to create many ExamAssignments.
     * @example
     * // Create many ExamAssignments
     * const examAssignment = await prisma.examAssignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExamAssignments and only return the `id`
     * const examAssignmentWithIdOnly = await prisma.examAssignment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExamAssignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, ExamAssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamAssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExamAssignment.
     * @param {ExamAssignmentDeleteArgs} args - Arguments to delete one ExamAssignment.
     * @example
     * // Delete one ExamAssignment
     * const ExamAssignment = await prisma.examAssignment.delete({
     *   where: {
     *     // ... filter to delete one ExamAssignment
     *   }
     * })
     * 
     */
    delete<T extends ExamAssignmentDeleteArgs>(args: SelectSubset<T, ExamAssignmentDeleteArgs<ExtArgs>>): Prisma__ExamAssignmentClient<$Result.GetResult<Prisma.$ExamAssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExamAssignment.
     * @param {ExamAssignmentUpdateArgs} args - Arguments to update one ExamAssignment.
     * @example
     * // Update one ExamAssignment
     * const examAssignment = await prisma.examAssignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExamAssignmentUpdateArgs>(args: SelectSubset<T, ExamAssignmentUpdateArgs<ExtArgs>>): Prisma__ExamAssignmentClient<$Result.GetResult<Prisma.$ExamAssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExamAssignments.
     * @param {ExamAssignmentDeleteManyArgs} args - Arguments to filter ExamAssignments to delete.
     * @example
     * // Delete a few ExamAssignments
     * const { count } = await prisma.examAssignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExamAssignmentDeleteManyArgs>(args?: SelectSubset<T, ExamAssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExamAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamAssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExamAssignments
     * const examAssignment = await prisma.examAssignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExamAssignmentUpdateManyArgs>(args: SelectSubset<T, ExamAssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExamAssignments and returns the data updated in the database.
     * @param {ExamAssignmentUpdateManyAndReturnArgs} args - Arguments to update many ExamAssignments.
     * @example
     * // Update many ExamAssignments
     * const examAssignment = await prisma.examAssignment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExamAssignments and only return the `id`
     * const examAssignmentWithIdOnly = await prisma.examAssignment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExamAssignmentUpdateManyAndReturnArgs>(args: SelectSubset<T, ExamAssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamAssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExamAssignment.
     * @param {ExamAssignmentUpsertArgs} args - Arguments to update or create a ExamAssignment.
     * @example
     * // Update or create a ExamAssignment
     * const examAssignment = await prisma.examAssignment.upsert({
     *   create: {
     *     // ... data to create a ExamAssignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExamAssignment we want to update
     *   }
     * })
     */
    upsert<T extends ExamAssignmentUpsertArgs>(args: SelectSubset<T, ExamAssignmentUpsertArgs<ExtArgs>>): Prisma__ExamAssignmentClient<$Result.GetResult<Prisma.$ExamAssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExamAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamAssignmentCountArgs} args - Arguments to filter ExamAssignments to count.
     * @example
     * // Count the number of ExamAssignments
     * const count = await prisma.examAssignment.count({
     *   where: {
     *     // ... the filter for the ExamAssignments we want to count
     *   }
     * })
    **/
    count<T extends ExamAssignmentCountArgs>(
      args?: Subset<T, ExamAssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExamAssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExamAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamAssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExamAssignmentAggregateArgs>(args: Subset<T, ExamAssignmentAggregateArgs>): Prisma.PrismaPromise<GetExamAssignmentAggregateType<T>>

    /**
     * Group by ExamAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamAssignmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExamAssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExamAssignmentGroupByArgs['orderBy'] }
        : { orderBy?: ExamAssignmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExamAssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExamAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExamAssignment model
   */
  readonly fields: ExamAssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExamAssignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExamAssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invigilator<T extends InvigilatorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InvigilatorDefaultArgs<ExtArgs>>): Prisma__InvigilatorClient<$Result.GetResult<Prisma.$InvigilatorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    exam<T extends ExamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExamDefaultArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExamAssignment model
   */
  interface ExamAssignmentFieldRefs {
    readonly id: FieldRef<"ExamAssignment", 'String'>
    readonly invigilatorId: FieldRef<"ExamAssignment", 'String'>
    readonly examId: FieldRef<"ExamAssignment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ExamAssignment findUnique
   */
  export type ExamAssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAssignment
     */
    select?: ExamAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAssignment
     */
    omit?: ExamAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ExamAssignment to fetch.
     */
    where: ExamAssignmentWhereUniqueInput
  }

  /**
   * ExamAssignment findUniqueOrThrow
   */
  export type ExamAssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAssignment
     */
    select?: ExamAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAssignment
     */
    omit?: ExamAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ExamAssignment to fetch.
     */
    where: ExamAssignmentWhereUniqueInput
  }

  /**
   * ExamAssignment findFirst
   */
  export type ExamAssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAssignment
     */
    select?: ExamAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAssignment
     */
    omit?: ExamAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ExamAssignment to fetch.
     */
    where?: ExamAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamAssignments to fetch.
     */
    orderBy?: ExamAssignmentOrderByWithRelationInput | ExamAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExamAssignments.
     */
    cursor?: ExamAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExamAssignments.
     */
    distinct?: ExamAssignmentScalarFieldEnum | ExamAssignmentScalarFieldEnum[]
  }

  /**
   * ExamAssignment findFirstOrThrow
   */
  export type ExamAssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAssignment
     */
    select?: ExamAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAssignment
     */
    omit?: ExamAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ExamAssignment to fetch.
     */
    where?: ExamAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamAssignments to fetch.
     */
    orderBy?: ExamAssignmentOrderByWithRelationInput | ExamAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExamAssignments.
     */
    cursor?: ExamAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExamAssignments.
     */
    distinct?: ExamAssignmentScalarFieldEnum | ExamAssignmentScalarFieldEnum[]
  }

  /**
   * ExamAssignment findMany
   */
  export type ExamAssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAssignment
     */
    select?: ExamAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAssignment
     */
    omit?: ExamAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ExamAssignments to fetch.
     */
    where?: ExamAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamAssignments to fetch.
     */
    orderBy?: ExamAssignmentOrderByWithRelationInput | ExamAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExamAssignments.
     */
    cursor?: ExamAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamAssignments.
     */
    skip?: number
    distinct?: ExamAssignmentScalarFieldEnum | ExamAssignmentScalarFieldEnum[]
  }

  /**
   * ExamAssignment create
   */
  export type ExamAssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAssignment
     */
    select?: ExamAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAssignment
     */
    omit?: ExamAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a ExamAssignment.
     */
    data: XOR<ExamAssignmentCreateInput, ExamAssignmentUncheckedCreateInput>
  }

  /**
   * ExamAssignment createMany
   */
  export type ExamAssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExamAssignments.
     */
    data: ExamAssignmentCreateManyInput | ExamAssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExamAssignment createManyAndReturn
   */
  export type ExamAssignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAssignment
     */
    select?: ExamAssignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAssignment
     */
    omit?: ExamAssignmentOmit<ExtArgs> | null
    /**
     * The data used to create many ExamAssignments.
     */
    data: ExamAssignmentCreateManyInput | ExamAssignmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAssignmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExamAssignment update
   */
  export type ExamAssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAssignment
     */
    select?: ExamAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAssignment
     */
    omit?: ExamAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a ExamAssignment.
     */
    data: XOR<ExamAssignmentUpdateInput, ExamAssignmentUncheckedUpdateInput>
    /**
     * Choose, which ExamAssignment to update.
     */
    where: ExamAssignmentWhereUniqueInput
  }

  /**
   * ExamAssignment updateMany
   */
  export type ExamAssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExamAssignments.
     */
    data: XOR<ExamAssignmentUpdateManyMutationInput, ExamAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which ExamAssignments to update
     */
    where?: ExamAssignmentWhereInput
    /**
     * Limit how many ExamAssignments to update.
     */
    limit?: number
  }

  /**
   * ExamAssignment updateManyAndReturn
   */
  export type ExamAssignmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAssignment
     */
    select?: ExamAssignmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAssignment
     */
    omit?: ExamAssignmentOmit<ExtArgs> | null
    /**
     * The data used to update ExamAssignments.
     */
    data: XOR<ExamAssignmentUpdateManyMutationInput, ExamAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which ExamAssignments to update
     */
    where?: ExamAssignmentWhereInput
    /**
     * Limit how many ExamAssignments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAssignmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExamAssignment upsert
   */
  export type ExamAssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAssignment
     */
    select?: ExamAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAssignment
     */
    omit?: ExamAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the ExamAssignment to update in case it exists.
     */
    where: ExamAssignmentWhereUniqueInput
    /**
     * In case the ExamAssignment found by the `where` argument doesn't exist, create a new ExamAssignment with this data.
     */
    create: XOR<ExamAssignmentCreateInput, ExamAssignmentUncheckedCreateInput>
    /**
     * In case the ExamAssignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExamAssignmentUpdateInput, ExamAssignmentUncheckedUpdateInput>
  }

  /**
   * ExamAssignment delete
   */
  export type ExamAssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAssignment
     */
    select?: ExamAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAssignment
     */
    omit?: ExamAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAssignmentInclude<ExtArgs> | null
    /**
     * Filter which ExamAssignment to delete.
     */
    where: ExamAssignmentWhereUniqueInput
  }

  /**
   * ExamAssignment deleteMany
   */
  export type ExamAssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExamAssignments to delete
     */
    where?: ExamAssignmentWhereInput
    /**
     * Limit how many ExamAssignments to delete.
     */
    limit?: number
  }

  /**
   * ExamAssignment without action
   */
  export type ExamAssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAssignment
     */
    select?: ExamAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAssignment
     */
    omit?: ExamAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAssignmentInclude<ExtArgs> | null
  }


  /**
   * Model StudentQrCode
   */

  export type AggregateStudentQrCode = {
    _count: StudentQrCodeCountAggregateOutputType | null
    _min: StudentQrCodeMinAggregateOutputType | null
    _max: StudentQrCodeMaxAggregateOutputType | null
  }

  export type StudentQrCodeMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    qrCode: string | null
    semester: $Enums.Semester | null
    issuedAt: Date | null
    expiresAt: Date | null
    isActive: boolean | null
  }

  export type StudentQrCodeMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    qrCode: string | null
    semester: $Enums.Semester | null
    issuedAt: Date | null
    expiresAt: Date | null
    isActive: boolean | null
  }

  export type StudentQrCodeCountAggregateOutputType = {
    id: number
    studentId: number
    qrCode: number
    semester: number
    issuedAt: number
    expiresAt: number
    isActive: number
    _all: number
  }


  export type StudentQrCodeMinAggregateInputType = {
    id?: true
    studentId?: true
    qrCode?: true
    semester?: true
    issuedAt?: true
    expiresAt?: true
    isActive?: true
  }

  export type StudentQrCodeMaxAggregateInputType = {
    id?: true
    studentId?: true
    qrCode?: true
    semester?: true
    issuedAt?: true
    expiresAt?: true
    isActive?: true
  }

  export type StudentQrCodeCountAggregateInputType = {
    id?: true
    studentId?: true
    qrCode?: true
    semester?: true
    issuedAt?: true
    expiresAt?: true
    isActive?: true
    _all?: true
  }

  export type StudentQrCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentQrCode to aggregate.
     */
    where?: StudentQrCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentQrCodes to fetch.
     */
    orderBy?: StudentQrCodeOrderByWithRelationInput | StudentQrCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentQrCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentQrCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentQrCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentQrCodes
    **/
    _count?: true | StudentQrCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentQrCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentQrCodeMaxAggregateInputType
  }

  export type GetStudentQrCodeAggregateType<T extends StudentQrCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentQrCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentQrCode[P]>
      : GetScalarType<T[P], AggregateStudentQrCode[P]>
  }




  export type StudentQrCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentQrCodeWhereInput
    orderBy?: StudentQrCodeOrderByWithAggregationInput | StudentQrCodeOrderByWithAggregationInput[]
    by: StudentQrCodeScalarFieldEnum[] | StudentQrCodeScalarFieldEnum
    having?: StudentQrCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentQrCodeCountAggregateInputType | true
    _min?: StudentQrCodeMinAggregateInputType
    _max?: StudentQrCodeMaxAggregateInputType
  }

  export type StudentQrCodeGroupByOutputType = {
    id: string
    studentId: string
    qrCode: string | null
    semester: $Enums.Semester
    issuedAt: Date
    expiresAt: Date
    isActive: boolean
    _count: StudentQrCodeCountAggregateOutputType | null
    _min: StudentQrCodeMinAggregateOutputType | null
    _max: StudentQrCodeMaxAggregateOutputType | null
  }

  type GetStudentQrCodeGroupByPayload<T extends StudentQrCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentQrCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentQrCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentQrCodeGroupByOutputType[P]>
            : GetScalarType<T[P], StudentQrCodeGroupByOutputType[P]>
        }
      >
    >


  export type StudentQrCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    qrCode?: boolean
    semester?: boolean
    issuedAt?: boolean
    expiresAt?: boolean
    isActive?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentQrCode"]>

  export type StudentQrCodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    qrCode?: boolean
    semester?: boolean
    issuedAt?: boolean
    expiresAt?: boolean
    isActive?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentQrCode"]>

  export type StudentQrCodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    qrCode?: boolean
    semester?: boolean
    issuedAt?: boolean
    expiresAt?: boolean
    isActive?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentQrCode"]>

  export type StudentQrCodeSelectScalar = {
    id?: boolean
    studentId?: boolean
    qrCode?: boolean
    semester?: boolean
    issuedAt?: boolean
    expiresAt?: boolean
    isActive?: boolean
  }

  export type StudentQrCodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "qrCode" | "semester" | "issuedAt" | "expiresAt" | "isActive", ExtArgs["result"]["studentQrCode"]>
  export type StudentQrCodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type StudentQrCodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type StudentQrCodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }

  export type $StudentQrCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentQrCode"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      qrCode: string | null
      semester: $Enums.Semester
      issuedAt: Date
      expiresAt: Date
      isActive: boolean
    }, ExtArgs["result"]["studentQrCode"]>
    composites: {}
  }

  type StudentQrCodeGetPayload<S extends boolean | null | undefined | StudentQrCodeDefaultArgs> = $Result.GetResult<Prisma.$StudentQrCodePayload, S>

  type StudentQrCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentQrCodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentQrCodeCountAggregateInputType | true
    }

  export interface StudentQrCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentQrCode'], meta: { name: 'StudentQrCode' } }
    /**
     * Find zero or one StudentQrCode that matches the filter.
     * @param {StudentQrCodeFindUniqueArgs} args - Arguments to find a StudentQrCode
     * @example
     * // Get one StudentQrCode
     * const studentQrCode = await prisma.studentQrCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentQrCodeFindUniqueArgs>(args: SelectSubset<T, StudentQrCodeFindUniqueArgs<ExtArgs>>): Prisma__StudentQrCodeClient<$Result.GetResult<Prisma.$StudentQrCodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudentQrCode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentQrCodeFindUniqueOrThrowArgs} args - Arguments to find a StudentQrCode
     * @example
     * // Get one StudentQrCode
     * const studentQrCode = await prisma.studentQrCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentQrCodeFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentQrCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentQrCodeClient<$Result.GetResult<Prisma.$StudentQrCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentQrCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentQrCodeFindFirstArgs} args - Arguments to find a StudentQrCode
     * @example
     * // Get one StudentQrCode
     * const studentQrCode = await prisma.studentQrCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentQrCodeFindFirstArgs>(args?: SelectSubset<T, StudentQrCodeFindFirstArgs<ExtArgs>>): Prisma__StudentQrCodeClient<$Result.GetResult<Prisma.$StudentQrCodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentQrCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentQrCodeFindFirstOrThrowArgs} args - Arguments to find a StudentQrCode
     * @example
     * // Get one StudentQrCode
     * const studentQrCode = await prisma.studentQrCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentQrCodeFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentQrCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentQrCodeClient<$Result.GetResult<Prisma.$StudentQrCodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudentQrCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentQrCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentQrCodes
     * const studentQrCodes = await prisma.studentQrCode.findMany()
     * 
     * // Get first 10 StudentQrCodes
     * const studentQrCodes = await prisma.studentQrCode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentQrCodeWithIdOnly = await prisma.studentQrCode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentQrCodeFindManyArgs>(args?: SelectSubset<T, StudentQrCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentQrCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudentQrCode.
     * @param {StudentQrCodeCreateArgs} args - Arguments to create a StudentQrCode.
     * @example
     * // Create one StudentQrCode
     * const StudentQrCode = await prisma.studentQrCode.create({
     *   data: {
     *     // ... data to create a StudentQrCode
     *   }
     * })
     * 
     */
    create<T extends StudentQrCodeCreateArgs>(args: SelectSubset<T, StudentQrCodeCreateArgs<ExtArgs>>): Prisma__StudentQrCodeClient<$Result.GetResult<Prisma.$StudentQrCodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudentQrCodes.
     * @param {StudentQrCodeCreateManyArgs} args - Arguments to create many StudentQrCodes.
     * @example
     * // Create many StudentQrCodes
     * const studentQrCode = await prisma.studentQrCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentQrCodeCreateManyArgs>(args?: SelectSubset<T, StudentQrCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudentQrCodes and returns the data saved in the database.
     * @param {StudentQrCodeCreateManyAndReturnArgs} args - Arguments to create many StudentQrCodes.
     * @example
     * // Create many StudentQrCodes
     * const studentQrCode = await prisma.studentQrCode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudentQrCodes and only return the `id`
     * const studentQrCodeWithIdOnly = await prisma.studentQrCode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentQrCodeCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentQrCodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentQrCodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudentQrCode.
     * @param {StudentQrCodeDeleteArgs} args - Arguments to delete one StudentQrCode.
     * @example
     * // Delete one StudentQrCode
     * const StudentQrCode = await prisma.studentQrCode.delete({
     *   where: {
     *     // ... filter to delete one StudentQrCode
     *   }
     * })
     * 
     */
    delete<T extends StudentQrCodeDeleteArgs>(args: SelectSubset<T, StudentQrCodeDeleteArgs<ExtArgs>>): Prisma__StudentQrCodeClient<$Result.GetResult<Prisma.$StudentQrCodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudentQrCode.
     * @param {StudentQrCodeUpdateArgs} args - Arguments to update one StudentQrCode.
     * @example
     * // Update one StudentQrCode
     * const studentQrCode = await prisma.studentQrCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentQrCodeUpdateArgs>(args: SelectSubset<T, StudentQrCodeUpdateArgs<ExtArgs>>): Prisma__StudentQrCodeClient<$Result.GetResult<Prisma.$StudentQrCodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudentQrCodes.
     * @param {StudentQrCodeDeleteManyArgs} args - Arguments to filter StudentQrCodes to delete.
     * @example
     * // Delete a few StudentQrCodes
     * const { count } = await prisma.studentQrCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentQrCodeDeleteManyArgs>(args?: SelectSubset<T, StudentQrCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentQrCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentQrCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentQrCodes
     * const studentQrCode = await prisma.studentQrCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentQrCodeUpdateManyArgs>(args: SelectSubset<T, StudentQrCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentQrCodes and returns the data updated in the database.
     * @param {StudentQrCodeUpdateManyAndReturnArgs} args - Arguments to update many StudentQrCodes.
     * @example
     * // Update many StudentQrCodes
     * const studentQrCode = await prisma.studentQrCode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudentQrCodes and only return the `id`
     * const studentQrCodeWithIdOnly = await prisma.studentQrCode.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudentQrCodeUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentQrCodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentQrCodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudentQrCode.
     * @param {StudentQrCodeUpsertArgs} args - Arguments to update or create a StudentQrCode.
     * @example
     * // Update or create a StudentQrCode
     * const studentQrCode = await prisma.studentQrCode.upsert({
     *   create: {
     *     // ... data to create a StudentQrCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentQrCode we want to update
     *   }
     * })
     */
    upsert<T extends StudentQrCodeUpsertArgs>(args: SelectSubset<T, StudentQrCodeUpsertArgs<ExtArgs>>): Prisma__StudentQrCodeClient<$Result.GetResult<Prisma.$StudentQrCodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudentQrCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentQrCodeCountArgs} args - Arguments to filter StudentQrCodes to count.
     * @example
     * // Count the number of StudentQrCodes
     * const count = await prisma.studentQrCode.count({
     *   where: {
     *     // ... the filter for the StudentQrCodes we want to count
     *   }
     * })
    **/
    count<T extends StudentQrCodeCountArgs>(
      args?: Subset<T, StudentQrCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentQrCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentQrCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentQrCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentQrCodeAggregateArgs>(args: Subset<T, StudentQrCodeAggregateArgs>): Prisma.PrismaPromise<GetStudentQrCodeAggregateType<T>>

    /**
     * Group by StudentQrCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentQrCodeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentQrCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentQrCodeGroupByArgs['orderBy'] }
        : { orderBy?: StudentQrCodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentQrCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentQrCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentQrCode model
   */
  readonly fields: StudentQrCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentQrCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentQrCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StudentQrCode model
   */
  interface StudentQrCodeFieldRefs {
    readonly id: FieldRef<"StudentQrCode", 'String'>
    readonly studentId: FieldRef<"StudentQrCode", 'String'>
    readonly qrCode: FieldRef<"StudentQrCode", 'String'>
    readonly semester: FieldRef<"StudentQrCode", 'Semester'>
    readonly issuedAt: FieldRef<"StudentQrCode", 'DateTime'>
    readonly expiresAt: FieldRef<"StudentQrCode", 'DateTime'>
    readonly isActive: FieldRef<"StudentQrCode", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * StudentQrCode findUnique
   */
  export type StudentQrCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentQrCode
     */
    select?: StudentQrCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentQrCode
     */
    omit?: StudentQrCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentQrCodeInclude<ExtArgs> | null
    /**
     * Filter, which StudentQrCode to fetch.
     */
    where: StudentQrCodeWhereUniqueInput
  }

  /**
   * StudentQrCode findUniqueOrThrow
   */
  export type StudentQrCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentQrCode
     */
    select?: StudentQrCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentQrCode
     */
    omit?: StudentQrCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentQrCodeInclude<ExtArgs> | null
    /**
     * Filter, which StudentQrCode to fetch.
     */
    where: StudentQrCodeWhereUniqueInput
  }

  /**
   * StudentQrCode findFirst
   */
  export type StudentQrCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentQrCode
     */
    select?: StudentQrCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentQrCode
     */
    omit?: StudentQrCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentQrCodeInclude<ExtArgs> | null
    /**
     * Filter, which StudentQrCode to fetch.
     */
    where?: StudentQrCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentQrCodes to fetch.
     */
    orderBy?: StudentQrCodeOrderByWithRelationInput | StudentQrCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentQrCodes.
     */
    cursor?: StudentQrCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentQrCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentQrCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentQrCodes.
     */
    distinct?: StudentQrCodeScalarFieldEnum | StudentQrCodeScalarFieldEnum[]
  }

  /**
   * StudentQrCode findFirstOrThrow
   */
  export type StudentQrCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentQrCode
     */
    select?: StudentQrCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentQrCode
     */
    omit?: StudentQrCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentQrCodeInclude<ExtArgs> | null
    /**
     * Filter, which StudentQrCode to fetch.
     */
    where?: StudentQrCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentQrCodes to fetch.
     */
    orderBy?: StudentQrCodeOrderByWithRelationInput | StudentQrCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentQrCodes.
     */
    cursor?: StudentQrCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentQrCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentQrCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentQrCodes.
     */
    distinct?: StudentQrCodeScalarFieldEnum | StudentQrCodeScalarFieldEnum[]
  }

  /**
   * StudentQrCode findMany
   */
  export type StudentQrCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentQrCode
     */
    select?: StudentQrCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentQrCode
     */
    omit?: StudentQrCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentQrCodeInclude<ExtArgs> | null
    /**
     * Filter, which StudentQrCodes to fetch.
     */
    where?: StudentQrCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentQrCodes to fetch.
     */
    orderBy?: StudentQrCodeOrderByWithRelationInput | StudentQrCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentQrCodes.
     */
    cursor?: StudentQrCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentQrCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentQrCodes.
     */
    skip?: number
    distinct?: StudentQrCodeScalarFieldEnum | StudentQrCodeScalarFieldEnum[]
  }

  /**
   * StudentQrCode create
   */
  export type StudentQrCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentQrCode
     */
    select?: StudentQrCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentQrCode
     */
    omit?: StudentQrCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentQrCodeInclude<ExtArgs> | null
    /**
     * The data needed to create a StudentQrCode.
     */
    data: XOR<StudentQrCodeCreateInput, StudentQrCodeUncheckedCreateInput>
  }

  /**
   * StudentQrCode createMany
   */
  export type StudentQrCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentQrCodes.
     */
    data: StudentQrCodeCreateManyInput | StudentQrCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentQrCode createManyAndReturn
   */
  export type StudentQrCodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentQrCode
     */
    select?: StudentQrCodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentQrCode
     */
    omit?: StudentQrCodeOmit<ExtArgs> | null
    /**
     * The data used to create many StudentQrCodes.
     */
    data: StudentQrCodeCreateManyInput | StudentQrCodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentQrCodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentQrCode update
   */
  export type StudentQrCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentQrCode
     */
    select?: StudentQrCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentQrCode
     */
    omit?: StudentQrCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentQrCodeInclude<ExtArgs> | null
    /**
     * The data needed to update a StudentQrCode.
     */
    data: XOR<StudentQrCodeUpdateInput, StudentQrCodeUncheckedUpdateInput>
    /**
     * Choose, which StudentQrCode to update.
     */
    where: StudentQrCodeWhereUniqueInput
  }

  /**
   * StudentQrCode updateMany
   */
  export type StudentQrCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentQrCodes.
     */
    data: XOR<StudentQrCodeUpdateManyMutationInput, StudentQrCodeUncheckedUpdateManyInput>
    /**
     * Filter which StudentQrCodes to update
     */
    where?: StudentQrCodeWhereInput
    /**
     * Limit how many StudentQrCodes to update.
     */
    limit?: number
  }

  /**
   * StudentQrCode updateManyAndReturn
   */
  export type StudentQrCodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentQrCode
     */
    select?: StudentQrCodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentQrCode
     */
    omit?: StudentQrCodeOmit<ExtArgs> | null
    /**
     * The data used to update StudentQrCodes.
     */
    data: XOR<StudentQrCodeUpdateManyMutationInput, StudentQrCodeUncheckedUpdateManyInput>
    /**
     * Filter which StudentQrCodes to update
     */
    where?: StudentQrCodeWhereInput
    /**
     * Limit how many StudentQrCodes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentQrCodeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentQrCode upsert
   */
  export type StudentQrCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentQrCode
     */
    select?: StudentQrCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentQrCode
     */
    omit?: StudentQrCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentQrCodeInclude<ExtArgs> | null
    /**
     * The filter to search for the StudentQrCode to update in case it exists.
     */
    where: StudentQrCodeWhereUniqueInput
    /**
     * In case the StudentQrCode found by the `where` argument doesn't exist, create a new StudentQrCode with this data.
     */
    create: XOR<StudentQrCodeCreateInput, StudentQrCodeUncheckedCreateInput>
    /**
     * In case the StudentQrCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentQrCodeUpdateInput, StudentQrCodeUncheckedUpdateInput>
  }

  /**
   * StudentQrCode delete
   */
  export type StudentQrCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentQrCode
     */
    select?: StudentQrCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentQrCode
     */
    omit?: StudentQrCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentQrCodeInclude<ExtArgs> | null
    /**
     * Filter which StudentQrCode to delete.
     */
    where: StudentQrCodeWhereUniqueInput
  }

  /**
   * StudentQrCode deleteMany
   */
  export type StudentQrCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentQrCodes to delete
     */
    where?: StudentQrCodeWhereInput
    /**
     * Limit how many StudentQrCodes to delete.
     */
    limit?: number
  }

  /**
   * StudentQrCode without action
   */
  export type StudentQrCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentQrCode
     */
    select?: StudentQrCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentQrCode
     */
    omit?: StudentQrCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentQrCodeInclude<ExtArgs> | null
  }


  /**
   * Model Programme
   */

  export type AggregateProgramme = {
    _count: ProgrammeCountAggregateOutputType | null
    _min: ProgrammeMinAggregateOutputType | null
    _max: ProgrammeMaxAggregateOutputType | null
  }

  export type ProgrammeMinAggregateOutputType = {
    id: string | null
    name: string | null
    programme: $Enums.StudyMode | null
    courseId: string | null
  }

  export type ProgrammeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    programme: $Enums.StudyMode | null
    courseId: string | null
  }

  export type ProgrammeCountAggregateOutputType = {
    id: number
    name: number
    programme: number
    courseId: number
    _all: number
  }


  export type ProgrammeMinAggregateInputType = {
    id?: true
    name?: true
    programme?: true
    courseId?: true
  }

  export type ProgrammeMaxAggregateInputType = {
    id?: true
    name?: true
    programme?: true
    courseId?: true
  }

  export type ProgrammeCountAggregateInputType = {
    id?: true
    name?: true
    programme?: true
    courseId?: true
    _all?: true
  }

  export type ProgrammeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Programme to aggregate.
     */
    where?: ProgrammeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Programmes to fetch.
     */
    orderBy?: ProgrammeOrderByWithRelationInput | ProgrammeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProgrammeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Programmes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Programmes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Programmes
    **/
    _count?: true | ProgrammeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgrammeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgrammeMaxAggregateInputType
  }

  export type GetProgrammeAggregateType<T extends ProgrammeAggregateArgs> = {
        [P in keyof T & keyof AggregateProgramme]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgramme[P]>
      : GetScalarType<T[P], AggregateProgramme[P]>
  }




  export type ProgrammeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgrammeWhereInput
    orderBy?: ProgrammeOrderByWithAggregationInput | ProgrammeOrderByWithAggregationInput[]
    by: ProgrammeScalarFieldEnum[] | ProgrammeScalarFieldEnum
    having?: ProgrammeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgrammeCountAggregateInputType | true
    _min?: ProgrammeMinAggregateInputType
    _max?: ProgrammeMaxAggregateInputType
  }

  export type ProgrammeGroupByOutputType = {
    id: string
    name: string
    programme: $Enums.StudyMode
    courseId: string
    _count: ProgrammeCountAggregateOutputType | null
    _min: ProgrammeMinAggregateOutputType | null
    _max: ProgrammeMaxAggregateOutputType | null
  }

  type GetProgrammeGroupByPayload<T extends ProgrammeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgrammeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgrammeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgrammeGroupByOutputType[P]>
            : GetScalarType<T[P], ProgrammeGroupByOutputType[P]>
        }
      >
    >


  export type ProgrammeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    programme?: boolean
    courseId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    students?: boolean | Programme$studentsArgs<ExtArgs>
    _count?: boolean | ProgrammeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["programme"]>

  export type ProgrammeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    programme?: boolean
    courseId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["programme"]>

  export type ProgrammeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    programme?: boolean
    courseId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["programme"]>

  export type ProgrammeSelectScalar = {
    id?: boolean
    name?: boolean
    programme?: boolean
    courseId?: boolean
  }

  export type ProgrammeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "programme" | "courseId", ExtArgs["result"]["programme"]>
  export type ProgrammeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    students?: boolean | Programme$studentsArgs<ExtArgs>
    _count?: boolean | ProgrammeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProgrammeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type ProgrammeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $ProgrammePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Programme"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      students: Prisma.$StudentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      programme: $Enums.StudyMode
      courseId: string
    }, ExtArgs["result"]["programme"]>
    composites: {}
  }

  type ProgrammeGetPayload<S extends boolean | null | undefined | ProgrammeDefaultArgs> = $Result.GetResult<Prisma.$ProgrammePayload, S>

  type ProgrammeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProgrammeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProgrammeCountAggregateInputType | true
    }

  export interface ProgrammeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Programme'], meta: { name: 'Programme' } }
    /**
     * Find zero or one Programme that matches the filter.
     * @param {ProgrammeFindUniqueArgs} args - Arguments to find a Programme
     * @example
     * // Get one Programme
     * const programme = await prisma.programme.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProgrammeFindUniqueArgs>(args: SelectSubset<T, ProgrammeFindUniqueArgs<ExtArgs>>): Prisma__ProgrammeClient<$Result.GetResult<Prisma.$ProgrammePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Programme that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProgrammeFindUniqueOrThrowArgs} args - Arguments to find a Programme
     * @example
     * // Get one Programme
     * const programme = await prisma.programme.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProgrammeFindUniqueOrThrowArgs>(args: SelectSubset<T, ProgrammeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProgrammeClient<$Result.GetResult<Prisma.$ProgrammePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Programme that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgrammeFindFirstArgs} args - Arguments to find a Programme
     * @example
     * // Get one Programme
     * const programme = await prisma.programme.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProgrammeFindFirstArgs>(args?: SelectSubset<T, ProgrammeFindFirstArgs<ExtArgs>>): Prisma__ProgrammeClient<$Result.GetResult<Prisma.$ProgrammePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Programme that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgrammeFindFirstOrThrowArgs} args - Arguments to find a Programme
     * @example
     * // Get one Programme
     * const programme = await prisma.programme.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProgrammeFindFirstOrThrowArgs>(args?: SelectSubset<T, ProgrammeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProgrammeClient<$Result.GetResult<Prisma.$ProgrammePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Programmes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgrammeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Programmes
     * const programmes = await prisma.programme.findMany()
     * 
     * // Get first 10 Programmes
     * const programmes = await prisma.programme.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const programmeWithIdOnly = await prisma.programme.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProgrammeFindManyArgs>(args?: SelectSubset<T, ProgrammeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgrammePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Programme.
     * @param {ProgrammeCreateArgs} args - Arguments to create a Programme.
     * @example
     * // Create one Programme
     * const Programme = await prisma.programme.create({
     *   data: {
     *     // ... data to create a Programme
     *   }
     * })
     * 
     */
    create<T extends ProgrammeCreateArgs>(args: SelectSubset<T, ProgrammeCreateArgs<ExtArgs>>): Prisma__ProgrammeClient<$Result.GetResult<Prisma.$ProgrammePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Programmes.
     * @param {ProgrammeCreateManyArgs} args - Arguments to create many Programmes.
     * @example
     * // Create many Programmes
     * const programme = await prisma.programme.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProgrammeCreateManyArgs>(args?: SelectSubset<T, ProgrammeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Programmes and returns the data saved in the database.
     * @param {ProgrammeCreateManyAndReturnArgs} args - Arguments to create many Programmes.
     * @example
     * // Create many Programmes
     * const programme = await prisma.programme.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Programmes and only return the `id`
     * const programmeWithIdOnly = await prisma.programme.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProgrammeCreateManyAndReturnArgs>(args?: SelectSubset<T, ProgrammeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgrammePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Programme.
     * @param {ProgrammeDeleteArgs} args - Arguments to delete one Programme.
     * @example
     * // Delete one Programme
     * const Programme = await prisma.programme.delete({
     *   where: {
     *     // ... filter to delete one Programme
     *   }
     * })
     * 
     */
    delete<T extends ProgrammeDeleteArgs>(args: SelectSubset<T, ProgrammeDeleteArgs<ExtArgs>>): Prisma__ProgrammeClient<$Result.GetResult<Prisma.$ProgrammePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Programme.
     * @param {ProgrammeUpdateArgs} args - Arguments to update one Programme.
     * @example
     * // Update one Programme
     * const programme = await prisma.programme.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProgrammeUpdateArgs>(args: SelectSubset<T, ProgrammeUpdateArgs<ExtArgs>>): Prisma__ProgrammeClient<$Result.GetResult<Prisma.$ProgrammePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Programmes.
     * @param {ProgrammeDeleteManyArgs} args - Arguments to filter Programmes to delete.
     * @example
     * // Delete a few Programmes
     * const { count } = await prisma.programme.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProgrammeDeleteManyArgs>(args?: SelectSubset<T, ProgrammeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Programmes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgrammeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Programmes
     * const programme = await prisma.programme.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProgrammeUpdateManyArgs>(args: SelectSubset<T, ProgrammeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Programmes and returns the data updated in the database.
     * @param {ProgrammeUpdateManyAndReturnArgs} args - Arguments to update many Programmes.
     * @example
     * // Update many Programmes
     * const programme = await prisma.programme.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Programmes and only return the `id`
     * const programmeWithIdOnly = await prisma.programme.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProgrammeUpdateManyAndReturnArgs>(args: SelectSubset<T, ProgrammeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgrammePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Programme.
     * @param {ProgrammeUpsertArgs} args - Arguments to update or create a Programme.
     * @example
     * // Update or create a Programme
     * const programme = await prisma.programme.upsert({
     *   create: {
     *     // ... data to create a Programme
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Programme we want to update
     *   }
     * })
     */
    upsert<T extends ProgrammeUpsertArgs>(args: SelectSubset<T, ProgrammeUpsertArgs<ExtArgs>>): Prisma__ProgrammeClient<$Result.GetResult<Prisma.$ProgrammePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Programmes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgrammeCountArgs} args - Arguments to filter Programmes to count.
     * @example
     * // Count the number of Programmes
     * const count = await prisma.programme.count({
     *   where: {
     *     // ... the filter for the Programmes we want to count
     *   }
     * })
    **/
    count<T extends ProgrammeCountArgs>(
      args?: Subset<T, ProgrammeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgrammeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Programme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgrammeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProgrammeAggregateArgs>(args: Subset<T, ProgrammeAggregateArgs>): Prisma.PrismaPromise<GetProgrammeAggregateType<T>>

    /**
     * Group by Programme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgrammeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProgrammeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProgrammeGroupByArgs['orderBy'] }
        : { orderBy?: ProgrammeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProgrammeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgrammeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Programme model
   */
  readonly fields: ProgrammeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Programme.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProgrammeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    students<T extends Programme$studentsArgs<ExtArgs> = {}>(args?: Subset<T, Programme$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Programme model
   */
  interface ProgrammeFieldRefs {
    readonly id: FieldRef<"Programme", 'String'>
    readonly name: FieldRef<"Programme", 'String'>
    readonly programme: FieldRef<"Programme", 'StudyMode'>
    readonly courseId: FieldRef<"Programme", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Programme findUnique
   */
  export type ProgrammeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Programme
     */
    select?: ProgrammeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Programme
     */
    omit?: ProgrammeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgrammeInclude<ExtArgs> | null
    /**
     * Filter, which Programme to fetch.
     */
    where: ProgrammeWhereUniqueInput
  }

  /**
   * Programme findUniqueOrThrow
   */
  export type ProgrammeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Programme
     */
    select?: ProgrammeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Programme
     */
    omit?: ProgrammeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgrammeInclude<ExtArgs> | null
    /**
     * Filter, which Programme to fetch.
     */
    where: ProgrammeWhereUniqueInput
  }

  /**
   * Programme findFirst
   */
  export type ProgrammeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Programme
     */
    select?: ProgrammeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Programme
     */
    omit?: ProgrammeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgrammeInclude<ExtArgs> | null
    /**
     * Filter, which Programme to fetch.
     */
    where?: ProgrammeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Programmes to fetch.
     */
    orderBy?: ProgrammeOrderByWithRelationInput | ProgrammeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Programmes.
     */
    cursor?: ProgrammeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Programmes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Programmes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Programmes.
     */
    distinct?: ProgrammeScalarFieldEnum | ProgrammeScalarFieldEnum[]
  }

  /**
   * Programme findFirstOrThrow
   */
  export type ProgrammeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Programme
     */
    select?: ProgrammeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Programme
     */
    omit?: ProgrammeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgrammeInclude<ExtArgs> | null
    /**
     * Filter, which Programme to fetch.
     */
    where?: ProgrammeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Programmes to fetch.
     */
    orderBy?: ProgrammeOrderByWithRelationInput | ProgrammeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Programmes.
     */
    cursor?: ProgrammeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Programmes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Programmes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Programmes.
     */
    distinct?: ProgrammeScalarFieldEnum | ProgrammeScalarFieldEnum[]
  }

  /**
   * Programme findMany
   */
  export type ProgrammeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Programme
     */
    select?: ProgrammeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Programme
     */
    omit?: ProgrammeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgrammeInclude<ExtArgs> | null
    /**
     * Filter, which Programmes to fetch.
     */
    where?: ProgrammeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Programmes to fetch.
     */
    orderBy?: ProgrammeOrderByWithRelationInput | ProgrammeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Programmes.
     */
    cursor?: ProgrammeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Programmes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Programmes.
     */
    skip?: number
    distinct?: ProgrammeScalarFieldEnum | ProgrammeScalarFieldEnum[]
  }

  /**
   * Programme create
   */
  export type ProgrammeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Programme
     */
    select?: ProgrammeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Programme
     */
    omit?: ProgrammeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgrammeInclude<ExtArgs> | null
    /**
     * The data needed to create a Programme.
     */
    data: XOR<ProgrammeCreateInput, ProgrammeUncheckedCreateInput>
  }

  /**
   * Programme createMany
   */
  export type ProgrammeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Programmes.
     */
    data: ProgrammeCreateManyInput | ProgrammeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Programme createManyAndReturn
   */
  export type ProgrammeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Programme
     */
    select?: ProgrammeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Programme
     */
    omit?: ProgrammeOmit<ExtArgs> | null
    /**
     * The data used to create many Programmes.
     */
    data: ProgrammeCreateManyInput | ProgrammeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgrammeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Programme update
   */
  export type ProgrammeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Programme
     */
    select?: ProgrammeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Programme
     */
    omit?: ProgrammeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgrammeInclude<ExtArgs> | null
    /**
     * The data needed to update a Programme.
     */
    data: XOR<ProgrammeUpdateInput, ProgrammeUncheckedUpdateInput>
    /**
     * Choose, which Programme to update.
     */
    where: ProgrammeWhereUniqueInput
  }

  /**
   * Programme updateMany
   */
  export type ProgrammeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Programmes.
     */
    data: XOR<ProgrammeUpdateManyMutationInput, ProgrammeUncheckedUpdateManyInput>
    /**
     * Filter which Programmes to update
     */
    where?: ProgrammeWhereInput
    /**
     * Limit how many Programmes to update.
     */
    limit?: number
  }

  /**
   * Programme updateManyAndReturn
   */
  export type ProgrammeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Programme
     */
    select?: ProgrammeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Programme
     */
    omit?: ProgrammeOmit<ExtArgs> | null
    /**
     * The data used to update Programmes.
     */
    data: XOR<ProgrammeUpdateManyMutationInput, ProgrammeUncheckedUpdateManyInput>
    /**
     * Filter which Programmes to update
     */
    where?: ProgrammeWhereInput
    /**
     * Limit how many Programmes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgrammeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Programme upsert
   */
  export type ProgrammeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Programme
     */
    select?: ProgrammeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Programme
     */
    omit?: ProgrammeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgrammeInclude<ExtArgs> | null
    /**
     * The filter to search for the Programme to update in case it exists.
     */
    where: ProgrammeWhereUniqueInput
    /**
     * In case the Programme found by the `where` argument doesn't exist, create a new Programme with this data.
     */
    create: XOR<ProgrammeCreateInput, ProgrammeUncheckedCreateInput>
    /**
     * In case the Programme was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProgrammeUpdateInput, ProgrammeUncheckedUpdateInput>
  }

  /**
   * Programme delete
   */
  export type ProgrammeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Programme
     */
    select?: ProgrammeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Programme
     */
    omit?: ProgrammeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgrammeInclude<ExtArgs> | null
    /**
     * Filter which Programme to delete.
     */
    where: ProgrammeWhereUniqueInput
  }

  /**
   * Programme deleteMany
   */
  export type ProgrammeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Programmes to delete
     */
    where?: ProgrammeWhereInput
    /**
     * Limit how many Programmes to delete.
     */
    limit?: number
  }

  /**
   * Programme.students
   */
  export type Programme$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    cursor?: StudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Programme without action
   */
  export type ProgrammeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Programme
     */
    select?: ProgrammeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Programme
     */
    omit?: ProgrammeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgrammeInclude<ExtArgs> | null
  }


  /**
   * Model FacultyOrSchool
   */

  export type AggregateFacultyOrSchool = {
    _count: FacultyOrSchoolCountAggregateOutputType | null
    _min: FacultyOrSchoolMinAggregateOutputType | null
    _max: FacultyOrSchoolMaxAggregateOutputType | null
  }

  export type FacultyOrSchoolMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type FacultyOrSchoolMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type FacultyOrSchoolCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type FacultyOrSchoolMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type FacultyOrSchoolMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type FacultyOrSchoolCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type FacultyOrSchoolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacultyOrSchool to aggregate.
     */
    where?: FacultyOrSchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacultyOrSchools to fetch.
     */
    orderBy?: FacultyOrSchoolOrderByWithRelationInput | FacultyOrSchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FacultyOrSchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacultyOrSchools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacultyOrSchools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FacultyOrSchools
    **/
    _count?: true | FacultyOrSchoolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacultyOrSchoolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacultyOrSchoolMaxAggregateInputType
  }

  export type GetFacultyOrSchoolAggregateType<T extends FacultyOrSchoolAggregateArgs> = {
        [P in keyof T & keyof AggregateFacultyOrSchool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacultyOrSchool[P]>
      : GetScalarType<T[P], AggregateFacultyOrSchool[P]>
  }




  export type FacultyOrSchoolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacultyOrSchoolWhereInput
    orderBy?: FacultyOrSchoolOrderByWithAggregationInput | FacultyOrSchoolOrderByWithAggregationInput[]
    by: FacultyOrSchoolScalarFieldEnum[] | FacultyOrSchoolScalarFieldEnum
    having?: FacultyOrSchoolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacultyOrSchoolCountAggregateInputType | true
    _min?: FacultyOrSchoolMinAggregateInputType
    _max?: FacultyOrSchoolMaxAggregateInputType
  }

  export type FacultyOrSchoolGroupByOutputType = {
    id: string
    name: string
    _count: FacultyOrSchoolCountAggregateOutputType | null
    _min: FacultyOrSchoolMinAggregateOutputType | null
    _max: FacultyOrSchoolMaxAggregateOutputType | null
  }

  type GetFacultyOrSchoolGroupByPayload<T extends FacultyOrSchoolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacultyOrSchoolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacultyOrSchoolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacultyOrSchoolGroupByOutputType[P]>
            : GetScalarType<T[P], FacultyOrSchoolGroupByOutputType[P]>
        }
      >
    >


  export type FacultyOrSchoolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    departments?: boolean | FacultyOrSchool$departmentsArgs<ExtArgs>
    admins?: boolean | FacultyOrSchool$adminsArgs<ExtArgs>
    _count?: boolean | FacultyOrSchoolCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facultyOrSchool"]>

  export type FacultyOrSchoolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["facultyOrSchool"]>

  export type FacultyOrSchoolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["facultyOrSchool"]>

  export type FacultyOrSchoolSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type FacultyOrSchoolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["facultyOrSchool"]>
  export type FacultyOrSchoolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departments?: boolean | FacultyOrSchool$departmentsArgs<ExtArgs>
    admins?: boolean | FacultyOrSchool$adminsArgs<ExtArgs>
    _count?: boolean | FacultyOrSchoolCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FacultyOrSchoolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FacultyOrSchoolIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FacultyOrSchoolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FacultyOrSchool"
    objects: {
      departments: Prisma.$DepartmentPayload<ExtArgs>[]
      admins: Prisma.$AdminPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["facultyOrSchool"]>
    composites: {}
  }

  type FacultyOrSchoolGetPayload<S extends boolean | null | undefined | FacultyOrSchoolDefaultArgs> = $Result.GetResult<Prisma.$FacultyOrSchoolPayload, S>

  type FacultyOrSchoolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FacultyOrSchoolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FacultyOrSchoolCountAggregateInputType | true
    }

  export interface FacultyOrSchoolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FacultyOrSchool'], meta: { name: 'FacultyOrSchool' } }
    /**
     * Find zero or one FacultyOrSchool that matches the filter.
     * @param {FacultyOrSchoolFindUniqueArgs} args - Arguments to find a FacultyOrSchool
     * @example
     * // Get one FacultyOrSchool
     * const facultyOrSchool = await prisma.facultyOrSchool.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FacultyOrSchoolFindUniqueArgs>(args: SelectSubset<T, FacultyOrSchoolFindUniqueArgs<ExtArgs>>): Prisma__FacultyOrSchoolClient<$Result.GetResult<Prisma.$FacultyOrSchoolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FacultyOrSchool that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FacultyOrSchoolFindUniqueOrThrowArgs} args - Arguments to find a FacultyOrSchool
     * @example
     * // Get one FacultyOrSchool
     * const facultyOrSchool = await prisma.facultyOrSchool.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FacultyOrSchoolFindUniqueOrThrowArgs>(args: SelectSubset<T, FacultyOrSchoolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FacultyOrSchoolClient<$Result.GetResult<Prisma.$FacultyOrSchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FacultyOrSchool that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyOrSchoolFindFirstArgs} args - Arguments to find a FacultyOrSchool
     * @example
     * // Get one FacultyOrSchool
     * const facultyOrSchool = await prisma.facultyOrSchool.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FacultyOrSchoolFindFirstArgs>(args?: SelectSubset<T, FacultyOrSchoolFindFirstArgs<ExtArgs>>): Prisma__FacultyOrSchoolClient<$Result.GetResult<Prisma.$FacultyOrSchoolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FacultyOrSchool that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyOrSchoolFindFirstOrThrowArgs} args - Arguments to find a FacultyOrSchool
     * @example
     * // Get one FacultyOrSchool
     * const facultyOrSchool = await prisma.facultyOrSchool.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FacultyOrSchoolFindFirstOrThrowArgs>(args?: SelectSubset<T, FacultyOrSchoolFindFirstOrThrowArgs<ExtArgs>>): Prisma__FacultyOrSchoolClient<$Result.GetResult<Prisma.$FacultyOrSchoolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FacultyOrSchools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyOrSchoolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FacultyOrSchools
     * const facultyOrSchools = await prisma.facultyOrSchool.findMany()
     * 
     * // Get first 10 FacultyOrSchools
     * const facultyOrSchools = await prisma.facultyOrSchool.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const facultyOrSchoolWithIdOnly = await prisma.facultyOrSchool.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FacultyOrSchoolFindManyArgs>(args?: SelectSubset<T, FacultyOrSchoolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacultyOrSchoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FacultyOrSchool.
     * @param {FacultyOrSchoolCreateArgs} args - Arguments to create a FacultyOrSchool.
     * @example
     * // Create one FacultyOrSchool
     * const FacultyOrSchool = await prisma.facultyOrSchool.create({
     *   data: {
     *     // ... data to create a FacultyOrSchool
     *   }
     * })
     * 
     */
    create<T extends FacultyOrSchoolCreateArgs>(args: SelectSubset<T, FacultyOrSchoolCreateArgs<ExtArgs>>): Prisma__FacultyOrSchoolClient<$Result.GetResult<Prisma.$FacultyOrSchoolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FacultyOrSchools.
     * @param {FacultyOrSchoolCreateManyArgs} args - Arguments to create many FacultyOrSchools.
     * @example
     * // Create many FacultyOrSchools
     * const facultyOrSchool = await prisma.facultyOrSchool.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FacultyOrSchoolCreateManyArgs>(args?: SelectSubset<T, FacultyOrSchoolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FacultyOrSchools and returns the data saved in the database.
     * @param {FacultyOrSchoolCreateManyAndReturnArgs} args - Arguments to create many FacultyOrSchools.
     * @example
     * // Create many FacultyOrSchools
     * const facultyOrSchool = await prisma.facultyOrSchool.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FacultyOrSchools and only return the `id`
     * const facultyOrSchoolWithIdOnly = await prisma.facultyOrSchool.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FacultyOrSchoolCreateManyAndReturnArgs>(args?: SelectSubset<T, FacultyOrSchoolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacultyOrSchoolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FacultyOrSchool.
     * @param {FacultyOrSchoolDeleteArgs} args - Arguments to delete one FacultyOrSchool.
     * @example
     * // Delete one FacultyOrSchool
     * const FacultyOrSchool = await prisma.facultyOrSchool.delete({
     *   where: {
     *     // ... filter to delete one FacultyOrSchool
     *   }
     * })
     * 
     */
    delete<T extends FacultyOrSchoolDeleteArgs>(args: SelectSubset<T, FacultyOrSchoolDeleteArgs<ExtArgs>>): Prisma__FacultyOrSchoolClient<$Result.GetResult<Prisma.$FacultyOrSchoolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FacultyOrSchool.
     * @param {FacultyOrSchoolUpdateArgs} args - Arguments to update one FacultyOrSchool.
     * @example
     * // Update one FacultyOrSchool
     * const facultyOrSchool = await prisma.facultyOrSchool.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FacultyOrSchoolUpdateArgs>(args: SelectSubset<T, FacultyOrSchoolUpdateArgs<ExtArgs>>): Prisma__FacultyOrSchoolClient<$Result.GetResult<Prisma.$FacultyOrSchoolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FacultyOrSchools.
     * @param {FacultyOrSchoolDeleteManyArgs} args - Arguments to filter FacultyOrSchools to delete.
     * @example
     * // Delete a few FacultyOrSchools
     * const { count } = await prisma.facultyOrSchool.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FacultyOrSchoolDeleteManyArgs>(args?: SelectSubset<T, FacultyOrSchoolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacultyOrSchools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyOrSchoolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FacultyOrSchools
     * const facultyOrSchool = await prisma.facultyOrSchool.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FacultyOrSchoolUpdateManyArgs>(args: SelectSubset<T, FacultyOrSchoolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacultyOrSchools and returns the data updated in the database.
     * @param {FacultyOrSchoolUpdateManyAndReturnArgs} args - Arguments to update many FacultyOrSchools.
     * @example
     * // Update many FacultyOrSchools
     * const facultyOrSchool = await prisma.facultyOrSchool.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FacultyOrSchools and only return the `id`
     * const facultyOrSchoolWithIdOnly = await prisma.facultyOrSchool.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FacultyOrSchoolUpdateManyAndReturnArgs>(args: SelectSubset<T, FacultyOrSchoolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacultyOrSchoolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FacultyOrSchool.
     * @param {FacultyOrSchoolUpsertArgs} args - Arguments to update or create a FacultyOrSchool.
     * @example
     * // Update or create a FacultyOrSchool
     * const facultyOrSchool = await prisma.facultyOrSchool.upsert({
     *   create: {
     *     // ... data to create a FacultyOrSchool
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FacultyOrSchool we want to update
     *   }
     * })
     */
    upsert<T extends FacultyOrSchoolUpsertArgs>(args: SelectSubset<T, FacultyOrSchoolUpsertArgs<ExtArgs>>): Prisma__FacultyOrSchoolClient<$Result.GetResult<Prisma.$FacultyOrSchoolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FacultyOrSchools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyOrSchoolCountArgs} args - Arguments to filter FacultyOrSchools to count.
     * @example
     * // Count the number of FacultyOrSchools
     * const count = await prisma.facultyOrSchool.count({
     *   where: {
     *     // ... the filter for the FacultyOrSchools we want to count
     *   }
     * })
    **/
    count<T extends FacultyOrSchoolCountArgs>(
      args?: Subset<T, FacultyOrSchoolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacultyOrSchoolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FacultyOrSchool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyOrSchoolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FacultyOrSchoolAggregateArgs>(args: Subset<T, FacultyOrSchoolAggregateArgs>): Prisma.PrismaPromise<GetFacultyOrSchoolAggregateType<T>>

    /**
     * Group by FacultyOrSchool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyOrSchoolGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FacultyOrSchoolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacultyOrSchoolGroupByArgs['orderBy'] }
        : { orderBy?: FacultyOrSchoolGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FacultyOrSchoolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacultyOrSchoolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FacultyOrSchool model
   */
  readonly fields: FacultyOrSchoolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FacultyOrSchool.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FacultyOrSchoolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    departments<T extends FacultyOrSchool$departmentsArgs<ExtArgs> = {}>(args?: Subset<T, FacultyOrSchool$departmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    admins<T extends FacultyOrSchool$adminsArgs<ExtArgs> = {}>(args?: Subset<T, FacultyOrSchool$adminsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FacultyOrSchool model
   */
  interface FacultyOrSchoolFieldRefs {
    readonly id: FieldRef<"FacultyOrSchool", 'String'>
    readonly name: FieldRef<"FacultyOrSchool", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FacultyOrSchool findUnique
   */
  export type FacultyOrSchoolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyOrSchool
     */
    select?: FacultyOrSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultyOrSchool
     */
    omit?: FacultyOrSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyOrSchoolInclude<ExtArgs> | null
    /**
     * Filter, which FacultyOrSchool to fetch.
     */
    where: FacultyOrSchoolWhereUniqueInput
  }

  /**
   * FacultyOrSchool findUniqueOrThrow
   */
  export type FacultyOrSchoolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyOrSchool
     */
    select?: FacultyOrSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultyOrSchool
     */
    omit?: FacultyOrSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyOrSchoolInclude<ExtArgs> | null
    /**
     * Filter, which FacultyOrSchool to fetch.
     */
    where: FacultyOrSchoolWhereUniqueInput
  }

  /**
   * FacultyOrSchool findFirst
   */
  export type FacultyOrSchoolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyOrSchool
     */
    select?: FacultyOrSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultyOrSchool
     */
    omit?: FacultyOrSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyOrSchoolInclude<ExtArgs> | null
    /**
     * Filter, which FacultyOrSchool to fetch.
     */
    where?: FacultyOrSchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacultyOrSchools to fetch.
     */
    orderBy?: FacultyOrSchoolOrderByWithRelationInput | FacultyOrSchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacultyOrSchools.
     */
    cursor?: FacultyOrSchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacultyOrSchools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacultyOrSchools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacultyOrSchools.
     */
    distinct?: FacultyOrSchoolScalarFieldEnum | FacultyOrSchoolScalarFieldEnum[]
  }

  /**
   * FacultyOrSchool findFirstOrThrow
   */
  export type FacultyOrSchoolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyOrSchool
     */
    select?: FacultyOrSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultyOrSchool
     */
    omit?: FacultyOrSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyOrSchoolInclude<ExtArgs> | null
    /**
     * Filter, which FacultyOrSchool to fetch.
     */
    where?: FacultyOrSchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacultyOrSchools to fetch.
     */
    orderBy?: FacultyOrSchoolOrderByWithRelationInput | FacultyOrSchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacultyOrSchools.
     */
    cursor?: FacultyOrSchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacultyOrSchools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacultyOrSchools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacultyOrSchools.
     */
    distinct?: FacultyOrSchoolScalarFieldEnum | FacultyOrSchoolScalarFieldEnum[]
  }

  /**
   * FacultyOrSchool findMany
   */
  export type FacultyOrSchoolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyOrSchool
     */
    select?: FacultyOrSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultyOrSchool
     */
    omit?: FacultyOrSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyOrSchoolInclude<ExtArgs> | null
    /**
     * Filter, which FacultyOrSchools to fetch.
     */
    where?: FacultyOrSchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacultyOrSchools to fetch.
     */
    orderBy?: FacultyOrSchoolOrderByWithRelationInput | FacultyOrSchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FacultyOrSchools.
     */
    cursor?: FacultyOrSchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacultyOrSchools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacultyOrSchools.
     */
    skip?: number
    distinct?: FacultyOrSchoolScalarFieldEnum | FacultyOrSchoolScalarFieldEnum[]
  }

  /**
   * FacultyOrSchool create
   */
  export type FacultyOrSchoolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyOrSchool
     */
    select?: FacultyOrSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultyOrSchool
     */
    omit?: FacultyOrSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyOrSchoolInclude<ExtArgs> | null
    /**
     * The data needed to create a FacultyOrSchool.
     */
    data: XOR<FacultyOrSchoolCreateInput, FacultyOrSchoolUncheckedCreateInput>
  }

  /**
   * FacultyOrSchool createMany
   */
  export type FacultyOrSchoolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FacultyOrSchools.
     */
    data: FacultyOrSchoolCreateManyInput | FacultyOrSchoolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FacultyOrSchool createManyAndReturn
   */
  export type FacultyOrSchoolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyOrSchool
     */
    select?: FacultyOrSchoolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FacultyOrSchool
     */
    omit?: FacultyOrSchoolOmit<ExtArgs> | null
    /**
     * The data used to create many FacultyOrSchools.
     */
    data: FacultyOrSchoolCreateManyInput | FacultyOrSchoolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FacultyOrSchool update
   */
  export type FacultyOrSchoolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyOrSchool
     */
    select?: FacultyOrSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultyOrSchool
     */
    omit?: FacultyOrSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyOrSchoolInclude<ExtArgs> | null
    /**
     * The data needed to update a FacultyOrSchool.
     */
    data: XOR<FacultyOrSchoolUpdateInput, FacultyOrSchoolUncheckedUpdateInput>
    /**
     * Choose, which FacultyOrSchool to update.
     */
    where: FacultyOrSchoolWhereUniqueInput
  }

  /**
   * FacultyOrSchool updateMany
   */
  export type FacultyOrSchoolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FacultyOrSchools.
     */
    data: XOR<FacultyOrSchoolUpdateManyMutationInput, FacultyOrSchoolUncheckedUpdateManyInput>
    /**
     * Filter which FacultyOrSchools to update
     */
    where?: FacultyOrSchoolWhereInput
    /**
     * Limit how many FacultyOrSchools to update.
     */
    limit?: number
  }

  /**
   * FacultyOrSchool updateManyAndReturn
   */
  export type FacultyOrSchoolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyOrSchool
     */
    select?: FacultyOrSchoolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FacultyOrSchool
     */
    omit?: FacultyOrSchoolOmit<ExtArgs> | null
    /**
     * The data used to update FacultyOrSchools.
     */
    data: XOR<FacultyOrSchoolUpdateManyMutationInput, FacultyOrSchoolUncheckedUpdateManyInput>
    /**
     * Filter which FacultyOrSchools to update
     */
    where?: FacultyOrSchoolWhereInput
    /**
     * Limit how many FacultyOrSchools to update.
     */
    limit?: number
  }

  /**
   * FacultyOrSchool upsert
   */
  export type FacultyOrSchoolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyOrSchool
     */
    select?: FacultyOrSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultyOrSchool
     */
    omit?: FacultyOrSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyOrSchoolInclude<ExtArgs> | null
    /**
     * The filter to search for the FacultyOrSchool to update in case it exists.
     */
    where: FacultyOrSchoolWhereUniqueInput
    /**
     * In case the FacultyOrSchool found by the `where` argument doesn't exist, create a new FacultyOrSchool with this data.
     */
    create: XOR<FacultyOrSchoolCreateInput, FacultyOrSchoolUncheckedCreateInput>
    /**
     * In case the FacultyOrSchool was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacultyOrSchoolUpdateInput, FacultyOrSchoolUncheckedUpdateInput>
  }

  /**
   * FacultyOrSchool delete
   */
  export type FacultyOrSchoolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyOrSchool
     */
    select?: FacultyOrSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultyOrSchool
     */
    omit?: FacultyOrSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyOrSchoolInclude<ExtArgs> | null
    /**
     * Filter which FacultyOrSchool to delete.
     */
    where: FacultyOrSchoolWhereUniqueInput
  }

  /**
   * FacultyOrSchool deleteMany
   */
  export type FacultyOrSchoolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacultyOrSchools to delete
     */
    where?: FacultyOrSchoolWhereInput
    /**
     * Limit how many FacultyOrSchools to delete.
     */
    limit?: number
  }

  /**
   * FacultyOrSchool.departments
   */
  export type FacultyOrSchool$departmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    cursor?: DepartmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * FacultyOrSchool.admins
   */
  export type FacultyOrSchool$adminsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    cursor?: AdminWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * FacultyOrSchool without action
   */
  export type FacultyOrSchoolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyOrSchool
     */
    select?: FacultyOrSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultyOrSchool
     */
    omit?: FacultyOrSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyOrSchoolInclude<ExtArgs> | null
  }


  /**
   * Model Department
   */

  export type AggregateDepartment = {
    _count: DepartmentCountAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  export type DepartmentMinAggregateOutputType = {
    id: string | null
    name: string | null
    facultyOrSchoolId: string | null
  }

  export type DepartmentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    facultyOrSchoolId: string | null
  }

  export type DepartmentCountAggregateOutputType = {
    id: number
    name: number
    facultyOrSchoolId: number
    _all: number
  }


  export type DepartmentMinAggregateInputType = {
    id?: true
    name?: true
    facultyOrSchoolId?: true
  }

  export type DepartmentMaxAggregateInputType = {
    id?: true
    name?: true
    facultyOrSchoolId?: true
  }

  export type DepartmentCountAggregateInputType = {
    id?: true
    name?: true
    facultyOrSchoolId?: true
    _all?: true
  }

  export type DepartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Department to aggregate.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Departments
    **/
    _count?: true | DepartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentMaxAggregateInputType
  }

  export type GetDepartmentAggregateType<T extends DepartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartment[P]>
      : GetScalarType<T[P], AggregateDepartment[P]>
  }




  export type DepartmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithAggregationInput | DepartmentOrderByWithAggregationInput[]
    by: DepartmentScalarFieldEnum[] | DepartmentScalarFieldEnum
    having?: DepartmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentCountAggregateInputType | true
    _min?: DepartmentMinAggregateInputType
    _max?: DepartmentMaxAggregateInputType
  }

  export type DepartmentGroupByOutputType = {
    id: string
    name: string
    facultyOrSchoolId: string
    _count: DepartmentCountAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  type GetDepartmentGroupByPayload<T extends DepartmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
        }
      >
    >


  export type DepartmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    facultyOrSchoolId?: boolean
    facultyOrSchool?: boolean | FacultyOrSchoolDefaultArgs<ExtArgs>
    courses?: boolean | Department$coursesArgs<ExtArgs>
    invigilators?: boolean | Department$invigilatorsArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    facultyOrSchoolId?: boolean
    facultyOrSchool?: boolean | FacultyOrSchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    facultyOrSchoolId?: boolean
    facultyOrSchool?: boolean | FacultyOrSchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectScalar = {
    id?: boolean
    name?: boolean
    facultyOrSchoolId?: boolean
  }

  export type DepartmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "facultyOrSchoolId", ExtArgs["result"]["department"]>
  export type DepartmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facultyOrSchool?: boolean | FacultyOrSchoolDefaultArgs<ExtArgs>
    courses?: boolean | Department$coursesArgs<ExtArgs>
    invigilators?: boolean | Department$invigilatorsArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DepartmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facultyOrSchool?: boolean | FacultyOrSchoolDefaultArgs<ExtArgs>
  }
  export type DepartmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facultyOrSchool?: boolean | FacultyOrSchoolDefaultArgs<ExtArgs>
  }

  export type $DepartmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Department"
    objects: {
      facultyOrSchool: Prisma.$FacultyOrSchoolPayload<ExtArgs>
      courses: Prisma.$CoursePayload<ExtArgs>[]
      invigilators: Prisma.$InvigilatorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      facultyOrSchoolId: string
    }, ExtArgs["result"]["department"]>
    composites: {}
  }

  type DepartmentGetPayload<S extends boolean | null | undefined | DepartmentDefaultArgs> = $Result.GetResult<Prisma.$DepartmentPayload, S>

  type DepartmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepartmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartmentCountAggregateInputType | true
    }

  export interface DepartmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Department'], meta: { name: 'Department' } }
    /**
     * Find zero or one Department that matches the filter.
     * @param {DepartmentFindUniqueArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepartmentFindUniqueArgs>(args: SelectSubset<T, DepartmentFindUniqueArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Department that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepartmentFindUniqueOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepartmentFindUniqueOrThrowArgs>(args: SelectSubset<T, DepartmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepartmentFindFirstArgs>(args?: SelectSubset<T, DepartmentFindFirstArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepartmentFindFirstOrThrowArgs>(args?: SelectSubset<T, DepartmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.department.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.department.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const departmentWithIdOnly = await prisma.department.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepartmentFindManyArgs>(args?: SelectSubset<T, DepartmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Department.
     * @param {DepartmentCreateArgs} args - Arguments to create a Department.
     * @example
     * // Create one Department
     * const Department = await prisma.department.create({
     *   data: {
     *     // ... data to create a Department
     *   }
     * })
     * 
     */
    create<T extends DepartmentCreateArgs>(args: SelectSubset<T, DepartmentCreateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Departments.
     * @param {DepartmentCreateManyArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepartmentCreateManyArgs>(args?: SelectSubset<T, DepartmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Departments and returns the data saved in the database.
     * @param {DepartmentCreateManyAndReturnArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Departments and only return the `id`
     * const departmentWithIdOnly = await prisma.department.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepartmentCreateManyAndReturnArgs>(args?: SelectSubset<T, DepartmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Department.
     * @param {DepartmentDeleteArgs} args - Arguments to delete one Department.
     * @example
     * // Delete one Department
     * const Department = await prisma.department.delete({
     *   where: {
     *     // ... filter to delete one Department
     *   }
     * })
     * 
     */
    delete<T extends DepartmentDeleteArgs>(args: SelectSubset<T, DepartmentDeleteArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Department.
     * @param {DepartmentUpdateArgs} args - Arguments to update one Department.
     * @example
     * // Update one Department
     * const department = await prisma.department.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepartmentUpdateArgs>(args: SelectSubset<T, DepartmentUpdateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Departments.
     * @param {DepartmentDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.department.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepartmentDeleteManyArgs>(args?: SelectSubset<T, DepartmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepartmentUpdateManyArgs>(args: SelectSubset<T, DepartmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments and returns the data updated in the database.
     * @param {DepartmentUpdateManyAndReturnArgs} args - Arguments to update many Departments.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Departments and only return the `id`
     * const departmentWithIdOnly = await prisma.department.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DepartmentUpdateManyAndReturnArgs>(args: SelectSubset<T, DepartmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Department.
     * @param {DepartmentUpsertArgs} args - Arguments to update or create a Department.
     * @example
     * // Update or create a Department
     * const department = await prisma.department.upsert({
     *   create: {
     *     // ... data to create a Department
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Department we want to update
     *   }
     * })
     */
    upsert<T extends DepartmentUpsertArgs>(args: SelectSubset<T, DepartmentUpsertArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.department.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends DepartmentCountArgs>(
      args?: Subset<T, DepartmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DepartmentAggregateArgs>(args: Subset<T, DepartmentAggregateArgs>): Prisma.PrismaPromise<GetDepartmentAggregateType<T>>

    /**
     * Group by Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DepartmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartmentGroupByArgs['orderBy'] }
        : { orderBy?: DepartmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DepartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Department model
   */
  readonly fields: DepartmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Department.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    facultyOrSchool<T extends FacultyOrSchoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FacultyOrSchoolDefaultArgs<ExtArgs>>): Prisma__FacultyOrSchoolClient<$Result.GetResult<Prisma.$FacultyOrSchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    courses<T extends Department$coursesArgs<ExtArgs> = {}>(args?: Subset<T, Department$coursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invigilators<T extends Department$invigilatorsArgs<ExtArgs> = {}>(args?: Subset<T, Department$invigilatorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvigilatorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Department model
   */
  interface DepartmentFieldRefs {
    readonly id: FieldRef<"Department", 'String'>
    readonly name: FieldRef<"Department", 'String'>
    readonly facultyOrSchoolId: FieldRef<"Department", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Department findUnique
   */
  export type DepartmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findUniqueOrThrow
   */
  export type DepartmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findFirst
   */
  export type DepartmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findFirstOrThrow
   */
  export type DepartmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findMany
   */
  export type DepartmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department create
   */
  export type DepartmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Department.
     */
    data: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
  }

  /**
   * Department createMany
   */
  export type DepartmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Department createManyAndReturn
   */
  export type DepartmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Department update
   */
  export type DepartmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Department.
     */
    data: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
    /**
     * Choose, which Department to update.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department updateMany
   */
  export type DepartmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
  }

  /**
   * Department updateManyAndReturn
   */
  export type DepartmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Department upsert
   */
  export type DepartmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Department to update in case it exists.
     */
    where: DepartmentWhereUniqueInput
    /**
     * In case the Department found by the `where` argument doesn't exist, create a new Department with this data.
     */
    create: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
    /**
     * In case the Department was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
  }

  /**
   * Department delete
   */
  export type DepartmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter which Department to delete.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department deleteMany
   */
  export type DepartmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departments to delete
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to delete.
     */
    limit?: number
  }

  /**
   * Department.courses
   */
  export type Department$coursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    cursor?: CourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Department.invigilators
   */
  export type Department$invigilatorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invigilator
     */
    select?: InvigilatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invigilator
     */
    omit?: InvigilatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvigilatorInclude<ExtArgs> | null
    where?: InvigilatorWhereInput
    orderBy?: InvigilatorOrderByWithRelationInput | InvigilatorOrderByWithRelationInput[]
    cursor?: InvigilatorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvigilatorScalarFieldEnum | InvigilatorScalarFieldEnum[]
  }

  /**
   * Department without action
   */
  export type DepartmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
  }


  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.CourseType | null
    code: string | null
    departmentId: string | null
  }

  export type CourseMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.CourseType | null
    code: string | null
    departmentId: string | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    name: number
    type: number
    code: number
    departmentId: number
    _all: number
  }


  export type CourseMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    code?: true
    departmentId?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    code?: true
    departmentId?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    code?: true
    departmentId?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: string
    name: string
    type: $Enums.CourseType
    code: string
    departmentId: string
    _count: CourseCountAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    code?: boolean
    departmentId?: boolean
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    programmes?: boolean | Course$programmesArgs<ExtArgs>
    courseUnits?: boolean | Course$courseUnitsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    code?: boolean
    departmentId?: boolean
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    code?: boolean
    departmentId?: boolean
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    code?: boolean
    departmentId?: boolean
  }

  export type CourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "code" | "departmentId", ExtArgs["result"]["course"]>
  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    programmes?: boolean | Course$programmesArgs<ExtArgs>
    courseUnits?: boolean | Course$courseUnitsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }
  export type CourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }

  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      department: Prisma.$DepartmentPayload<ExtArgs>
      programmes: Prisma.$ProgrammePayload<ExtArgs>[]
      courseUnits: Prisma.$CourseUnitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: $Enums.CourseType
      code: string
      departmentId: string
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseFindManyArgs>(args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends CourseCreateArgs>(args: SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCreateManyArgs>(args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {CourseCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends CourseDeleteArgs>(args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseUpdateArgs>(args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseUpdateManyArgs>(args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {CourseUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CourseUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    department<T extends DepartmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepartmentDefaultArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    programmes<T extends Course$programmesArgs<ExtArgs> = {}>(args?: Subset<T, Course$programmesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgrammePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    courseUnits<T extends Course$courseUnitsArgs<ExtArgs> = {}>(args?: Subset<T, Course$courseUnitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseUnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Course model
   */
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'String'>
    readonly name: FieldRef<"Course", 'String'>
    readonly type: FieldRef<"Course", 'CourseType'>
    readonly code: FieldRef<"Course", 'String'>
    readonly departmentId: FieldRef<"Course", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course createManyAndReturn
   */
  export type CourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course updateManyAndReturn
   */
  export type CourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }

  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Course.programmes
   */
  export type Course$programmesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Programme
     */
    select?: ProgrammeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Programme
     */
    omit?: ProgrammeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgrammeInclude<ExtArgs> | null
    where?: ProgrammeWhereInput
    orderBy?: ProgrammeOrderByWithRelationInput | ProgrammeOrderByWithRelationInput[]
    cursor?: ProgrammeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgrammeScalarFieldEnum | ProgrammeScalarFieldEnum[]
  }

  /**
   * Course.courseUnits
   */
  export type Course$courseUnitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseUnit
     */
    select?: CourseUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseUnit
     */
    omit?: CourseUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseUnitInclude<ExtArgs> | null
    where?: CourseUnitWhereInput
    orderBy?: CourseUnitOrderByWithRelationInput | CourseUnitOrderByWithRelationInput[]
    cursor?: CourseUnitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseUnitScalarFieldEnum | CourseUnitScalarFieldEnum[]
  }

  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    otherNames: 'otherNames',
    lastName: 'lastName',
    studentNo: 'studentNo',
    regNo: 'regNo',
    gender: 'gender',
    studyYear: 'studyYear',
    campus: 'campus',
    academicYear: 'academicYear',
    currentSemester: 'currentSemester',
    picture: 'picture',
    paymentStatus: 'paymentStatus',
    permitStatus: 'permitStatus',
    programmeId: 'programmeId'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const InvigilatorScalarFieldEnum: {
    id: 'id',
    invigilatorNumber: 'invigilatorNumber',
    title: 'title',
    firstName: 'firstName',
    otherNames: 'otherNames',
    lastName: 'lastName',
    picture: 'picture',
    departmentId: 'departmentId'
  };

  export type InvigilatorScalarFieldEnum = (typeof InvigilatorScalarFieldEnum)[keyof typeof InvigilatorScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    otherNames: 'otherNames',
    lastName: 'lastName',
    picture: 'picture',
    facultyOrSchoolId: 'facultyOrSchoolId'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const CourseUnitScalarFieldEnum: {
    id: 'id',
    code: 'code',
    title: 'title',
    credits: 'credits',
    year: 'year',
    semester: 'semester',
    category: 'category',
    courseName: 'courseName'
  };

  export type CourseUnitScalarFieldEnum = (typeof CourseUnitScalarFieldEnum)[keyof typeof CourseUnitScalarFieldEnum]


  export const EnrolledCourseUnitScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    courseUnitId: 'courseUnitId',
    attempt: 'attempt',
    year: 'year',
    semester: 'semester',
    isInvigilatorApproved: 'isInvigilatorApproved',
    invigilatorApprovedAt: 'invigilatorApprovedAt',
    approvedBy: 'approvedBy'
  };

  export type EnrolledCourseUnitScalarFieldEnum = (typeof EnrolledCourseUnitScalarFieldEnum)[keyof typeof EnrolledCourseUnitScalarFieldEnum]


  export const ExamScalarFieldEnum: {
    id: 'id',
    courseUnitId: 'courseUnitId',
    examDate: 'examDate',
    startTime: 'startTime',
    endTime: 'endTime',
    venue: 'venue',
    isApproved: 'isApproved',
    approvedAt: 'approvedAt'
  };

  export type ExamScalarFieldEnum = (typeof ExamScalarFieldEnum)[keyof typeof ExamScalarFieldEnum]


  export const ExamAssignmentScalarFieldEnum: {
    id: 'id',
    invigilatorId: 'invigilatorId',
    examId: 'examId'
  };

  export type ExamAssignmentScalarFieldEnum = (typeof ExamAssignmentScalarFieldEnum)[keyof typeof ExamAssignmentScalarFieldEnum]


  export const StudentQrCodeScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    qrCode: 'qrCode',
    semester: 'semester',
    issuedAt: 'issuedAt',
    expiresAt: 'expiresAt',
    isActive: 'isActive'
  };

  export type StudentQrCodeScalarFieldEnum = (typeof StudentQrCodeScalarFieldEnum)[keyof typeof StudentQrCodeScalarFieldEnum]


  export const ProgrammeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    programme: 'programme',
    courseId: 'courseId'
  };

  export type ProgrammeScalarFieldEnum = (typeof ProgrammeScalarFieldEnum)[keyof typeof ProgrammeScalarFieldEnum]


  export const FacultyOrSchoolScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type FacultyOrSchoolScalarFieldEnum = (typeof FacultyOrSchoolScalarFieldEnum)[keyof typeof FacultyOrSchoolScalarFieldEnum]


  export const DepartmentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    facultyOrSchoolId: 'facultyOrSchoolId'
  };

  export type DepartmentScalarFieldEnum = (typeof DepartmentScalarFieldEnum)[keyof typeof DepartmentScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    code: 'code',
    departmentId: 'departmentId'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Semester'
   */
  export type EnumSemesterFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Semester'>
    


  /**
   * Reference to a field of type 'Semester[]'
   */
  export type ListEnumSemesterFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Semester[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'PermitStatus'
   */
  export type EnumPermitStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PermitStatus'>
    


  /**
   * Reference to a field of type 'PermitStatus[]'
   */
  export type ListEnumPermitStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PermitStatus[]'>
    


  /**
   * Reference to a field of type 'CourseCategory'
   */
  export type EnumCourseCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CourseCategory'>
    


  /**
   * Reference to a field of type 'CourseCategory[]'
   */
  export type ListEnumCourseCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CourseCategory[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'StudyMode'
   */
  export type EnumStudyModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StudyMode'>
    


  /**
   * Reference to a field of type 'StudyMode[]'
   */
  export type ListEnumStudyModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StudyMode[]'>
    


  /**
   * Reference to a field of type 'CourseType'
   */
  export type EnumCourseTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CourseType'>
    


  /**
   * Reference to a field of type 'CourseType[]'
   */
  export type ListEnumCourseTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CourseType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    student?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
    invigilator?: XOR<InvigilatorNullableScalarRelationFilter, InvigilatorWhereInput> | null
    admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    student?: StudentOrderByWithRelationInput
    invigilator?: InvigilatorOrderByWithRelationInput
    admin?: AdminOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    student?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
    invigilator?: XOR<InvigilatorNullableScalarRelationFilter, InvigilatorWhereInput> | null
    admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: StringFilter<"Student"> | string
    firstName?: StringFilter<"Student"> | string
    otherNames?: StringNullableFilter<"Student"> | string | null
    lastName?: StringFilter<"Student"> | string
    studentNo?: StringFilter<"Student"> | string
    regNo?: StringFilter<"Student"> | string
    gender?: EnumGenderFilter<"Student"> | $Enums.Gender
    studyYear?: IntFilter<"Student"> | number
    campus?: StringFilter<"Student"> | string
    academicYear?: StringFilter<"Student"> | string
    currentSemester?: EnumSemesterFilter<"Student"> | $Enums.Semester
    picture?: StringNullableFilter<"Student"> | string | null
    paymentStatus?: EnumPaymentStatusFilter<"Student"> | $Enums.PaymentStatus
    permitStatus?: EnumPermitStatusFilter<"Student"> | $Enums.PermitStatus
    programmeId?: StringFilter<"Student"> | string
    programme?: XOR<ProgrammeScalarRelationFilter, ProgrammeWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    enrolledUnits?: EnrolledCourseUnitListRelationFilter
    studentQrCodes?: StudentQrCodeListRelationFilter
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    otherNames?: SortOrderInput | SortOrder
    lastName?: SortOrder
    studentNo?: SortOrder
    regNo?: SortOrder
    gender?: SortOrder
    studyYear?: SortOrder
    campus?: SortOrder
    academicYear?: SortOrder
    currentSemester?: SortOrder
    picture?: SortOrderInput | SortOrder
    paymentStatus?: SortOrder
    permitStatus?: SortOrder
    programmeId?: SortOrder
    programme?: ProgrammeOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    enrolledUnits?: EnrolledCourseUnitOrderByRelationAggregateInput
    studentQrCodes?: StudentQrCodeOrderByRelationAggregateInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    studentNo?: string
    regNo?: string
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    firstName?: StringFilter<"Student"> | string
    otherNames?: StringNullableFilter<"Student"> | string | null
    lastName?: StringFilter<"Student"> | string
    gender?: EnumGenderFilter<"Student"> | $Enums.Gender
    studyYear?: IntFilter<"Student"> | number
    campus?: StringFilter<"Student"> | string
    academicYear?: StringFilter<"Student"> | string
    currentSemester?: EnumSemesterFilter<"Student"> | $Enums.Semester
    picture?: StringNullableFilter<"Student"> | string | null
    paymentStatus?: EnumPaymentStatusFilter<"Student"> | $Enums.PaymentStatus
    permitStatus?: EnumPermitStatusFilter<"Student"> | $Enums.PermitStatus
    programmeId?: StringFilter<"Student"> | string
    programme?: XOR<ProgrammeScalarRelationFilter, ProgrammeWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    enrolledUnits?: EnrolledCourseUnitListRelationFilter
    studentQrCodes?: StudentQrCodeListRelationFilter
  }, "id" | "studentNo" | "regNo">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    otherNames?: SortOrderInput | SortOrder
    lastName?: SortOrder
    studentNo?: SortOrder
    regNo?: SortOrder
    gender?: SortOrder
    studyYear?: SortOrder
    campus?: SortOrder
    academicYear?: SortOrder
    currentSemester?: SortOrder
    picture?: SortOrderInput | SortOrder
    paymentStatus?: SortOrder
    permitStatus?: SortOrder
    programmeId?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _avg?: StudentAvgOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
    _sum?: StudentSumOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Student"> | string
    firstName?: StringWithAggregatesFilter<"Student"> | string
    otherNames?: StringNullableWithAggregatesFilter<"Student"> | string | null
    lastName?: StringWithAggregatesFilter<"Student"> | string
    studentNo?: StringWithAggregatesFilter<"Student"> | string
    regNo?: StringWithAggregatesFilter<"Student"> | string
    gender?: EnumGenderWithAggregatesFilter<"Student"> | $Enums.Gender
    studyYear?: IntWithAggregatesFilter<"Student"> | number
    campus?: StringWithAggregatesFilter<"Student"> | string
    academicYear?: StringWithAggregatesFilter<"Student"> | string
    currentSemester?: EnumSemesterWithAggregatesFilter<"Student"> | $Enums.Semester
    picture?: StringNullableWithAggregatesFilter<"Student"> | string | null
    paymentStatus?: EnumPaymentStatusWithAggregatesFilter<"Student"> | $Enums.PaymentStatus
    permitStatus?: EnumPermitStatusWithAggregatesFilter<"Student"> | $Enums.PermitStatus
    programmeId?: StringWithAggregatesFilter<"Student"> | string
  }

  export type InvigilatorWhereInput = {
    AND?: InvigilatorWhereInput | InvigilatorWhereInput[]
    OR?: InvigilatorWhereInput[]
    NOT?: InvigilatorWhereInput | InvigilatorWhereInput[]
    id?: StringFilter<"Invigilator"> | string
    invigilatorNumber?: StringFilter<"Invigilator"> | string
    title?: StringFilter<"Invigilator"> | string
    firstName?: StringFilter<"Invigilator"> | string
    otherNames?: StringNullableFilter<"Invigilator"> | string | null
    lastName?: StringFilter<"Invigilator"> | string
    picture?: StringNullableFilter<"Invigilator"> | string | null
    departmentId?: StringFilter<"Invigilator"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    assignedExams?: ExamAssignmentListRelationFilter
    department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
  }

  export type InvigilatorOrderByWithRelationInput = {
    id?: SortOrder
    invigilatorNumber?: SortOrder
    title?: SortOrder
    firstName?: SortOrder
    otherNames?: SortOrderInput | SortOrder
    lastName?: SortOrder
    picture?: SortOrderInput | SortOrder
    departmentId?: SortOrder
    user?: UserOrderByWithRelationInput
    assignedExams?: ExamAssignmentOrderByRelationAggregateInput
    department?: DepartmentOrderByWithRelationInput
  }

  export type InvigilatorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    invigilatorNumber?: string
    AND?: InvigilatorWhereInput | InvigilatorWhereInput[]
    OR?: InvigilatorWhereInput[]
    NOT?: InvigilatorWhereInput | InvigilatorWhereInput[]
    title?: StringFilter<"Invigilator"> | string
    firstName?: StringFilter<"Invigilator"> | string
    otherNames?: StringNullableFilter<"Invigilator"> | string | null
    lastName?: StringFilter<"Invigilator"> | string
    picture?: StringNullableFilter<"Invigilator"> | string | null
    departmentId?: StringFilter<"Invigilator"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    assignedExams?: ExamAssignmentListRelationFilter
    department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
  }, "id" | "invigilatorNumber">

  export type InvigilatorOrderByWithAggregationInput = {
    id?: SortOrder
    invigilatorNumber?: SortOrder
    title?: SortOrder
    firstName?: SortOrder
    otherNames?: SortOrderInput | SortOrder
    lastName?: SortOrder
    picture?: SortOrderInput | SortOrder
    departmentId?: SortOrder
    _count?: InvigilatorCountOrderByAggregateInput
    _max?: InvigilatorMaxOrderByAggregateInput
    _min?: InvigilatorMinOrderByAggregateInput
  }

  export type InvigilatorScalarWhereWithAggregatesInput = {
    AND?: InvigilatorScalarWhereWithAggregatesInput | InvigilatorScalarWhereWithAggregatesInput[]
    OR?: InvigilatorScalarWhereWithAggregatesInput[]
    NOT?: InvigilatorScalarWhereWithAggregatesInput | InvigilatorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Invigilator"> | string
    invigilatorNumber?: StringWithAggregatesFilter<"Invigilator"> | string
    title?: StringWithAggregatesFilter<"Invigilator"> | string
    firstName?: StringWithAggregatesFilter<"Invigilator"> | string
    otherNames?: StringNullableWithAggregatesFilter<"Invigilator"> | string | null
    lastName?: StringWithAggregatesFilter<"Invigilator"> | string
    picture?: StringNullableWithAggregatesFilter<"Invigilator"> | string | null
    departmentId?: StringWithAggregatesFilter<"Invigilator"> | string
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: StringFilter<"Admin"> | string
    firstName?: StringFilter<"Admin"> | string
    otherNames?: StringNullableFilter<"Admin"> | string | null
    lastName?: StringFilter<"Admin"> | string
    picture?: StringNullableFilter<"Admin"> | string | null
    facultyOrSchoolId?: StringFilter<"Admin"> | string
    facultyOrSchool?: XOR<FacultyOrSchoolScalarRelationFilter, FacultyOrSchoolWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    otherNames?: SortOrderInput | SortOrder
    lastName?: SortOrder
    picture?: SortOrderInput | SortOrder
    facultyOrSchoolId?: SortOrder
    facultyOrSchool?: FacultyOrSchoolOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    firstName?: StringFilter<"Admin"> | string
    otherNames?: StringNullableFilter<"Admin"> | string | null
    lastName?: StringFilter<"Admin"> | string
    picture?: StringNullableFilter<"Admin"> | string | null
    facultyOrSchoolId?: StringFilter<"Admin"> | string
    facultyOrSchool?: XOR<FacultyOrSchoolScalarRelationFilter, FacultyOrSchoolWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    otherNames?: SortOrderInput | SortOrder
    lastName?: SortOrder
    picture?: SortOrderInput | SortOrder
    facultyOrSchoolId?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admin"> | string
    firstName?: StringWithAggregatesFilter<"Admin"> | string
    otherNames?: StringNullableWithAggregatesFilter<"Admin"> | string | null
    lastName?: StringWithAggregatesFilter<"Admin"> | string
    picture?: StringNullableWithAggregatesFilter<"Admin"> | string | null
    facultyOrSchoolId?: StringWithAggregatesFilter<"Admin"> | string
  }

  export type CourseUnitWhereInput = {
    AND?: CourseUnitWhereInput | CourseUnitWhereInput[]
    OR?: CourseUnitWhereInput[]
    NOT?: CourseUnitWhereInput | CourseUnitWhereInput[]
    id?: StringFilter<"CourseUnit"> | string
    code?: StringFilter<"CourseUnit"> | string
    title?: StringFilter<"CourseUnit"> | string
    credits?: IntFilter<"CourseUnit"> | number
    year?: IntFilter<"CourseUnit"> | number
    semester?: EnumSemesterFilter<"CourseUnit"> | $Enums.Semester
    category?: EnumCourseCategoryFilter<"CourseUnit"> | $Enums.CourseCategory
    courseName?: StringFilter<"CourseUnit"> | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    enrolledBy?: EnrolledCourseUnitListRelationFilter
    exams?: ExamListRelationFilter
  }

  export type CourseUnitOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    credits?: SortOrder
    year?: SortOrder
    semester?: SortOrder
    category?: SortOrder
    courseName?: SortOrder
    course?: CourseOrderByWithRelationInput
    enrolledBy?: EnrolledCourseUnitOrderByRelationAggregateInput
    exams?: ExamOrderByRelationAggregateInput
  }

  export type CourseUnitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code_courseName?: CourseUnitCodeCourseNameCompoundUniqueInput
    AND?: CourseUnitWhereInput | CourseUnitWhereInput[]
    OR?: CourseUnitWhereInput[]
    NOT?: CourseUnitWhereInput | CourseUnitWhereInput[]
    code?: StringFilter<"CourseUnit"> | string
    title?: StringFilter<"CourseUnit"> | string
    credits?: IntFilter<"CourseUnit"> | number
    year?: IntFilter<"CourseUnit"> | number
    semester?: EnumSemesterFilter<"CourseUnit"> | $Enums.Semester
    category?: EnumCourseCategoryFilter<"CourseUnit"> | $Enums.CourseCategory
    courseName?: StringFilter<"CourseUnit"> | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    enrolledBy?: EnrolledCourseUnitListRelationFilter
    exams?: ExamListRelationFilter
  }, "id" | "code_courseName">

  export type CourseUnitOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    credits?: SortOrder
    year?: SortOrder
    semester?: SortOrder
    category?: SortOrder
    courseName?: SortOrder
    _count?: CourseUnitCountOrderByAggregateInput
    _avg?: CourseUnitAvgOrderByAggregateInput
    _max?: CourseUnitMaxOrderByAggregateInput
    _min?: CourseUnitMinOrderByAggregateInput
    _sum?: CourseUnitSumOrderByAggregateInput
  }

  export type CourseUnitScalarWhereWithAggregatesInput = {
    AND?: CourseUnitScalarWhereWithAggregatesInput | CourseUnitScalarWhereWithAggregatesInput[]
    OR?: CourseUnitScalarWhereWithAggregatesInput[]
    NOT?: CourseUnitScalarWhereWithAggregatesInput | CourseUnitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CourseUnit"> | string
    code?: StringWithAggregatesFilter<"CourseUnit"> | string
    title?: StringWithAggregatesFilter<"CourseUnit"> | string
    credits?: IntWithAggregatesFilter<"CourseUnit"> | number
    year?: IntWithAggregatesFilter<"CourseUnit"> | number
    semester?: EnumSemesterWithAggregatesFilter<"CourseUnit"> | $Enums.Semester
    category?: EnumCourseCategoryWithAggregatesFilter<"CourseUnit"> | $Enums.CourseCategory
    courseName?: StringWithAggregatesFilter<"CourseUnit"> | string
  }

  export type EnrolledCourseUnitWhereInput = {
    AND?: EnrolledCourseUnitWhereInput | EnrolledCourseUnitWhereInput[]
    OR?: EnrolledCourseUnitWhereInput[]
    NOT?: EnrolledCourseUnitWhereInput | EnrolledCourseUnitWhereInput[]
    id?: StringFilter<"EnrolledCourseUnit"> | string
    studentId?: StringFilter<"EnrolledCourseUnit"> | string
    courseUnitId?: StringFilter<"EnrolledCourseUnit"> | string
    attempt?: IntFilter<"EnrolledCourseUnit"> | number
    year?: IntFilter<"EnrolledCourseUnit"> | number
    semester?: EnumSemesterFilter<"EnrolledCourseUnit"> | $Enums.Semester
    isInvigilatorApproved?: BoolFilter<"EnrolledCourseUnit"> | boolean
    invigilatorApprovedAt?: DateTimeNullableFilter<"EnrolledCourseUnit"> | Date | string | null
    approvedBy?: StringNullableFilter<"EnrolledCourseUnit"> | string | null
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    courseUnit?: XOR<CourseUnitScalarRelationFilter, CourseUnitWhereInput>
  }

  export type EnrolledCourseUnitOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    courseUnitId?: SortOrder
    attempt?: SortOrder
    year?: SortOrder
    semester?: SortOrder
    isInvigilatorApproved?: SortOrder
    invigilatorApprovedAt?: SortOrderInput | SortOrder
    approvedBy?: SortOrderInput | SortOrder
    student?: StudentOrderByWithRelationInput
    courseUnit?: CourseUnitOrderByWithRelationInput
  }

  export type EnrolledCourseUnitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    studentId_courseUnitId_attempt?: EnrolledCourseUnitStudentIdCourseUnitIdAttemptCompoundUniqueInput
    AND?: EnrolledCourseUnitWhereInput | EnrolledCourseUnitWhereInput[]
    OR?: EnrolledCourseUnitWhereInput[]
    NOT?: EnrolledCourseUnitWhereInput | EnrolledCourseUnitWhereInput[]
    studentId?: StringFilter<"EnrolledCourseUnit"> | string
    courseUnitId?: StringFilter<"EnrolledCourseUnit"> | string
    attempt?: IntFilter<"EnrolledCourseUnit"> | number
    year?: IntFilter<"EnrolledCourseUnit"> | number
    semester?: EnumSemesterFilter<"EnrolledCourseUnit"> | $Enums.Semester
    isInvigilatorApproved?: BoolFilter<"EnrolledCourseUnit"> | boolean
    invigilatorApprovedAt?: DateTimeNullableFilter<"EnrolledCourseUnit"> | Date | string | null
    approvedBy?: StringNullableFilter<"EnrolledCourseUnit"> | string | null
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    courseUnit?: XOR<CourseUnitScalarRelationFilter, CourseUnitWhereInput>
  }, "id" | "studentId_courseUnitId_attempt">

  export type EnrolledCourseUnitOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    courseUnitId?: SortOrder
    attempt?: SortOrder
    year?: SortOrder
    semester?: SortOrder
    isInvigilatorApproved?: SortOrder
    invigilatorApprovedAt?: SortOrderInput | SortOrder
    approvedBy?: SortOrderInput | SortOrder
    _count?: EnrolledCourseUnitCountOrderByAggregateInput
    _avg?: EnrolledCourseUnitAvgOrderByAggregateInput
    _max?: EnrolledCourseUnitMaxOrderByAggregateInput
    _min?: EnrolledCourseUnitMinOrderByAggregateInput
    _sum?: EnrolledCourseUnitSumOrderByAggregateInput
  }

  export type EnrolledCourseUnitScalarWhereWithAggregatesInput = {
    AND?: EnrolledCourseUnitScalarWhereWithAggregatesInput | EnrolledCourseUnitScalarWhereWithAggregatesInput[]
    OR?: EnrolledCourseUnitScalarWhereWithAggregatesInput[]
    NOT?: EnrolledCourseUnitScalarWhereWithAggregatesInput | EnrolledCourseUnitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EnrolledCourseUnit"> | string
    studentId?: StringWithAggregatesFilter<"EnrolledCourseUnit"> | string
    courseUnitId?: StringWithAggregatesFilter<"EnrolledCourseUnit"> | string
    attempt?: IntWithAggregatesFilter<"EnrolledCourseUnit"> | number
    year?: IntWithAggregatesFilter<"EnrolledCourseUnit"> | number
    semester?: EnumSemesterWithAggregatesFilter<"EnrolledCourseUnit"> | $Enums.Semester
    isInvigilatorApproved?: BoolWithAggregatesFilter<"EnrolledCourseUnit"> | boolean
    invigilatorApprovedAt?: DateTimeNullableWithAggregatesFilter<"EnrolledCourseUnit"> | Date | string | null
    approvedBy?: StringNullableWithAggregatesFilter<"EnrolledCourseUnit"> | string | null
  }

  export type ExamWhereInput = {
    AND?: ExamWhereInput | ExamWhereInput[]
    OR?: ExamWhereInput[]
    NOT?: ExamWhereInput | ExamWhereInput[]
    id?: StringFilter<"Exam"> | string
    courseUnitId?: StringFilter<"Exam"> | string
    examDate?: DateTimeFilter<"Exam"> | Date | string
    startTime?: DateTimeFilter<"Exam"> | Date | string
    endTime?: DateTimeFilter<"Exam"> | Date | string
    venue?: StringFilter<"Exam"> | string
    isApproved?: BoolFilter<"Exam"> | boolean
    approvedAt?: DateTimeNullableFilter<"Exam"> | Date | string | null
    courseUnit?: XOR<CourseUnitScalarRelationFilter, CourseUnitWhereInput>
    invigilators?: ExamAssignmentListRelationFilter
  }

  export type ExamOrderByWithRelationInput = {
    id?: SortOrder
    courseUnitId?: SortOrder
    examDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    venue?: SortOrder
    isApproved?: SortOrder
    approvedAt?: SortOrderInput | SortOrder
    courseUnit?: CourseUnitOrderByWithRelationInput
    invigilators?: ExamAssignmentOrderByRelationAggregateInput
  }

  export type ExamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    courseUnitId_examDate?: ExamCourseUnitIdExamDateCompoundUniqueInput
    AND?: ExamWhereInput | ExamWhereInput[]
    OR?: ExamWhereInput[]
    NOT?: ExamWhereInput | ExamWhereInput[]
    courseUnitId?: StringFilter<"Exam"> | string
    examDate?: DateTimeFilter<"Exam"> | Date | string
    startTime?: DateTimeFilter<"Exam"> | Date | string
    endTime?: DateTimeFilter<"Exam"> | Date | string
    venue?: StringFilter<"Exam"> | string
    isApproved?: BoolFilter<"Exam"> | boolean
    approvedAt?: DateTimeNullableFilter<"Exam"> | Date | string | null
    courseUnit?: XOR<CourseUnitScalarRelationFilter, CourseUnitWhereInput>
    invigilators?: ExamAssignmentListRelationFilter
  }, "id" | "courseUnitId_examDate">

  export type ExamOrderByWithAggregationInput = {
    id?: SortOrder
    courseUnitId?: SortOrder
    examDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    venue?: SortOrder
    isApproved?: SortOrder
    approvedAt?: SortOrderInput | SortOrder
    _count?: ExamCountOrderByAggregateInput
    _max?: ExamMaxOrderByAggregateInput
    _min?: ExamMinOrderByAggregateInput
  }

  export type ExamScalarWhereWithAggregatesInput = {
    AND?: ExamScalarWhereWithAggregatesInput | ExamScalarWhereWithAggregatesInput[]
    OR?: ExamScalarWhereWithAggregatesInput[]
    NOT?: ExamScalarWhereWithAggregatesInput | ExamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Exam"> | string
    courseUnitId?: StringWithAggregatesFilter<"Exam"> | string
    examDate?: DateTimeWithAggregatesFilter<"Exam"> | Date | string
    startTime?: DateTimeWithAggregatesFilter<"Exam"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"Exam"> | Date | string
    venue?: StringWithAggregatesFilter<"Exam"> | string
    isApproved?: BoolWithAggregatesFilter<"Exam"> | boolean
    approvedAt?: DateTimeNullableWithAggregatesFilter<"Exam"> | Date | string | null
  }

  export type ExamAssignmentWhereInput = {
    AND?: ExamAssignmentWhereInput | ExamAssignmentWhereInput[]
    OR?: ExamAssignmentWhereInput[]
    NOT?: ExamAssignmentWhereInput | ExamAssignmentWhereInput[]
    id?: StringFilter<"ExamAssignment"> | string
    invigilatorId?: StringFilter<"ExamAssignment"> | string
    examId?: StringFilter<"ExamAssignment"> | string
    invigilator?: XOR<InvigilatorScalarRelationFilter, InvigilatorWhereInput>
    exam?: XOR<ExamScalarRelationFilter, ExamWhereInput>
  }

  export type ExamAssignmentOrderByWithRelationInput = {
    id?: SortOrder
    invigilatorId?: SortOrder
    examId?: SortOrder
    invigilator?: InvigilatorOrderByWithRelationInput
    exam?: ExamOrderByWithRelationInput
  }

  export type ExamAssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    invigilatorId_examId?: ExamAssignmentInvigilatorIdExamIdCompoundUniqueInput
    AND?: ExamAssignmentWhereInput | ExamAssignmentWhereInput[]
    OR?: ExamAssignmentWhereInput[]
    NOT?: ExamAssignmentWhereInput | ExamAssignmentWhereInput[]
    invigilatorId?: StringFilter<"ExamAssignment"> | string
    examId?: StringFilter<"ExamAssignment"> | string
    invigilator?: XOR<InvigilatorScalarRelationFilter, InvigilatorWhereInput>
    exam?: XOR<ExamScalarRelationFilter, ExamWhereInput>
  }, "id" | "invigilatorId_examId">

  export type ExamAssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    invigilatorId?: SortOrder
    examId?: SortOrder
    _count?: ExamAssignmentCountOrderByAggregateInput
    _max?: ExamAssignmentMaxOrderByAggregateInput
    _min?: ExamAssignmentMinOrderByAggregateInput
  }

  export type ExamAssignmentScalarWhereWithAggregatesInput = {
    AND?: ExamAssignmentScalarWhereWithAggregatesInput | ExamAssignmentScalarWhereWithAggregatesInput[]
    OR?: ExamAssignmentScalarWhereWithAggregatesInput[]
    NOT?: ExamAssignmentScalarWhereWithAggregatesInput | ExamAssignmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExamAssignment"> | string
    invigilatorId?: StringWithAggregatesFilter<"ExamAssignment"> | string
    examId?: StringWithAggregatesFilter<"ExamAssignment"> | string
  }

  export type StudentQrCodeWhereInput = {
    AND?: StudentQrCodeWhereInput | StudentQrCodeWhereInput[]
    OR?: StudentQrCodeWhereInput[]
    NOT?: StudentQrCodeWhereInput | StudentQrCodeWhereInput[]
    id?: StringFilter<"StudentQrCode"> | string
    studentId?: StringFilter<"StudentQrCode"> | string
    qrCode?: StringNullableFilter<"StudentQrCode"> | string | null
    semester?: EnumSemesterFilter<"StudentQrCode"> | $Enums.Semester
    issuedAt?: DateTimeFilter<"StudentQrCode"> | Date | string
    expiresAt?: DateTimeFilter<"StudentQrCode"> | Date | string
    isActive?: BoolFilter<"StudentQrCode"> | boolean
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }

  export type StudentQrCodeOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    qrCode?: SortOrderInput | SortOrder
    semester?: SortOrder
    issuedAt?: SortOrder
    expiresAt?: SortOrder
    isActive?: SortOrder
    student?: StudentOrderByWithRelationInput
  }

  export type StudentQrCodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    studentId_semester?: StudentQrCodeStudentIdSemesterCompoundUniqueInput
    AND?: StudentQrCodeWhereInput | StudentQrCodeWhereInput[]
    OR?: StudentQrCodeWhereInput[]
    NOT?: StudentQrCodeWhereInput | StudentQrCodeWhereInput[]
    studentId?: StringFilter<"StudentQrCode"> | string
    qrCode?: StringNullableFilter<"StudentQrCode"> | string | null
    semester?: EnumSemesterFilter<"StudentQrCode"> | $Enums.Semester
    issuedAt?: DateTimeFilter<"StudentQrCode"> | Date | string
    expiresAt?: DateTimeFilter<"StudentQrCode"> | Date | string
    isActive?: BoolFilter<"StudentQrCode"> | boolean
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }, "id" | "studentId_semester">

  export type StudentQrCodeOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    qrCode?: SortOrderInput | SortOrder
    semester?: SortOrder
    issuedAt?: SortOrder
    expiresAt?: SortOrder
    isActive?: SortOrder
    _count?: StudentQrCodeCountOrderByAggregateInput
    _max?: StudentQrCodeMaxOrderByAggregateInput
    _min?: StudentQrCodeMinOrderByAggregateInput
  }

  export type StudentQrCodeScalarWhereWithAggregatesInput = {
    AND?: StudentQrCodeScalarWhereWithAggregatesInput | StudentQrCodeScalarWhereWithAggregatesInput[]
    OR?: StudentQrCodeScalarWhereWithAggregatesInput[]
    NOT?: StudentQrCodeScalarWhereWithAggregatesInput | StudentQrCodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StudentQrCode"> | string
    studentId?: StringWithAggregatesFilter<"StudentQrCode"> | string
    qrCode?: StringNullableWithAggregatesFilter<"StudentQrCode"> | string | null
    semester?: EnumSemesterWithAggregatesFilter<"StudentQrCode"> | $Enums.Semester
    issuedAt?: DateTimeWithAggregatesFilter<"StudentQrCode"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"StudentQrCode"> | Date | string
    isActive?: BoolWithAggregatesFilter<"StudentQrCode"> | boolean
  }

  export type ProgrammeWhereInput = {
    AND?: ProgrammeWhereInput | ProgrammeWhereInput[]
    OR?: ProgrammeWhereInput[]
    NOT?: ProgrammeWhereInput | ProgrammeWhereInput[]
    id?: StringFilter<"Programme"> | string
    name?: StringFilter<"Programme"> | string
    programme?: EnumStudyModeFilter<"Programme"> | $Enums.StudyMode
    courseId?: StringFilter<"Programme"> | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    students?: StudentListRelationFilter
  }

  export type ProgrammeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    programme?: SortOrder
    courseId?: SortOrder
    course?: CourseOrderByWithRelationInput
    students?: StudentOrderByRelationAggregateInput
  }

  export type ProgrammeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: ProgrammeWhereInput | ProgrammeWhereInput[]
    OR?: ProgrammeWhereInput[]
    NOT?: ProgrammeWhereInput | ProgrammeWhereInput[]
    programme?: EnumStudyModeFilter<"Programme"> | $Enums.StudyMode
    courseId?: StringFilter<"Programme"> | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    students?: StudentListRelationFilter
  }, "id" | "name">

  export type ProgrammeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    programme?: SortOrder
    courseId?: SortOrder
    _count?: ProgrammeCountOrderByAggregateInput
    _max?: ProgrammeMaxOrderByAggregateInput
    _min?: ProgrammeMinOrderByAggregateInput
  }

  export type ProgrammeScalarWhereWithAggregatesInput = {
    AND?: ProgrammeScalarWhereWithAggregatesInput | ProgrammeScalarWhereWithAggregatesInput[]
    OR?: ProgrammeScalarWhereWithAggregatesInput[]
    NOT?: ProgrammeScalarWhereWithAggregatesInput | ProgrammeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Programme"> | string
    name?: StringWithAggregatesFilter<"Programme"> | string
    programme?: EnumStudyModeWithAggregatesFilter<"Programme"> | $Enums.StudyMode
    courseId?: StringWithAggregatesFilter<"Programme"> | string
  }

  export type FacultyOrSchoolWhereInput = {
    AND?: FacultyOrSchoolWhereInput | FacultyOrSchoolWhereInput[]
    OR?: FacultyOrSchoolWhereInput[]
    NOT?: FacultyOrSchoolWhereInput | FacultyOrSchoolWhereInput[]
    id?: StringFilter<"FacultyOrSchool"> | string
    name?: StringFilter<"FacultyOrSchool"> | string
    departments?: DepartmentListRelationFilter
    admins?: AdminListRelationFilter
  }

  export type FacultyOrSchoolOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    departments?: DepartmentOrderByRelationAggregateInput
    admins?: AdminOrderByRelationAggregateInput
  }

  export type FacultyOrSchoolWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: FacultyOrSchoolWhereInput | FacultyOrSchoolWhereInput[]
    OR?: FacultyOrSchoolWhereInput[]
    NOT?: FacultyOrSchoolWhereInput | FacultyOrSchoolWhereInput[]
    departments?: DepartmentListRelationFilter
    admins?: AdminListRelationFilter
  }, "id" | "name">

  export type FacultyOrSchoolOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: FacultyOrSchoolCountOrderByAggregateInput
    _max?: FacultyOrSchoolMaxOrderByAggregateInput
    _min?: FacultyOrSchoolMinOrderByAggregateInput
  }

  export type FacultyOrSchoolScalarWhereWithAggregatesInput = {
    AND?: FacultyOrSchoolScalarWhereWithAggregatesInput | FacultyOrSchoolScalarWhereWithAggregatesInput[]
    OR?: FacultyOrSchoolScalarWhereWithAggregatesInput[]
    NOT?: FacultyOrSchoolScalarWhereWithAggregatesInput | FacultyOrSchoolScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FacultyOrSchool"> | string
    name?: StringWithAggregatesFilter<"FacultyOrSchool"> | string
  }

  export type DepartmentWhereInput = {
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    id?: StringFilter<"Department"> | string
    name?: StringFilter<"Department"> | string
    facultyOrSchoolId?: StringFilter<"Department"> | string
    facultyOrSchool?: XOR<FacultyOrSchoolScalarRelationFilter, FacultyOrSchoolWhereInput>
    courses?: CourseListRelationFilter
    invigilators?: InvigilatorListRelationFilter
  }

  export type DepartmentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    facultyOrSchoolId?: SortOrder
    facultyOrSchool?: FacultyOrSchoolOrderByWithRelationInput
    courses?: CourseOrderByRelationAggregateInput
    invigilators?: InvigilatorOrderByRelationAggregateInput
  }

  export type DepartmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    name?: StringFilter<"Department"> | string
    facultyOrSchoolId?: StringFilter<"Department"> | string
    facultyOrSchool?: XOR<FacultyOrSchoolScalarRelationFilter, FacultyOrSchoolWhereInput>
    courses?: CourseListRelationFilter
    invigilators?: InvigilatorListRelationFilter
  }, "id">

  export type DepartmentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    facultyOrSchoolId?: SortOrder
    _count?: DepartmentCountOrderByAggregateInput
    _max?: DepartmentMaxOrderByAggregateInput
    _min?: DepartmentMinOrderByAggregateInput
  }

  export type DepartmentScalarWhereWithAggregatesInput = {
    AND?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    OR?: DepartmentScalarWhereWithAggregatesInput[]
    NOT?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Department"> | string
    name?: StringWithAggregatesFilter<"Department"> | string
    facultyOrSchoolId?: StringWithAggregatesFilter<"Department"> | string
  }

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: StringFilter<"Course"> | string
    name?: StringFilter<"Course"> | string
    type?: EnumCourseTypeFilter<"Course"> | $Enums.CourseType
    code?: StringFilter<"Course"> | string
    departmentId?: StringFilter<"Course"> | string
    department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
    programmes?: ProgrammeListRelationFilter
    courseUnits?: CourseUnitListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    code?: SortOrder
    departmentId?: SortOrder
    department?: DepartmentOrderByWithRelationInput
    programmes?: ProgrammeOrderByRelationAggregateInput
    courseUnits?: CourseUnitOrderByRelationAggregateInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    code?: string
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    type?: EnumCourseTypeFilter<"Course"> | $Enums.CourseType
    departmentId?: StringFilter<"Course"> | string
    department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
    programmes?: ProgrammeListRelationFilter
    courseUnits?: CourseUnitListRelationFilter
  }, "id" | "name" | "code">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    code?: SortOrder
    departmentId?: SortOrder
    _count?: CourseCountOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Course"> | string
    name?: StringWithAggregatesFilter<"Course"> | string
    type?: EnumCourseTypeWithAggregatesFilter<"Course"> | $Enums.CourseType
    code?: StringWithAggregatesFilter<"Course"> | string
    departmentId?: StringWithAggregatesFilter<"Course"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    student?: StudentCreateNestedOneWithoutUserInput
    invigilator?: InvigilatorCreateNestedOneWithoutUserInput
    admin?: AdminCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    student?: StudentUncheckedCreateNestedOneWithoutUserInput
    invigilator?: InvigilatorUncheckedCreateNestedOneWithoutUserInput
    admin?: AdminUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneWithoutUserNestedInput
    invigilator?: InvigilatorUpdateOneWithoutUserNestedInput
    admin?: AdminUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUncheckedUpdateOneWithoutUserNestedInput
    invigilator?: InvigilatorUncheckedUpdateOneWithoutUserNestedInput
    admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCreateInput = {
    firstName: string
    otherNames?: string | null
    lastName: string
    studentNo: string
    regNo: string
    gender: $Enums.Gender
    studyYear: number
    campus: string
    academicYear: string
    currentSemester: $Enums.Semester
    picture?: string | null
    paymentStatus?: $Enums.PaymentStatus
    permitStatus?: $Enums.PermitStatus
    programme: ProgrammeCreateNestedOneWithoutStudentsInput
    user: UserCreateNestedOneWithoutStudentInput
    enrolledUnits?: EnrolledCourseUnitCreateNestedManyWithoutStudentInput
    studentQrCodes?: StudentQrCodeCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    id: string
    firstName: string
    otherNames?: string | null
    lastName: string
    studentNo: string
    regNo: string
    gender: $Enums.Gender
    studyYear: number
    campus: string
    academicYear: string
    currentSemester: $Enums.Semester
    picture?: string | null
    paymentStatus?: $Enums.PaymentStatus
    permitStatus?: $Enums.PermitStatus
    programmeId: string
    enrolledUnits?: EnrolledCourseUnitUncheckedCreateNestedManyWithoutStudentInput
    studentQrCodes?: StudentQrCodeUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    otherNames?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    studentNo?: StringFieldUpdateOperationsInput | string
    regNo?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    studyYear?: IntFieldUpdateOperationsInput | number
    campus?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    currentSemester?: EnumSemesterFieldUpdateOperationsInput | $Enums.Semester
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    permitStatus?: EnumPermitStatusFieldUpdateOperationsInput | $Enums.PermitStatus
    programme?: ProgrammeUpdateOneRequiredWithoutStudentsNestedInput
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
    enrolledUnits?: EnrolledCourseUnitUpdateManyWithoutStudentNestedInput
    studentQrCodes?: StudentQrCodeUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    otherNames?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    studentNo?: StringFieldUpdateOperationsInput | string
    regNo?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    studyYear?: IntFieldUpdateOperationsInput | number
    campus?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    currentSemester?: EnumSemesterFieldUpdateOperationsInput | $Enums.Semester
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    permitStatus?: EnumPermitStatusFieldUpdateOperationsInput | $Enums.PermitStatus
    programmeId?: StringFieldUpdateOperationsInput | string
    enrolledUnits?: EnrolledCourseUnitUncheckedUpdateManyWithoutStudentNestedInput
    studentQrCodes?: StudentQrCodeUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    id: string
    firstName: string
    otherNames?: string | null
    lastName: string
    studentNo: string
    regNo: string
    gender: $Enums.Gender
    studyYear: number
    campus: string
    academicYear: string
    currentSemester: $Enums.Semester
    picture?: string | null
    paymentStatus?: $Enums.PaymentStatus
    permitStatus?: $Enums.PermitStatus
    programmeId: string
  }

  export type StudentUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    otherNames?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    studentNo?: StringFieldUpdateOperationsInput | string
    regNo?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    studyYear?: IntFieldUpdateOperationsInput | number
    campus?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    currentSemester?: EnumSemesterFieldUpdateOperationsInput | $Enums.Semester
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    permitStatus?: EnumPermitStatusFieldUpdateOperationsInput | $Enums.PermitStatus
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    otherNames?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    studentNo?: StringFieldUpdateOperationsInput | string
    regNo?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    studyYear?: IntFieldUpdateOperationsInput | number
    campus?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    currentSemester?: EnumSemesterFieldUpdateOperationsInput | $Enums.Semester
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    permitStatus?: EnumPermitStatusFieldUpdateOperationsInput | $Enums.PermitStatus
    programmeId?: StringFieldUpdateOperationsInput | string
  }

  export type InvigilatorCreateInput = {
    invigilatorNumber: string
    title: string
    firstName: string
    otherNames?: string | null
    lastName: string
    picture?: string | null
    user?: UserCreateNestedOneWithoutInvigilatorInput
    assignedExams?: ExamAssignmentCreateNestedManyWithoutInvigilatorInput
    department: DepartmentCreateNestedOneWithoutInvigilatorsInput
  }

  export type InvigilatorUncheckedCreateInput = {
    id?: string
    invigilatorNumber: string
    title: string
    firstName: string
    otherNames?: string | null
    lastName: string
    picture?: string | null
    departmentId: string
    assignedExams?: ExamAssignmentUncheckedCreateNestedManyWithoutInvigilatorInput
  }

  export type InvigilatorUpdateInput = {
    invigilatorNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    otherNames?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutInvigilatorNestedInput
    assignedExams?: ExamAssignmentUpdateManyWithoutInvigilatorNestedInput
    department?: DepartmentUpdateOneRequiredWithoutInvigilatorsNestedInput
  }

  export type InvigilatorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    invigilatorNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    otherNames?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    departmentId?: StringFieldUpdateOperationsInput | string
    assignedExams?: ExamAssignmentUncheckedUpdateManyWithoutInvigilatorNestedInput
  }

  export type InvigilatorCreateManyInput = {
    id?: string
    invigilatorNumber: string
    title: string
    firstName: string
    otherNames?: string | null
    lastName: string
    picture?: string | null
    departmentId: string
  }

  export type InvigilatorUpdateManyMutationInput = {
    invigilatorNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    otherNames?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InvigilatorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    invigilatorNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    otherNames?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    departmentId?: StringFieldUpdateOperationsInput | string
  }

  export type AdminCreateInput = {
    firstName: string
    otherNames?: string | null
    lastName: string
    picture?: string | null
    facultyOrSchool: FacultyOrSchoolCreateNestedOneWithoutAdminsInput
    user: UserCreateNestedOneWithoutAdminInput
  }

  export type AdminUncheckedCreateInput = {
    id: string
    firstName: string
    otherNames?: string | null
    lastName: string
    picture?: string | null
    facultyOrSchoolId: string
  }

  export type AdminUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    otherNames?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    facultyOrSchool?: FacultyOrSchoolUpdateOneRequiredWithoutAdminsNestedInput
    user?: UserUpdateOneRequiredWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    otherNames?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    facultyOrSchoolId?: StringFieldUpdateOperationsInput | string
  }

  export type AdminCreateManyInput = {
    id: string
    firstName: string
    otherNames?: string | null
    lastName: string
    picture?: string | null
    facultyOrSchoolId: string
  }

  export type AdminUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    otherNames?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    otherNames?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    facultyOrSchoolId?: StringFieldUpdateOperationsInput | string
  }

  export type CourseUnitCreateInput = {
    id?: string
    code: string
    title: string
    credits: number
    year: number
    semester: $Enums.Semester
    category?: $Enums.CourseCategory
    course: CourseCreateNestedOneWithoutCourseUnitsInput
    enrolledBy?: EnrolledCourseUnitCreateNestedManyWithoutCourseUnitInput
    exams?: ExamCreateNestedManyWithoutCourseUnitInput
  }

  export type CourseUnitUncheckedCreateInput = {
    id?: string
    code: string
    title: string
    credits: number
    year: number
    semester: $Enums.Semester
    category?: $Enums.CourseCategory
    courseName: string
    enrolledBy?: EnrolledCourseUnitUncheckedCreateNestedManyWithoutCourseUnitInput
    exams?: ExamUncheckedCreateNestedManyWithoutCourseUnitInput
  }

  export type CourseUnitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    semester?: EnumSemesterFieldUpdateOperationsInput | $Enums.Semester
    category?: EnumCourseCategoryFieldUpdateOperationsInput | $Enums.CourseCategory
    course?: CourseUpdateOneRequiredWithoutCourseUnitsNestedInput
    enrolledBy?: EnrolledCourseUnitUpdateManyWithoutCourseUnitNestedInput
    exams?: ExamUpdateManyWithoutCourseUnitNestedInput
  }

  export type CourseUnitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    semester?: EnumSemesterFieldUpdateOperationsInput | $Enums.Semester
    category?: EnumCourseCategoryFieldUpdateOperationsInput | $Enums.CourseCategory
    courseName?: StringFieldUpdateOperationsInput | string
    enrolledBy?: EnrolledCourseUnitUncheckedUpdateManyWithoutCourseUnitNestedInput
    exams?: ExamUncheckedUpdateManyWithoutCourseUnitNestedInput
  }

  export type CourseUnitCreateManyInput = {
    id?: string
    code: string
    title: string
    credits: number
    year: number
    semester: $Enums.Semester
    category?: $Enums.CourseCategory
    courseName: string
  }

  export type CourseUnitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    semester?: EnumSemesterFieldUpdateOperationsInput | $Enums.Semester
    category?: EnumCourseCategoryFieldUpdateOperationsInput | $Enums.CourseCategory
  }

  export type CourseUnitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    semester?: EnumSemesterFieldUpdateOperationsInput | $Enums.Semester
    category?: EnumCourseCategoryFieldUpdateOperationsInput | $Enums.CourseCategory
    courseName?: StringFieldUpdateOperationsInput | string
  }

  export type EnrolledCourseUnitCreateInput = {
    id?: string
    attempt?: number
    year: number
    semester: $Enums.Semester
    isInvigilatorApproved?: boolean
    invigilatorApprovedAt?: Date | string | null
    approvedBy?: string | null
    student: StudentCreateNestedOneWithoutEnrolledUnitsInput
    courseUnit: CourseUnitCreateNestedOneWithoutEnrolledByInput
  }

  export type EnrolledCourseUnitUncheckedCreateInput = {
    id?: string
    studentId: string
    courseUnitId: string
    attempt?: number
    year: number
    semester: $Enums.Semester
    isInvigilatorApproved?: boolean
    invigilatorApprovedAt?: Date | string | null
    approvedBy?: string | null
  }

  export type EnrolledCourseUnitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    attempt?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    semester?: EnumSemesterFieldUpdateOperationsInput | $Enums.Semester
    isInvigilatorApproved?: BoolFieldUpdateOperationsInput | boolean
    invigilatorApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    student?: StudentUpdateOneRequiredWithoutEnrolledUnitsNestedInput
    courseUnit?: CourseUnitUpdateOneRequiredWithoutEnrolledByNestedInput
  }

  export type EnrolledCourseUnitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    courseUnitId?: StringFieldUpdateOperationsInput | string
    attempt?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    semester?: EnumSemesterFieldUpdateOperationsInput | $Enums.Semester
    isInvigilatorApproved?: BoolFieldUpdateOperationsInput | boolean
    invigilatorApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EnrolledCourseUnitCreateManyInput = {
    id?: string
    studentId: string
    courseUnitId: string
    attempt?: number
    year: number
    semester: $Enums.Semester
    isInvigilatorApproved?: boolean
    invigilatorApprovedAt?: Date | string | null
    approvedBy?: string | null
  }

  export type EnrolledCourseUnitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    attempt?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    semester?: EnumSemesterFieldUpdateOperationsInput | $Enums.Semester
    isInvigilatorApproved?: BoolFieldUpdateOperationsInput | boolean
    invigilatorApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EnrolledCourseUnitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    courseUnitId?: StringFieldUpdateOperationsInput | string
    attempt?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    semester?: EnumSemesterFieldUpdateOperationsInput | $Enums.Semester
    isInvigilatorApproved?: BoolFieldUpdateOperationsInput | boolean
    invigilatorApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExamCreateInput = {
    id?: string
    examDate: Date | string
    startTime: Date | string
    endTime: Date | string
    venue: string
    isApproved?: boolean
    approvedAt?: Date | string | null
    courseUnit: CourseUnitCreateNestedOneWithoutExamsInput
    invigilators?: ExamAssignmentCreateNestedManyWithoutExamInput
  }

  export type ExamUncheckedCreateInput = {
    id?: string
    courseUnitId: string
    examDate: Date | string
    startTime: Date | string
    endTime: Date | string
    venue: string
    isApproved?: boolean
    approvedAt?: Date | string | null
    invigilators?: ExamAssignmentUncheckedCreateNestedManyWithoutExamInput
  }

  export type ExamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    examDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    courseUnit?: CourseUnitUpdateOneRequiredWithoutExamsNestedInput
    invigilators?: ExamAssignmentUpdateManyWithoutExamNestedInput
  }

  export type ExamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseUnitId?: StringFieldUpdateOperationsInput | string
    examDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invigilators?: ExamAssignmentUncheckedUpdateManyWithoutExamNestedInput
  }

  export type ExamCreateManyInput = {
    id?: string
    courseUnitId: string
    examDate: Date | string
    startTime: Date | string
    endTime: Date | string
    venue: string
    isApproved?: boolean
    approvedAt?: Date | string | null
  }

  export type ExamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    examDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ExamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseUnitId?: StringFieldUpdateOperationsInput | string
    examDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ExamAssignmentCreateInput = {
    id?: string
    invigilator: InvigilatorCreateNestedOneWithoutAssignedExamsInput
    exam: ExamCreateNestedOneWithoutInvigilatorsInput
  }

  export type ExamAssignmentUncheckedCreateInput = {
    id?: string
    invigilatorId: string
    examId: string
  }

  export type ExamAssignmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    invigilator?: InvigilatorUpdateOneRequiredWithoutAssignedExamsNestedInput
    exam?: ExamUpdateOneRequiredWithoutInvigilatorsNestedInput
  }

  export type ExamAssignmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    invigilatorId?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
  }

  export type ExamAssignmentCreateManyInput = {
    id?: string
    invigilatorId: string
    examId: string
  }

  export type ExamAssignmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ExamAssignmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    invigilatorId?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
  }

  export type StudentQrCodeCreateInput = {
    id?: string
    qrCode?: string | null
    semester: $Enums.Semester
    issuedAt: Date | string
    expiresAt: Date | string
    isActive?: boolean
    student: StudentCreateNestedOneWithoutStudentQrCodesInput
  }

  export type StudentQrCodeUncheckedCreateInput = {
    id?: string
    studentId: string
    qrCode?: string | null
    semester: $Enums.Semester
    issuedAt: Date | string
    expiresAt: Date | string
    isActive?: boolean
  }

  export type StudentQrCodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: EnumSemesterFieldUpdateOperationsInput | $Enums.Semester
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    student?: StudentUpdateOneRequiredWithoutStudentQrCodesNestedInput
  }

  export type StudentQrCodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: EnumSemesterFieldUpdateOperationsInput | $Enums.Semester
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StudentQrCodeCreateManyInput = {
    id?: string
    studentId: string
    qrCode?: string | null
    semester: $Enums.Semester
    issuedAt: Date | string
    expiresAt: Date | string
    isActive?: boolean
  }

  export type StudentQrCodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: EnumSemesterFieldUpdateOperationsInput | $Enums.Semester
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StudentQrCodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: EnumSemesterFieldUpdateOperationsInput | $Enums.Semester
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProgrammeCreateInput = {
    id?: string
    name: string
    programme: $Enums.StudyMode
    course: CourseCreateNestedOneWithoutProgrammesInput
    students?: StudentCreateNestedManyWithoutProgrammeInput
  }

  export type ProgrammeUncheckedCreateInput = {
    id?: string
    name: string
    programme: $Enums.StudyMode
    courseId: string
    students?: StudentUncheckedCreateNestedManyWithoutProgrammeInput
  }

  export type ProgrammeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    programme?: EnumStudyModeFieldUpdateOperationsInput | $Enums.StudyMode
    course?: CourseUpdateOneRequiredWithoutProgrammesNestedInput
    students?: StudentUpdateManyWithoutProgrammeNestedInput
  }

  export type ProgrammeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    programme?: EnumStudyModeFieldUpdateOperationsInput | $Enums.StudyMode
    courseId?: StringFieldUpdateOperationsInput | string
    students?: StudentUncheckedUpdateManyWithoutProgrammeNestedInput
  }

  export type ProgrammeCreateManyInput = {
    id?: string
    name: string
    programme: $Enums.StudyMode
    courseId: string
  }

  export type ProgrammeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    programme?: EnumStudyModeFieldUpdateOperationsInput | $Enums.StudyMode
  }

  export type ProgrammeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    programme?: EnumStudyModeFieldUpdateOperationsInput | $Enums.StudyMode
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type FacultyOrSchoolCreateInput = {
    id?: string
    name: string
    departments?: DepartmentCreateNestedManyWithoutFacultyOrSchoolInput
    admins?: AdminCreateNestedManyWithoutFacultyOrSchoolInput
  }

  export type FacultyOrSchoolUncheckedCreateInput = {
    id?: string
    name: string
    departments?: DepartmentUncheckedCreateNestedManyWithoutFacultyOrSchoolInput
    admins?: AdminUncheckedCreateNestedManyWithoutFacultyOrSchoolInput
  }

  export type FacultyOrSchoolUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    departments?: DepartmentUpdateManyWithoutFacultyOrSchoolNestedInput
    admins?: AdminUpdateManyWithoutFacultyOrSchoolNestedInput
  }

  export type FacultyOrSchoolUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    departments?: DepartmentUncheckedUpdateManyWithoutFacultyOrSchoolNestedInput
    admins?: AdminUncheckedUpdateManyWithoutFacultyOrSchoolNestedInput
  }

  export type FacultyOrSchoolCreateManyInput = {
    id?: string
    name: string
  }

  export type FacultyOrSchoolUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FacultyOrSchoolUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DepartmentCreateInput = {
    id?: string
    name: string
    facultyOrSchool: FacultyOrSchoolCreateNestedOneWithoutDepartmentsInput
    courses?: CourseCreateNestedManyWithoutDepartmentInput
    invigilators?: InvigilatorCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateInput = {
    id?: string
    name: string
    facultyOrSchoolId: string
    courses?: CourseUncheckedCreateNestedManyWithoutDepartmentInput
    invigilators?: InvigilatorUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    facultyOrSchool?: FacultyOrSchoolUpdateOneRequiredWithoutDepartmentsNestedInput
    courses?: CourseUpdateManyWithoutDepartmentNestedInput
    invigilators?: InvigilatorUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    facultyOrSchoolId?: StringFieldUpdateOperationsInput | string
    courses?: CourseUncheckedUpdateManyWithoutDepartmentNestedInput
    invigilators?: InvigilatorUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentCreateManyInput = {
    id?: string
    name: string
    facultyOrSchoolId: string
  }

  export type DepartmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DepartmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    facultyOrSchoolId?: StringFieldUpdateOperationsInput | string
  }

  export type CourseCreateInput = {
    id?: string
    name: string
    type: $Enums.CourseType
    code: string
    department: DepartmentCreateNestedOneWithoutCoursesInput
    programmes?: ProgrammeCreateNestedManyWithoutCourseInput
    courseUnits?: CourseUnitCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateInput = {
    id?: string
    name: string
    type: $Enums.CourseType
    code: string
    departmentId: string
    programmes?: ProgrammeUncheckedCreateNestedManyWithoutCourseInput
    courseUnits?: CourseUnitUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCourseTypeFieldUpdateOperationsInput | $Enums.CourseType
    code?: StringFieldUpdateOperationsInput | string
    department?: DepartmentUpdateOneRequiredWithoutCoursesNestedInput
    programmes?: ProgrammeUpdateManyWithoutCourseNestedInput
    courseUnits?: CourseUnitUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCourseTypeFieldUpdateOperationsInput | $Enums.CourseType
    code?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    programmes?: ProgrammeUncheckedUpdateManyWithoutCourseNestedInput
    courseUnits?: CourseUnitUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyInput = {
    id?: string
    name: string
    type: $Enums.CourseType
    code: string
    departmentId: string
  }

  export type CourseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCourseTypeFieldUpdateOperationsInput | $Enums.CourseType
    code?: StringFieldUpdateOperationsInput | string
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCourseTypeFieldUpdateOperationsInput | $Enums.CourseType
    code?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StudentNullableScalarRelationFilter = {
    is?: StudentWhereInput | null
    isNot?: StudentWhereInput | null
  }

  export type InvigilatorNullableScalarRelationFilter = {
    is?: InvigilatorWhereInput | null
    isNot?: InvigilatorWhereInput | null
  }

  export type AdminNullableScalarRelationFilter = {
    is?: AdminWhereInput | null
    isNot?: AdminWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumSemesterFilter<$PrismaModel = never> = {
    equals?: $Enums.Semester | EnumSemesterFieldRefInput<$PrismaModel>
    in?: $Enums.Semester[] | ListEnumSemesterFieldRefInput<$PrismaModel>
    notIn?: $Enums.Semester[] | ListEnumSemesterFieldRefInput<$PrismaModel>
    not?: NestedEnumSemesterFilter<$PrismaModel> | $Enums.Semester
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type EnumPermitStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PermitStatus | EnumPermitStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PermitStatus[] | ListEnumPermitStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PermitStatus[] | ListEnumPermitStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPermitStatusFilter<$PrismaModel> | $Enums.PermitStatus
  }

  export type ProgrammeScalarRelationFilter = {
    is?: ProgrammeWhereInput
    isNot?: ProgrammeWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type EnrolledCourseUnitListRelationFilter = {
    every?: EnrolledCourseUnitWhereInput
    some?: EnrolledCourseUnitWhereInput
    none?: EnrolledCourseUnitWhereInput
  }

  export type StudentQrCodeListRelationFilter = {
    every?: StudentQrCodeWhereInput
    some?: StudentQrCodeWhereInput
    none?: StudentQrCodeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EnrolledCourseUnitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentQrCodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    otherNames?: SortOrder
    lastName?: SortOrder
    studentNo?: SortOrder
    regNo?: SortOrder
    gender?: SortOrder
    studyYear?: SortOrder
    campus?: SortOrder
    academicYear?: SortOrder
    currentSemester?: SortOrder
    picture?: SortOrder
    paymentStatus?: SortOrder
    permitStatus?: SortOrder
    programmeId?: SortOrder
  }

  export type StudentAvgOrderByAggregateInput = {
    studyYear?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    otherNames?: SortOrder
    lastName?: SortOrder
    studentNo?: SortOrder
    regNo?: SortOrder
    gender?: SortOrder
    studyYear?: SortOrder
    campus?: SortOrder
    academicYear?: SortOrder
    currentSemester?: SortOrder
    picture?: SortOrder
    paymentStatus?: SortOrder
    permitStatus?: SortOrder
    programmeId?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    otherNames?: SortOrder
    lastName?: SortOrder
    studentNo?: SortOrder
    regNo?: SortOrder
    gender?: SortOrder
    studyYear?: SortOrder
    campus?: SortOrder
    academicYear?: SortOrder
    currentSemester?: SortOrder
    picture?: SortOrder
    paymentStatus?: SortOrder
    permitStatus?: SortOrder
    programmeId?: SortOrder
  }

  export type StudentSumOrderByAggregateInput = {
    studyYear?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumSemesterWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Semester | EnumSemesterFieldRefInput<$PrismaModel>
    in?: $Enums.Semester[] | ListEnumSemesterFieldRefInput<$PrismaModel>
    notIn?: $Enums.Semester[] | ListEnumSemesterFieldRefInput<$PrismaModel>
    not?: NestedEnumSemesterWithAggregatesFilter<$PrismaModel> | $Enums.Semester
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSemesterFilter<$PrismaModel>
    _max?: NestedEnumSemesterFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type EnumPermitStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PermitStatus | EnumPermitStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PermitStatus[] | ListEnumPermitStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PermitStatus[] | ListEnumPermitStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPermitStatusWithAggregatesFilter<$PrismaModel> | $Enums.PermitStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPermitStatusFilter<$PrismaModel>
    _max?: NestedEnumPermitStatusFilter<$PrismaModel>
  }

  export type ExamAssignmentListRelationFilter = {
    every?: ExamAssignmentWhereInput
    some?: ExamAssignmentWhereInput
    none?: ExamAssignmentWhereInput
  }

  export type DepartmentScalarRelationFilter = {
    is?: DepartmentWhereInput
    isNot?: DepartmentWhereInput
  }

  export type ExamAssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvigilatorCountOrderByAggregateInput = {
    id?: SortOrder
    invigilatorNumber?: SortOrder
    title?: SortOrder
    firstName?: SortOrder
    otherNames?: SortOrder
    lastName?: SortOrder
    picture?: SortOrder
    departmentId?: SortOrder
  }

  export type InvigilatorMaxOrderByAggregateInput = {
    id?: SortOrder
    invigilatorNumber?: SortOrder
    title?: SortOrder
    firstName?: SortOrder
    otherNames?: SortOrder
    lastName?: SortOrder
    picture?: SortOrder
    departmentId?: SortOrder
  }

  export type InvigilatorMinOrderByAggregateInput = {
    id?: SortOrder
    invigilatorNumber?: SortOrder
    title?: SortOrder
    firstName?: SortOrder
    otherNames?: SortOrder
    lastName?: SortOrder
    picture?: SortOrder
    departmentId?: SortOrder
  }

  export type FacultyOrSchoolScalarRelationFilter = {
    is?: FacultyOrSchoolWhereInput
    isNot?: FacultyOrSchoolWhereInput
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    otherNames?: SortOrder
    lastName?: SortOrder
    picture?: SortOrder
    facultyOrSchoolId?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    otherNames?: SortOrder
    lastName?: SortOrder
    picture?: SortOrder
    facultyOrSchoolId?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    otherNames?: SortOrder
    lastName?: SortOrder
    picture?: SortOrder
    facultyOrSchoolId?: SortOrder
  }

  export type EnumCourseCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.CourseCategory | EnumCourseCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.CourseCategory[] | ListEnumCourseCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.CourseCategory[] | ListEnumCourseCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCourseCategoryFilter<$PrismaModel> | $Enums.CourseCategory
  }

  export type CourseScalarRelationFilter = {
    is?: CourseWhereInput
    isNot?: CourseWhereInput
  }

  export type ExamListRelationFilter = {
    every?: ExamWhereInput
    some?: ExamWhereInput
    none?: ExamWhereInput
  }

  export type ExamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseUnitCodeCourseNameCompoundUniqueInput = {
    code: string
    courseName: string
  }

  export type CourseUnitCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    credits?: SortOrder
    year?: SortOrder
    semester?: SortOrder
    category?: SortOrder
    courseName?: SortOrder
  }

  export type CourseUnitAvgOrderByAggregateInput = {
    credits?: SortOrder
    year?: SortOrder
  }

  export type CourseUnitMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    credits?: SortOrder
    year?: SortOrder
    semester?: SortOrder
    category?: SortOrder
    courseName?: SortOrder
  }

  export type CourseUnitMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    credits?: SortOrder
    year?: SortOrder
    semester?: SortOrder
    category?: SortOrder
    courseName?: SortOrder
  }

  export type CourseUnitSumOrderByAggregateInput = {
    credits?: SortOrder
    year?: SortOrder
  }

  export type EnumCourseCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CourseCategory | EnumCourseCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.CourseCategory[] | ListEnumCourseCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.CourseCategory[] | ListEnumCourseCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCourseCategoryWithAggregatesFilter<$PrismaModel> | $Enums.CourseCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCourseCategoryFilter<$PrismaModel>
    _max?: NestedEnumCourseCategoryFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StudentScalarRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type CourseUnitScalarRelationFilter = {
    is?: CourseUnitWhereInput
    isNot?: CourseUnitWhereInput
  }

  export type EnrolledCourseUnitStudentIdCourseUnitIdAttemptCompoundUniqueInput = {
    studentId: string
    courseUnitId: string
    attempt: number
  }

  export type EnrolledCourseUnitCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    courseUnitId?: SortOrder
    attempt?: SortOrder
    year?: SortOrder
    semester?: SortOrder
    isInvigilatorApproved?: SortOrder
    invigilatorApprovedAt?: SortOrder
    approvedBy?: SortOrder
  }

  export type EnrolledCourseUnitAvgOrderByAggregateInput = {
    attempt?: SortOrder
    year?: SortOrder
  }

  export type EnrolledCourseUnitMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    courseUnitId?: SortOrder
    attempt?: SortOrder
    year?: SortOrder
    semester?: SortOrder
    isInvigilatorApproved?: SortOrder
    invigilatorApprovedAt?: SortOrder
    approvedBy?: SortOrder
  }

  export type EnrolledCourseUnitMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    courseUnitId?: SortOrder
    attempt?: SortOrder
    year?: SortOrder
    semester?: SortOrder
    isInvigilatorApproved?: SortOrder
    invigilatorApprovedAt?: SortOrder
    approvedBy?: SortOrder
  }

  export type EnrolledCourseUnitSumOrderByAggregateInput = {
    attempt?: SortOrder
    year?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ExamCourseUnitIdExamDateCompoundUniqueInput = {
    courseUnitId: string
    examDate: Date | string
  }

  export type ExamCountOrderByAggregateInput = {
    id?: SortOrder
    courseUnitId?: SortOrder
    examDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    venue?: SortOrder
    isApproved?: SortOrder
    approvedAt?: SortOrder
  }

  export type ExamMaxOrderByAggregateInput = {
    id?: SortOrder
    courseUnitId?: SortOrder
    examDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    venue?: SortOrder
    isApproved?: SortOrder
    approvedAt?: SortOrder
  }

  export type ExamMinOrderByAggregateInput = {
    id?: SortOrder
    courseUnitId?: SortOrder
    examDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    venue?: SortOrder
    isApproved?: SortOrder
    approvedAt?: SortOrder
  }

  export type InvigilatorScalarRelationFilter = {
    is?: InvigilatorWhereInput
    isNot?: InvigilatorWhereInput
  }

  export type ExamScalarRelationFilter = {
    is?: ExamWhereInput
    isNot?: ExamWhereInput
  }

  export type ExamAssignmentInvigilatorIdExamIdCompoundUniqueInput = {
    invigilatorId: string
    examId: string
  }

  export type ExamAssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    invigilatorId?: SortOrder
    examId?: SortOrder
  }

  export type ExamAssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    invigilatorId?: SortOrder
    examId?: SortOrder
  }

  export type ExamAssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    invigilatorId?: SortOrder
    examId?: SortOrder
  }

  export type StudentQrCodeStudentIdSemesterCompoundUniqueInput = {
    studentId: string
    semester: $Enums.Semester
  }

  export type StudentQrCodeCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    qrCode?: SortOrder
    semester?: SortOrder
    issuedAt?: SortOrder
    expiresAt?: SortOrder
    isActive?: SortOrder
  }

  export type StudentQrCodeMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    qrCode?: SortOrder
    semester?: SortOrder
    issuedAt?: SortOrder
    expiresAt?: SortOrder
    isActive?: SortOrder
  }

  export type StudentQrCodeMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    qrCode?: SortOrder
    semester?: SortOrder
    issuedAt?: SortOrder
    expiresAt?: SortOrder
    isActive?: SortOrder
  }

  export type EnumStudyModeFilter<$PrismaModel = never> = {
    equals?: $Enums.StudyMode | EnumStudyModeFieldRefInput<$PrismaModel>
    in?: $Enums.StudyMode[] | ListEnumStudyModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StudyMode[] | ListEnumStudyModeFieldRefInput<$PrismaModel>
    not?: NestedEnumStudyModeFilter<$PrismaModel> | $Enums.StudyMode
  }

  export type StudentListRelationFilter = {
    every?: StudentWhereInput
    some?: StudentWhereInput
    none?: StudentWhereInput
  }

  export type StudentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProgrammeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    programme?: SortOrder
    courseId?: SortOrder
  }

  export type ProgrammeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    programme?: SortOrder
    courseId?: SortOrder
  }

  export type ProgrammeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    programme?: SortOrder
    courseId?: SortOrder
  }

  export type EnumStudyModeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StudyMode | EnumStudyModeFieldRefInput<$PrismaModel>
    in?: $Enums.StudyMode[] | ListEnumStudyModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StudyMode[] | ListEnumStudyModeFieldRefInput<$PrismaModel>
    not?: NestedEnumStudyModeWithAggregatesFilter<$PrismaModel> | $Enums.StudyMode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStudyModeFilter<$PrismaModel>
    _max?: NestedEnumStudyModeFilter<$PrismaModel>
  }

  export type DepartmentListRelationFilter = {
    every?: DepartmentWhereInput
    some?: DepartmentWhereInput
    none?: DepartmentWhereInput
  }

  export type AdminListRelationFilter = {
    every?: AdminWhereInput
    some?: AdminWhereInput
    none?: AdminWhereInput
  }

  export type DepartmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdminOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FacultyOrSchoolCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type FacultyOrSchoolMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type FacultyOrSchoolMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CourseListRelationFilter = {
    every?: CourseWhereInput
    some?: CourseWhereInput
    none?: CourseWhereInput
  }

  export type InvigilatorListRelationFilter = {
    every?: InvigilatorWhereInput
    some?: InvigilatorWhereInput
    none?: InvigilatorWhereInput
  }

  export type CourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvigilatorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DepartmentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    facultyOrSchoolId?: SortOrder
  }

  export type DepartmentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    facultyOrSchoolId?: SortOrder
  }

  export type DepartmentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    facultyOrSchoolId?: SortOrder
  }

  export type EnumCourseTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CourseType | EnumCourseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CourseType[] | ListEnumCourseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CourseType[] | ListEnumCourseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCourseTypeFilter<$PrismaModel> | $Enums.CourseType
  }

  export type ProgrammeListRelationFilter = {
    every?: ProgrammeWhereInput
    some?: ProgrammeWhereInput
    none?: ProgrammeWhereInput
  }

  export type CourseUnitListRelationFilter = {
    every?: CourseUnitWhereInput
    some?: CourseUnitWhereInput
    none?: CourseUnitWhereInput
  }

  export type ProgrammeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseUnitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    code?: SortOrder
    departmentId?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    code?: SortOrder
    departmentId?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    code?: SortOrder
    departmentId?: SortOrder
  }

  export type EnumCourseTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CourseType | EnumCourseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CourseType[] | ListEnumCourseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CourseType[] | ListEnumCourseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCourseTypeWithAggregatesFilter<$PrismaModel> | $Enums.CourseType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCourseTypeFilter<$PrismaModel>
    _max?: NestedEnumCourseTypeFilter<$PrismaModel>
  }

  export type StudentCreateNestedOneWithoutUserInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    connect?: StudentWhereUniqueInput
  }

  export type InvigilatorCreateNestedOneWithoutUserInput = {
    create?: XOR<InvigilatorCreateWithoutUserInput, InvigilatorUncheckedCreateWithoutUserInput>
    connectOrCreate?: InvigilatorCreateOrConnectWithoutUserInput
    connect?: InvigilatorWhereUniqueInput
  }

  export type AdminCreateNestedOneWithoutUserInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    connect?: AdminWhereUniqueInput
  }

  export type StudentUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    connect?: StudentWhereUniqueInput
  }

  export type InvigilatorUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<InvigilatorCreateWithoutUserInput, InvigilatorUncheckedCreateWithoutUserInput>
    connectOrCreate?: InvigilatorCreateOrConnectWithoutUserInput
    connect?: InvigilatorWhereUniqueInput
  }

  export type AdminUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    connect?: AdminWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StudentUpdateOneWithoutUserNestedInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    upsert?: StudentUpsertWithoutUserInput
    disconnect?: StudentWhereInput | boolean
    delete?: StudentWhereInput | boolean
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutUserInput, StudentUpdateWithoutUserInput>, StudentUncheckedUpdateWithoutUserInput>
  }

  export type InvigilatorUpdateOneWithoutUserNestedInput = {
    create?: XOR<InvigilatorCreateWithoutUserInput, InvigilatorUncheckedCreateWithoutUserInput>
    connectOrCreate?: InvigilatorCreateOrConnectWithoutUserInput
    upsert?: InvigilatorUpsertWithoutUserInput
    disconnect?: InvigilatorWhereInput | boolean
    delete?: InvigilatorWhereInput | boolean
    connect?: InvigilatorWhereUniqueInput
    update?: XOR<XOR<InvigilatorUpdateToOneWithWhereWithoutUserInput, InvigilatorUpdateWithoutUserInput>, InvigilatorUncheckedUpdateWithoutUserInput>
  }

  export type AdminUpdateOneWithoutUserNestedInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    upsert?: AdminUpsertWithoutUserInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutUserInput, AdminUpdateWithoutUserInput>, AdminUncheckedUpdateWithoutUserInput>
  }

  export type StudentUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    upsert?: StudentUpsertWithoutUserInput
    disconnect?: StudentWhereInput | boolean
    delete?: StudentWhereInput | boolean
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutUserInput, StudentUpdateWithoutUserInput>, StudentUncheckedUpdateWithoutUserInput>
  }

  export type InvigilatorUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<InvigilatorCreateWithoutUserInput, InvigilatorUncheckedCreateWithoutUserInput>
    connectOrCreate?: InvigilatorCreateOrConnectWithoutUserInput
    upsert?: InvigilatorUpsertWithoutUserInput
    disconnect?: InvigilatorWhereInput | boolean
    delete?: InvigilatorWhereInput | boolean
    connect?: InvigilatorWhereUniqueInput
    update?: XOR<XOR<InvigilatorUpdateToOneWithWhereWithoutUserInput, InvigilatorUpdateWithoutUserInput>, InvigilatorUncheckedUpdateWithoutUserInput>
  }

  export type AdminUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    upsert?: AdminUpsertWithoutUserInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutUserInput, AdminUpdateWithoutUserInput>, AdminUncheckedUpdateWithoutUserInput>
  }

  export type ProgrammeCreateNestedOneWithoutStudentsInput = {
    create?: XOR<ProgrammeCreateWithoutStudentsInput, ProgrammeUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: ProgrammeCreateOrConnectWithoutStudentsInput
    connect?: ProgrammeWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutStudentInput = {
    create?: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentInput
    connect?: UserWhereUniqueInput
  }

  export type EnrolledCourseUnitCreateNestedManyWithoutStudentInput = {
    create?: XOR<EnrolledCourseUnitCreateWithoutStudentInput, EnrolledCourseUnitUncheckedCreateWithoutStudentInput> | EnrolledCourseUnitCreateWithoutStudentInput[] | EnrolledCourseUnitUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: EnrolledCourseUnitCreateOrConnectWithoutStudentInput | EnrolledCourseUnitCreateOrConnectWithoutStudentInput[]
    createMany?: EnrolledCourseUnitCreateManyStudentInputEnvelope
    connect?: EnrolledCourseUnitWhereUniqueInput | EnrolledCourseUnitWhereUniqueInput[]
  }

  export type StudentQrCodeCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentQrCodeCreateWithoutStudentInput, StudentQrCodeUncheckedCreateWithoutStudentInput> | StudentQrCodeCreateWithoutStudentInput[] | StudentQrCodeUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentQrCodeCreateOrConnectWithoutStudentInput | StudentQrCodeCreateOrConnectWithoutStudentInput[]
    createMany?: StudentQrCodeCreateManyStudentInputEnvelope
    connect?: StudentQrCodeWhereUniqueInput | StudentQrCodeWhereUniqueInput[]
  }

  export type EnrolledCourseUnitUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<EnrolledCourseUnitCreateWithoutStudentInput, EnrolledCourseUnitUncheckedCreateWithoutStudentInput> | EnrolledCourseUnitCreateWithoutStudentInput[] | EnrolledCourseUnitUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: EnrolledCourseUnitCreateOrConnectWithoutStudentInput | EnrolledCourseUnitCreateOrConnectWithoutStudentInput[]
    createMany?: EnrolledCourseUnitCreateManyStudentInputEnvelope
    connect?: EnrolledCourseUnitWhereUniqueInput | EnrolledCourseUnitWhereUniqueInput[]
  }

  export type StudentQrCodeUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentQrCodeCreateWithoutStudentInput, StudentQrCodeUncheckedCreateWithoutStudentInput> | StudentQrCodeCreateWithoutStudentInput[] | StudentQrCodeUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentQrCodeCreateOrConnectWithoutStudentInput | StudentQrCodeCreateOrConnectWithoutStudentInput[]
    createMany?: StudentQrCodeCreateManyStudentInputEnvelope
    connect?: StudentQrCodeWhereUniqueInput | StudentQrCodeWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumSemesterFieldUpdateOperationsInput = {
    set?: $Enums.Semester
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type EnumPermitStatusFieldUpdateOperationsInput = {
    set?: $Enums.PermitStatus
  }

  export type ProgrammeUpdateOneRequiredWithoutStudentsNestedInput = {
    create?: XOR<ProgrammeCreateWithoutStudentsInput, ProgrammeUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: ProgrammeCreateOrConnectWithoutStudentsInput
    upsert?: ProgrammeUpsertWithoutStudentsInput
    connect?: ProgrammeWhereUniqueInput
    update?: XOR<XOR<ProgrammeUpdateToOneWithWhereWithoutStudentsInput, ProgrammeUpdateWithoutStudentsInput>, ProgrammeUncheckedUpdateWithoutStudentsInput>
  }

  export type UserUpdateOneRequiredWithoutStudentNestedInput = {
    create?: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentInput
    upsert?: UserUpsertWithoutStudentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStudentInput, UserUpdateWithoutStudentInput>, UserUncheckedUpdateWithoutStudentInput>
  }

  export type EnrolledCourseUnitUpdateManyWithoutStudentNestedInput = {
    create?: XOR<EnrolledCourseUnitCreateWithoutStudentInput, EnrolledCourseUnitUncheckedCreateWithoutStudentInput> | EnrolledCourseUnitCreateWithoutStudentInput[] | EnrolledCourseUnitUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: EnrolledCourseUnitCreateOrConnectWithoutStudentInput | EnrolledCourseUnitCreateOrConnectWithoutStudentInput[]
    upsert?: EnrolledCourseUnitUpsertWithWhereUniqueWithoutStudentInput | EnrolledCourseUnitUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: EnrolledCourseUnitCreateManyStudentInputEnvelope
    set?: EnrolledCourseUnitWhereUniqueInput | EnrolledCourseUnitWhereUniqueInput[]
    disconnect?: EnrolledCourseUnitWhereUniqueInput | EnrolledCourseUnitWhereUniqueInput[]
    delete?: EnrolledCourseUnitWhereUniqueInput | EnrolledCourseUnitWhereUniqueInput[]
    connect?: EnrolledCourseUnitWhereUniqueInput | EnrolledCourseUnitWhereUniqueInput[]
    update?: EnrolledCourseUnitUpdateWithWhereUniqueWithoutStudentInput | EnrolledCourseUnitUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: EnrolledCourseUnitUpdateManyWithWhereWithoutStudentInput | EnrolledCourseUnitUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: EnrolledCourseUnitScalarWhereInput | EnrolledCourseUnitScalarWhereInput[]
  }

  export type StudentQrCodeUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentQrCodeCreateWithoutStudentInput, StudentQrCodeUncheckedCreateWithoutStudentInput> | StudentQrCodeCreateWithoutStudentInput[] | StudentQrCodeUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentQrCodeCreateOrConnectWithoutStudentInput | StudentQrCodeCreateOrConnectWithoutStudentInput[]
    upsert?: StudentQrCodeUpsertWithWhereUniqueWithoutStudentInput | StudentQrCodeUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentQrCodeCreateManyStudentInputEnvelope
    set?: StudentQrCodeWhereUniqueInput | StudentQrCodeWhereUniqueInput[]
    disconnect?: StudentQrCodeWhereUniqueInput | StudentQrCodeWhereUniqueInput[]
    delete?: StudentQrCodeWhereUniqueInput | StudentQrCodeWhereUniqueInput[]
    connect?: StudentQrCodeWhereUniqueInput | StudentQrCodeWhereUniqueInput[]
    update?: StudentQrCodeUpdateWithWhereUniqueWithoutStudentInput | StudentQrCodeUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentQrCodeUpdateManyWithWhereWithoutStudentInput | StudentQrCodeUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentQrCodeScalarWhereInput | StudentQrCodeScalarWhereInput[]
  }

  export type EnrolledCourseUnitUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<EnrolledCourseUnitCreateWithoutStudentInput, EnrolledCourseUnitUncheckedCreateWithoutStudentInput> | EnrolledCourseUnitCreateWithoutStudentInput[] | EnrolledCourseUnitUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: EnrolledCourseUnitCreateOrConnectWithoutStudentInput | EnrolledCourseUnitCreateOrConnectWithoutStudentInput[]
    upsert?: EnrolledCourseUnitUpsertWithWhereUniqueWithoutStudentInput | EnrolledCourseUnitUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: EnrolledCourseUnitCreateManyStudentInputEnvelope
    set?: EnrolledCourseUnitWhereUniqueInput | EnrolledCourseUnitWhereUniqueInput[]
    disconnect?: EnrolledCourseUnitWhereUniqueInput | EnrolledCourseUnitWhereUniqueInput[]
    delete?: EnrolledCourseUnitWhereUniqueInput | EnrolledCourseUnitWhereUniqueInput[]
    connect?: EnrolledCourseUnitWhereUniqueInput | EnrolledCourseUnitWhereUniqueInput[]
    update?: EnrolledCourseUnitUpdateWithWhereUniqueWithoutStudentInput | EnrolledCourseUnitUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: EnrolledCourseUnitUpdateManyWithWhereWithoutStudentInput | EnrolledCourseUnitUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: EnrolledCourseUnitScalarWhereInput | EnrolledCourseUnitScalarWhereInput[]
  }

  export type StudentQrCodeUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentQrCodeCreateWithoutStudentInput, StudentQrCodeUncheckedCreateWithoutStudentInput> | StudentQrCodeCreateWithoutStudentInput[] | StudentQrCodeUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentQrCodeCreateOrConnectWithoutStudentInput | StudentQrCodeCreateOrConnectWithoutStudentInput[]
    upsert?: StudentQrCodeUpsertWithWhereUniqueWithoutStudentInput | StudentQrCodeUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentQrCodeCreateManyStudentInputEnvelope
    set?: StudentQrCodeWhereUniqueInput | StudentQrCodeWhereUniqueInput[]
    disconnect?: StudentQrCodeWhereUniqueInput | StudentQrCodeWhereUniqueInput[]
    delete?: StudentQrCodeWhereUniqueInput | StudentQrCodeWhereUniqueInput[]
    connect?: StudentQrCodeWhereUniqueInput | StudentQrCodeWhereUniqueInput[]
    update?: StudentQrCodeUpdateWithWhereUniqueWithoutStudentInput | StudentQrCodeUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentQrCodeUpdateManyWithWhereWithoutStudentInput | StudentQrCodeUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentQrCodeScalarWhereInput | StudentQrCodeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutInvigilatorInput = {
    create?: XOR<UserCreateWithoutInvigilatorInput, UserUncheckedCreateWithoutInvigilatorInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvigilatorInput
    connect?: UserWhereUniqueInput
  }

  export type ExamAssignmentCreateNestedManyWithoutInvigilatorInput = {
    create?: XOR<ExamAssignmentCreateWithoutInvigilatorInput, ExamAssignmentUncheckedCreateWithoutInvigilatorInput> | ExamAssignmentCreateWithoutInvigilatorInput[] | ExamAssignmentUncheckedCreateWithoutInvigilatorInput[]
    connectOrCreate?: ExamAssignmentCreateOrConnectWithoutInvigilatorInput | ExamAssignmentCreateOrConnectWithoutInvigilatorInput[]
    createMany?: ExamAssignmentCreateManyInvigilatorInputEnvelope
    connect?: ExamAssignmentWhereUniqueInput | ExamAssignmentWhereUniqueInput[]
  }

  export type DepartmentCreateNestedOneWithoutInvigilatorsInput = {
    create?: XOR<DepartmentCreateWithoutInvigilatorsInput, DepartmentUncheckedCreateWithoutInvigilatorsInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutInvigilatorsInput
    connect?: DepartmentWhereUniqueInput
  }

  export type ExamAssignmentUncheckedCreateNestedManyWithoutInvigilatorInput = {
    create?: XOR<ExamAssignmentCreateWithoutInvigilatorInput, ExamAssignmentUncheckedCreateWithoutInvigilatorInput> | ExamAssignmentCreateWithoutInvigilatorInput[] | ExamAssignmentUncheckedCreateWithoutInvigilatorInput[]
    connectOrCreate?: ExamAssignmentCreateOrConnectWithoutInvigilatorInput | ExamAssignmentCreateOrConnectWithoutInvigilatorInput[]
    createMany?: ExamAssignmentCreateManyInvigilatorInputEnvelope
    connect?: ExamAssignmentWhereUniqueInput | ExamAssignmentWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutInvigilatorNestedInput = {
    create?: XOR<UserCreateWithoutInvigilatorInput, UserUncheckedCreateWithoutInvigilatorInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvigilatorInput
    upsert?: UserUpsertWithoutInvigilatorInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInvigilatorInput, UserUpdateWithoutInvigilatorInput>, UserUncheckedUpdateWithoutInvigilatorInput>
  }

  export type ExamAssignmentUpdateManyWithoutInvigilatorNestedInput = {
    create?: XOR<ExamAssignmentCreateWithoutInvigilatorInput, ExamAssignmentUncheckedCreateWithoutInvigilatorInput> | ExamAssignmentCreateWithoutInvigilatorInput[] | ExamAssignmentUncheckedCreateWithoutInvigilatorInput[]
    connectOrCreate?: ExamAssignmentCreateOrConnectWithoutInvigilatorInput | ExamAssignmentCreateOrConnectWithoutInvigilatorInput[]
    upsert?: ExamAssignmentUpsertWithWhereUniqueWithoutInvigilatorInput | ExamAssignmentUpsertWithWhereUniqueWithoutInvigilatorInput[]
    createMany?: ExamAssignmentCreateManyInvigilatorInputEnvelope
    set?: ExamAssignmentWhereUniqueInput | ExamAssignmentWhereUniqueInput[]
    disconnect?: ExamAssignmentWhereUniqueInput | ExamAssignmentWhereUniqueInput[]
    delete?: ExamAssignmentWhereUniqueInput | ExamAssignmentWhereUniqueInput[]
    connect?: ExamAssignmentWhereUniqueInput | ExamAssignmentWhereUniqueInput[]
    update?: ExamAssignmentUpdateWithWhereUniqueWithoutInvigilatorInput | ExamAssignmentUpdateWithWhereUniqueWithoutInvigilatorInput[]
    updateMany?: ExamAssignmentUpdateManyWithWhereWithoutInvigilatorInput | ExamAssignmentUpdateManyWithWhereWithoutInvigilatorInput[]
    deleteMany?: ExamAssignmentScalarWhereInput | ExamAssignmentScalarWhereInput[]
  }

  export type DepartmentUpdateOneRequiredWithoutInvigilatorsNestedInput = {
    create?: XOR<DepartmentCreateWithoutInvigilatorsInput, DepartmentUncheckedCreateWithoutInvigilatorsInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutInvigilatorsInput
    upsert?: DepartmentUpsertWithoutInvigilatorsInput
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutInvigilatorsInput, DepartmentUpdateWithoutInvigilatorsInput>, DepartmentUncheckedUpdateWithoutInvigilatorsInput>
  }

  export type ExamAssignmentUncheckedUpdateManyWithoutInvigilatorNestedInput = {
    create?: XOR<ExamAssignmentCreateWithoutInvigilatorInput, ExamAssignmentUncheckedCreateWithoutInvigilatorInput> | ExamAssignmentCreateWithoutInvigilatorInput[] | ExamAssignmentUncheckedCreateWithoutInvigilatorInput[]
    connectOrCreate?: ExamAssignmentCreateOrConnectWithoutInvigilatorInput | ExamAssignmentCreateOrConnectWithoutInvigilatorInput[]
    upsert?: ExamAssignmentUpsertWithWhereUniqueWithoutInvigilatorInput | ExamAssignmentUpsertWithWhereUniqueWithoutInvigilatorInput[]
    createMany?: ExamAssignmentCreateManyInvigilatorInputEnvelope
    set?: ExamAssignmentWhereUniqueInput | ExamAssignmentWhereUniqueInput[]
    disconnect?: ExamAssignmentWhereUniqueInput | ExamAssignmentWhereUniqueInput[]
    delete?: ExamAssignmentWhereUniqueInput | ExamAssignmentWhereUniqueInput[]
    connect?: ExamAssignmentWhereUniqueInput | ExamAssignmentWhereUniqueInput[]
    update?: ExamAssignmentUpdateWithWhereUniqueWithoutInvigilatorInput | ExamAssignmentUpdateWithWhereUniqueWithoutInvigilatorInput[]
    updateMany?: ExamAssignmentUpdateManyWithWhereWithoutInvigilatorInput | ExamAssignmentUpdateManyWithWhereWithoutInvigilatorInput[]
    deleteMany?: ExamAssignmentScalarWhereInput | ExamAssignmentScalarWhereInput[]
  }

  export type FacultyOrSchoolCreateNestedOneWithoutAdminsInput = {
    create?: XOR<FacultyOrSchoolCreateWithoutAdminsInput, FacultyOrSchoolUncheckedCreateWithoutAdminsInput>
    connectOrCreate?: FacultyOrSchoolCreateOrConnectWithoutAdminsInput
    connect?: FacultyOrSchoolWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAdminInput = {
    create?: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminInput
    connect?: UserWhereUniqueInput
  }

  export type FacultyOrSchoolUpdateOneRequiredWithoutAdminsNestedInput = {
    create?: XOR<FacultyOrSchoolCreateWithoutAdminsInput, FacultyOrSchoolUncheckedCreateWithoutAdminsInput>
    connectOrCreate?: FacultyOrSchoolCreateOrConnectWithoutAdminsInput
    upsert?: FacultyOrSchoolUpsertWithoutAdminsInput
    connect?: FacultyOrSchoolWhereUniqueInput
    update?: XOR<XOR<FacultyOrSchoolUpdateToOneWithWhereWithoutAdminsInput, FacultyOrSchoolUpdateWithoutAdminsInput>, FacultyOrSchoolUncheckedUpdateWithoutAdminsInput>
  }

  export type UserUpdateOneRequiredWithoutAdminNestedInput = {
    create?: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminInput
    upsert?: UserUpsertWithoutAdminInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAdminInput, UserUpdateWithoutAdminInput>, UserUncheckedUpdateWithoutAdminInput>
  }

  export type CourseCreateNestedOneWithoutCourseUnitsInput = {
    create?: XOR<CourseCreateWithoutCourseUnitsInput, CourseUncheckedCreateWithoutCourseUnitsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutCourseUnitsInput
    connect?: CourseWhereUniqueInput
  }

  export type EnrolledCourseUnitCreateNestedManyWithoutCourseUnitInput = {
    create?: XOR<EnrolledCourseUnitCreateWithoutCourseUnitInput, EnrolledCourseUnitUncheckedCreateWithoutCourseUnitInput> | EnrolledCourseUnitCreateWithoutCourseUnitInput[] | EnrolledCourseUnitUncheckedCreateWithoutCourseUnitInput[]
    connectOrCreate?: EnrolledCourseUnitCreateOrConnectWithoutCourseUnitInput | EnrolledCourseUnitCreateOrConnectWithoutCourseUnitInput[]
    createMany?: EnrolledCourseUnitCreateManyCourseUnitInputEnvelope
    connect?: EnrolledCourseUnitWhereUniqueInput | EnrolledCourseUnitWhereUniqueInput[]
  }

  export type ExamCreateNestedManyWithoutCourseUnitInput = {
    create?: XOR<ExamCreateWithoutCourseUnitInput, ExamUncheckedCreateWithoutCourseUnitInput> | ExamCreateWithoutCourseUnitInput[] | ExamUncheckedCreateWithoutCourseUnitInput[]
    connectOrCreate?: ExamCreateOrConnectWithoutCourseUnitInput | ExamCreateOrConnectWithoutCourseUnitInput[]
    createMany?: ExamCreateManyCourseUnitInputEnvelope
    connect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
  }

  export type EnrolledCourseUnitUncheckedCreateNestedManyWithoutCourseUnitInput = {
    create?: XOR<EnrolledCourseUnitCreateWithoutCourseUnitInput, EnrolledCourseUnitUncheckedCreateWithoutCourseUnitInput> | EnrolledCourseUnitCreateWithoutCourseUnitInput[] | EnrolledCourseUnitUncheckedCreateWithoutCourseUnitInput[]
    connectOrCreate?: EnrolledCourseUnitCreateOrConnectWithoutCourseUnitInput | EnrolledCourseUnitCreateOrConnectWithoutCourseUnitInput[]
    createMany?: EnrolledCourseUnitCreateManyCourseUnitInputEnvelope
    connect?: EnrolledCourseUnitWhereUniqueInput | EnrolledCourseUnitWhereUniqueInput[]
  }

  export type ExamUncheckedCreateNestedManyWithoutCourseUnitInput = {
    create?: XOR<ExamCreateWithoutCourseUnitInput, ExamUncheckedCreateWithoutCourseUnitInput> | ExamCreateWithoutCourseUnitInput[] | ExamUncheckedCreateWithoutCourseUnitInput[]
    connectOrCreate?: ExamCreateOrConnectWithoutCourseUnitInput | ExamCreateOrConnectWithoutCourseUnitInput[]
    createMany?: ExamCreateManyCourseUnitInputEnvelope
    connect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
  }

  export type EnumCourseCategoryFieldUpdateOperationsInput = {
    set?: $Enums.CourseCategory
  }

  export type CourseUpdateOneRequiredWithoutCourseUnitsNestedInput = {
    create?: XOR<CourseCreateWithoutCourseUnitsInput, CourseUncheckedCreateWithoutCourseUnitsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutCourseUnitsInput
    upsert?: CourseUpsertWithoutCourseUnitsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutCourseUnitsInput, CourseUpdateWithoutCourseUnitsInput>, CourseUncheckedUpdateWithoutCourseUnitsInput>
  }

  export type EnrolledCourseUnitUpdateManyWithoutCourseUnitNestedInput = {
    create?: XOR<EnrolledCourseUnitCreateWithoutCourseUnitInput, EnrolledCourseUnitUncheckedCreateWithoutCourseUnitInput> | EnrolledCourseUnitCreateWithoutCourseUnitInput[] | EnrolledCourseUnitUncheckedCreateWithoutCourseUnitInput[]
    connectOrCreate?: EnrolledCourseUnitCreateOrConnectWithoutCourseUnitInput | EnrolledCourseUnitCreateOrConnectWithoutCourseUnitInput[]
    upsert?: EnrolledCourseUnitUpsertWithWhereUniqueWithoutCourseUnitInput | EnrolledCourseUnitUpsertWithWhereUniqueWithoutCourseUnitInput[]
    createMany?: EnrolledCourseUnitCreateManyCourseUnitInputEnvelope
    set?: EnrolledCourseUnitWhereUniqueInput | EnrolledCourseUnitWhereUniqueInput[]
    disconnect?: EnrolledCourseUnitWhereUniqueInput | EnrolledCourseUnitWhereUniqueInput[]
    delete?: EnrolledCourseUnitWhereUniqueInput | EnrolledCourseUnitWhereUniqueInput[]
    connect?: EnrolledCourseUnitWhereUniqueInput | EnrolledCourseUnitWhereUniqueInput[]
    update?: EnrolledCourseUnitUpdateWithWhereUniqueWithoutCourseUnitInput | EnrolledCourseUnitUpdateWithWhereUniqueWithoutCourseUnitInput[]
    updateMany?: EnrolledCourseUnitUpdateManyWithWhereWithoutCourseUnitInput | EnrolledCourseUnitUpdateManyWithWhereWithoutCourseUnitInput[]
    deleteMany?: EnrolledCourseUnitScalarWhereInput | EnrolledCourseUnitScalarWhereInput[]
  }

  export type ExamUpdateManyWithoutCourseUnitNestedInput = {
    create?: XOR<ExamCreateWithoutCourseUnitInput, ExamUncheckedCreateWithoutCourseUnitInput> | ExamCreateWithoutCourseUnitInput[] | ExamUncheckedCreateWithoutCourseUnitInput[]
    connectOrCreate?: ExamCreateOrConnectWithoutCourseUnitInput | ExamCreateOrConnectWithoutCourseUnitInput[]
    upsert?: ExamUpsertWithWhereUniqueWithoutCourseUnitInput | ExamUpsertWithWhereUniqueWithoutCourseUnitInput[]
    createMany?: ExamCreateManyCourseUnitInputEnvelope
    set?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    disconnect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    delete?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    connect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    update?: ExamUpdateWithWhereUniqueWithoutCourseUnitInput | ExamUpdateWithWhereUniqueWithoutCourseUnitInput[]
    updateMany?: ExamUpdateManyWithWhereWithoutCourseUnitInput | ExamUpdateManyWithWhereWithoutCourseUnitInput[]
    deleteMany?: ExamScalarWhereInput | ExamScalarWhereInput[]
  }

  export type EnrolledCourseUnitUncheckedUpdateManyWithoutCourseUnitNestedInput = {
    create?: XOR<EnrolledCourseUnitCreateWithoutCourseUnitInput, EnrolledCourseUnitUncheckedCreateWithoutCourseUnitInput> | EnrolledCourseUnitCreateWithoutCourseUnitInput[] | EnrolledCourseUnitUncheckedCreateWithoutCourseUnitInput[]
    connectOrCreate?: EnrolledCourseUnitCreateOrConnectWithoutCourseUnitInput | EnrolledCourseUnitCreateOrConnectWithoutCourseUnitInput[]
    upsert?: EnrolledCourseUnitUpsertWithWhereUniqueWithoutCourseUnitInput | EnrolledCourseUnitUpsertWithWhereUniqueWithoutCourseUnitInput[]
    createMany?: EnrolledCourseUnitCreateManyCourseUnitInputEnvelope
    set?: EnrolledCourseUnitWhereUniqueInput | EnrolledCourseUnitWhereUniqueInput[]
    disconnect?: EnrolledCourseUnitWhereUniqueInput | EnrolledCourseUnitWhereUniqueInput[]
    delete?: EnrolledCourseUnitWhereUniqueInput | EnrolledCourseUnitWhereUniqueInput[]
    connect?: EnrolledCourseUnitWhereUniqueInput | EnrolledCourseUnitWhereUniqueInput[]
    update?: EnrolledCourseUnitUpdateWithWhereUniqueWithoutCourseUnitInput | EnrolledCourseUnitUpdateWithWhereUniqueWithoutCourseUnitInput[]
    updateMany?: EnrolledCourseUnitUpdateManyWithWhereWithoutCourseUnitInput | EnrolledCourseUnitUpdateManyWithWhereWithoutCourseUnitInput[]
    deleteMany?: EnrolledCourseUnitScalarWhereInput | EnrolledCourseUnitScalarWhereInput[]
  }

  export type ExamUncheckedUpdateManyWithoutCourseUnitNestedInput = {
    create?: XOR<ExamCreateWithoutCourseUnitInput, ExamUncheckedCreateWithoutCourseUnitInput> | ExamCreateWithoutCourseUnitInput[] | ExamUncheckedCreateWithoutCourseUnitInput[]
    connectOrCreate?: ExamCreateOrConnectWithoutCourseUnitInput | ExamCreateOrConnectWithoutCourseUnitInput[]
    upsert?: ExamUpsertWithWhereUniqueWithoutCourseUnitInput | ExamUpsertWithWhereUniqueWithoutCourseUnitInput[]
    createMany?: ExamCreateManyCourseUnitInputEnvelope
    set?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    disconnect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    delete?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    connect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    update?: ExamUpdateWithWhereUniqueWithoutCourseUnitInput | ExamUpdateWithWhereUniqueWithoutCourseUnitInput[]
    updateMany?: ExamUpdateManyWithWhereWithoutCourseUnitInput | ExamUpdateManyWithWhereWithoutCourseUnitInput[]
    deleteMany?: ExamScalarWhereInput | ExamScalarWhereInput[]
  }

  export type StudentCreateNestedOneWithoutEnrolledUnitsInput = {
    create?: XOR<StudentCreateWithoutEnrolledUnitsInput, StudentUncheckedCreateWithoutEnrolledUnitsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutEnrolledUnitsInput
    connect?: StudentWhereUniqueInput
  }

  export type CourseUnitCreateNestedOneWithoutEnrolledByInput = {
    create?: XOR<CourseUnitCreateWithoutEnrolledByInput, CourseUnitUncheckedCreateWithoutEnrolledByInput>
    connectOrCreate?: CourseUnitCreateOrConnectWithoutEnrolledByInput
    connect?: CourseUnitWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type StudentUpdateOneRequiredWithoutEnrolledUnitsNestedInput = {
    create?: XOR<StudentCreateWithoutEnrolledUnitsInput, StudentUncheckedCreateWithoutEnrolledUnitsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutEnrolledUnitsInput
    upsert?: StudentUpsertWithoutEnrolledUnitsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutEnrolledUnitsInput, StudentUpdateWithoutEnrolledUnitsInput>, StudentUncheckedUpdateWithoutEnrolledUnitsInput>
  }

  export type CourseUnitUpdateOneRequiredWithoutEnrolledByNestedInput = {
    create?: XOR<CourseUnitCreateWithoutEnrolledByInput, CourseUnitUncheckedCreateWithoutEnrolledByInput>
    connectOrCreate?: CourseUnitCreateOrConnectWithoutEnrolledByInput
    upsert?: CourseUnitUpsertWithoutEnrolledByInput
    connect?: CourseUnitWhereUniqueInput
    update?: XOR<XOR<CourseUnitUpdateToOneWithWhereWithoutEnrolledByInput, CourseUnitUpdateWithoutEnrolledByInput>, CourseUnitUncheckedUpdateWithoutEnrolledByInput>
  }

  export type CourseUnitCreateNestedOneWithoutExamsInput = {
    create?: XOR<CourseUnitCreateWithoutExamsInput, CourseUnitUncheckedCreateWithoutExamsInput>
    connectOrCreate?: CourseUnitCreateOrConnectWithoutExamsInput
    connect?: CourseUnitWhereUniqueInput
  }

  export type ExamAssignmentCreateNestedManyWithoutExamInput = {
    create?: XOR<ExamAssignmentCreateWithoutExamInput, ExamAssignmentUncheckedCreateWithoutExamInput> | ExamAssignmentCreateWithoutExamInput[] | ExamAssignmentUncheckedCreateWithoutExamInput[]
    connectOrCreate?: ExamAssignmentCreateOrConnectWithoutExamInput | ExamAssignmentCreateOrConnectWithoutExamInput[]
    createMany?: ExamAssignmentCreateManyExamInputEnvelope
    connect?: ExamAssignmentWhereUniqueInput | ExamAssignmentWhereUniqueInput[]
  }

  export type ExamAssignmentUncheckedCreateNestedManyWithoutExamInput = {
    create?: XOR<ExamAssignmentCreateWithoutExamInput, ExamAssignmentUncheckedCreateWithoutExamInput> | ExamAssignmentCreateWithoutExamInput[] | ExamAssignmentUncheckedCreateWithoutExamInput[]
    connectOrCreate?: ExamAssignmentCreateOrConnectWithoutExamInput | ExamAssignmentCreateOrConnectWithoutExamInput[]
    createMany?: ExamAssignmentCreateManyExamInputEnvelope
    connect?: ExamAssignmentWhereUniqueInput | ExamAssignmentWhereUniqueInput[]
  }

  export type CourseUnitUpdateOneRequiredWithoutExamsNestedInput = {
    create?: XOR<CourseUnitCreateWithoutExamsInput, CourseUnitUncheckedCreateWithoutExamsInput>
    connectOrCreate?: CourseUnitCreateOrConnectWithoutExamsInput
    upsert?: CourseUnitUpsertWithoutExamsInput
    connect?: CourseUnitWhereUniqueInput
    update?: XOR<XOR<CourseUnitUpdateToOneWithWhereWithoutExamsInput, CourseUnitUpdateWithoutExamsInput>, CourseUnitUncheckedUpdateWithoutExamsInput>
  }

  export type ExamAssignmentUpdateManyWithoutExamNestedInput = {
    create?: XOR<ExamAssignmentCreateWithoutExamInput, ExamAssignmentUncheckedCreateWithoutExamInput> | ExamAssignmentCreateWithoutExamInput[] | ExamAssignmentUncheckedCreateWithoutExamInput[]
    connectOrCreate?: ExamAssignmentCreateOrConnectWithoutExamInput | ExamAssignmentCreateOrConnectWithoutExamInput[]
    upsert?: ExamAssignmentUpsertWithWhereUniqueWithoutExamInput | ExamAssignmentUpsertWithWhereUniqueWithoutExamInput[]
    createMany?: ExamAssignmentCreateManyExamInputEnvelope
    set?: ExamAssignmentWhereUniqueInput | ExamAssignmentWhereUniqueInput[]
    disconnect?: ExamAssignmentWhereUniqueInput | ExamAssignmentWhereUniqueInput[]
    delete?: ExamAssignmentWhereUniqueInput | ExamAssignmentWhereUniqueInput[]
    connect?: ExamAssignmentWhereUniqueInput | ExamAssignmentWhereUniqueInput[]
    update?: ExamAssignmentUpdateWithWhereUniqueWithoutExamInput | ExamAssignmentUpdateWithWhereUniqueWithoutExamInput[]
    updateMany?: ExamAssignmentUpdateManyWithWhereWithoutExamInput | ExamAssignmentUpdateManyWithWhereWithoutExamInput[]
    deleteMany?: ExamAssignmentScalarWhereInput | ExamAssignmentScalarWhereInput[]
  }

  export type ExamAssignmentUncheckedUpdateManyWithoutExamNestedInput = {
    create?: XOR<ExamAssignmentCreateWithoutExamInput, ExamAssignmentUncheckedCreateWithoutExamInput> | ExamAssignmentCreateWithoutExamInput[] | ExamAssignmentUncheckedCreateWithoutExamInput[]
    connectOrCreate?: ExamAssignmentCreateOrConnectWithoutExamInput | ExamAssignmentCreateOrConnectWithoutExamInput[]
    upsert?: ExamAssignmentUpsertWithWhereUniqueWithoutExamInput | ExamAssignmentUpsertWithWhereUniqueWithoutExamInput[]
    createMany?: ExamAssignmentCreateManyExamInputEnvelope
    set?: ExamAssignmentWhereUniqueInput | ExamAssignmentWhereUniqueInput[]
    disconnect?: ExamAssignmentWhereUniqueInput | ExamAssignmentWhereUniqueInput[]
    delete?: ExamAssignmentWhereUniqueInput | ExamAssignmentWhereUniqueInput[]
    connect?: ExamAssignmentWhereUniqueInput | ExamAssignmentWhereUniqueInput[]
    update?: ExamAssignmentUpdateWithWhereUniqueWithoutExamInput | ExamAssignmentUpdateWithWhereUniqueWithoutExamInput[]
    updateMany?: ExamAssignmentUpdateManyWithWhereWithoutExamInput | ExamAssignmentUpdateManyWithWhereWithoutExamInput[]
    deleteMany?: ExamAssignmentScalarWhereInput | ExamAssignmentScalarWhereInput[]
  }

  export type InvigilatorCreateNestedOneWithoutAssignedExamsInput = {
    create?: XOR<InvigilatorCreateWithoutAssignedExamsInput, InvigilatorUncheckedCreateWithoutAssignedExamsInput>
    connectOrCreate?: InvigilatorCreateOrConnectWithoutAssignedExamsInput
    connect?: InvigilatorWhereUniqueInput
  }

  export type ExamCreateNestedOneWithoutInvigilatorsInput = {
    create?: XOR<ExamCreateWithoutInvigilatorsInput, ExamUncheckedCreateWithoutInvigilatorsInput>
    connectOrCreate?: ExamCreateOrConnectWithoutInvigilatorsInput
    connect?: ExamWhereUniqueInput
  }

  export type InvigilatorUpdateOneRequiredWithoutAssignedExamsNestedInput = {
    create?: XOR<InvigilatorCreateWithoutAssignedExamsInput, InvigilatorUncheckedCreateWithoutAssignedExamsInput>
    connectOrCreate?: InvigilatorCreateOrConnectWithoutAssignedExamsInput
    upsert?: InvigilatorUpsertWithoutAssignedExamsInput
    connect?: InvigilatorWhereUniqueInput
    update?: XOR<XOR<InvigilatorUpdateToOneWithWhereWithoutAssignedExamsInput, InvigilatorUpdateWithoutAssignedExamsInput>, InvigilatorUncheckedUpdateWithoutAssignedExamsInput>
  }

  export type ExamUpdateOneRequiredWithoutInvigilatorsNestedInput = {
    create?: XOR<ExamCreateWithoutInvigilatorsInput, ExamUncheckedCreateWithoutInvigilatorsInput>
    connectOrCreate?: ExamCreateOrConnectWithoutInvigilatorsInput
    upsert?: ExamUpsertWithoutInvigilatorsInput
    connect?: ExamWhereUniqueInput
    update?: XOR<XOR<ExamUpdateToOneWithWhereWithoutInvigilatorsInput, ExamUpdateWithoutInvigilatorsInput>, ExamUncheckedUpdateWithoutInvigilatorsInput>
  }

  export type StudentCreateNestedOneWithoutStudentQrCodesInput = {
    create?: XOR<StudentCreateWithoutStudentQrCodesInput, StudentUncheckedCreateWithoutStudentQrCodesInput>
    connectOrCreate?: StudentCreateOrConnectWithoutStudentQrCodesInput
    connect?: StudentWhereUniqueInput
  }

  export type StudentUpdateOneRequiredWithoutStudentQrCodesNestedInput = {
    create?: XOR<StudentCreateWithoutStudentQrCodesInput, StudentUncheckedCreateWithoutStudentQrCodesInput>
    connectOrCreate?: StudentCreateOrConnectWithoutStudentQrCodesInput
    upsert?: StudentUpsertWithoutStudentQrCodesInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutStudentQrCodesInput, StudentUpdateWithoutStudentQrCodesInput>, StudentUncheckedUpdateWithoutStudentQrCodesInput>
  }

  export type CourseCreateNestedOneWithoutProgrammesInput = {
    create?: XOR<CourseCreateWithoutProgrammesInput, CourseUncheckedCreateWithoutProgrammesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutProgrammesInput
    connect?: CourseWhereUniqueInput
  }

  export type StudentCreateNestedManyWithoutProgrammeInput = {
    create?: XOR<StudentCreateWithoutProgrammeInput, StudentUncheckedCreateWithoutProgrammeInput> | StudentCreateWithoutProgrammeInput[] | StudentUncheckedCreateWithoutProgrammeInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutProgrammeInput | StudentCreateOrConnectWithoutProgrammeInput[]
    createMany?: StudentCreateManyProgrammeInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedManyWithoutProgrammeInput = {
    create?: XOR<StudentCreateWithoutProgrammeInput, StudentUncheckedCreateWithoutProgrammeInput> | StudentCreateWithoutProgrammeInput[] | StudentUncheckedCreateWithoutProgrammeInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutProgrammeInput | StudentCreateOrConnectWithoutProgrammeInput[]
    createMany?: StudentCreateManyProgrammeInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type EnumStudyModeFieldUpdateOperationsInput = {
    set?: $Enums.StudyMode
  }

  export type CourseUpdateOneRequiredWithoutProgrammesNestedInput = {
    create?: XOR<CourseCreateWithoutProgrammesInput, CourseUncheckedCreateWithoutProgrammesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutProgrammesInput
    upsert?: CourseUpsertWithoutProgrammesInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutProgrammesInput, CourseUpdateWithoutProgrammesInput>, CourseUncheckedUpdateWithoutProgrammesInput>
  }

  export type StudentUpdateManyWithoutProgrammeNestedInput = {
    create?: XOR<StudentCreateWithoutProgrammeInput, StudentUncheckedCreateWithoutProgrammeInput> | StudentCreateWithoutProgrammeInput[] | StudentUncheckedCreateWithoutProgrammeInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutProgrammeInput | StudentCreateOrConnectWithoutProgrammeInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutProgrammeInput | StudentUpsertWithWhereUniqueWithoutProgrammeInput[]
    createMany?: StudentCreateManyProgrammeInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutProgrammeInput | StudentUpdateWithWhereUniqueWithoutProgrammeInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutProgrammeInput | StudentUpdateManyWithWhereWithoutProgrammeInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type StudentUncheckedUpdateManyWithoutProgrammeNestedInput = {
    create?: XOR<StudentCreateWithoutProgrammeInput, StudentUncheckedCreateWithoutProgrammeInput> | StudentCreateWithoutProgrammeInput[] | StudentUncheckedCreateWithoutProgrammeInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutProgrammeInput | StudentCreateOrConnectWithoutProgrammeInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutProgrammeInput | StudentUpsertWithWhereUniqueWithoutProgrammeInput[]
    createMany?: StudentCreateManyProgrammeInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutProgrammeInput | StudentUpdateWithWhereUniqueWithoutProgrammeInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutProgrammeInput | StudentUpdateManyWithWhereWithoutProgrammeInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type DepartmentCreateNestedManyWithoutFacultyOrSchoolInput = {
    create?: XOR<DepartmentCreateWithoutFacultyOrSchoolInput, DepartmentUncheckedCreateWithoutFacultyOrSchoolInput> | DepartmentCreateWithoutFacultyOrSchoolInput[] | DepartmentUncheckedCreateWithoutFacultyOrSchoolInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutFacultyOrSchoolInput | DepartmentCreateOrConnectWithoutFacultyOrSchoolInput[]
    createMany?: DepartmentCreateManyFacultyOrSchoolInputEnvelope
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
  }

  export type AdminCreateNestedManyWithoutFacultyOrSchoolInput = {
    create?: XOR<AdminCreateWithoutFacultyOrSchoolInput, AdminUncheckedCreateWithoutFacultyOrSchoolInput> | AdminCreateWithoutFacultyOrSchoolInput[] | AdminUncheckedCreateWithoutFacultyOrSchoolInput[]
    connectOrCreate?: AdminCreateOrConnectWithoutFacultyOrSchoolInput | AdminCreateOrConnectWithoutFacultyOrSchoolInput[]
    createMany?: AdminCreateManyFacultyOrSchoolInputEnvelope
    connect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
  }

  export type DepartmentUncheckedCreateNestedManyWithoutFacultyOrSchoolInput = {
    create?: XOR<DepartmentCreateWithoutFacultyOrSchoolInput, DepartmentUncheckedCreateWithoutFacultyOrSchoolInput> | DepartmentCreateWithoutFacultyOrSchoolInput[] | DepartmentUncheckedCreateWithoutFacultyOrSchoolInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutFacultyOrSchoolInput | DepartmentCreateOrConnectWithoutFacultyOrSchoolInput[]
    createMany?: DepartmentCreateManyFacultyOrSchoolInputEnvelope
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
  }

  export type AdminUncheckedCreateNestedManyWithoutFacultyOrSchoolInput = {
    create?: XOR<AdminCreateWithoutFacultyOrSchoolInput, AdminUncheckedCreateWithoutFacultyOrSchoolInput> | AdminCreateWithoutFacultyOrSchoolInput[] | AdminUncheckedCreateWithoutFacultyOrSchoolInput[]
    connectOrCreate?: AdminCreateOrConnectWithoutFacultyOrSchoolInput | AdminCreateOrConnectWithoutFacultyOrSchoolInput[]
    createMany?: AdminCreateManyFacultyOrSchoolInputEnvelope
    connect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
  }

  export type DepartmentUpdateManyWithoutFacultyOrSchoolNestedInput = {
    create?: XOR<DepartmentCreateWithoutFacultyOrSchoolInput, DepartmentUncheckedCreateWithoutFacultyOrSchoolInput> | DepartmentCreateWithoutFacultyOrSchoolInput[] | DepartmentUncheckedCreateWithoutFacultyOrSchoolInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutFacultyOrSchoolInput | DepartmentCreateOrConnectWithoutFacultyOrSchoolInput[]
    upsert?: DepartmentUpsertWithWhereUniqueWithoutFacultyOrSchoolInput | DepartmentUpsertWithWhereUniqueWithoutFacultyOrSchoolInput[]
    createMany?: DepartmentCreateManyFacultyOrSchoolInputEnvelope
    set?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    disconnect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    delete?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    update?: DepartmentUpdateWithWhereUniqueWithoutFacultyOrSchoolInput | DepartmentUpdateWithWhereUniqueWithoutFacultyOrSchoolInput[]
    updateMany?: DepartmentUpdateManyWithWhereWithoutFacultyOrSchoolInput | DepartmentUpdateManyWithWhereWithoutFacultyOrSchoolInput[]
    deleteMany?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
  }

  export type AdminUpdateManyWithoutFacultyOrSchoolNestedInput = {
    create?: XOR<AdminCreateWithoutFacultyOrSchoolInput, AdminUncheckedCreateWithoutFacultyOrSchoolInput> | AdminCreateWithoutFacultyOrSchoolInput[] | AdminUncheckedCreateWithoutFacultyOrSchoolInput[]
    connectOrCreate?: AdminCreateOrConnectWithoutFacultyOrSchoolInput | AdminCreateOrConnectWithoutFacultyOrSchoolInput[]
    upsert?: AdminUpsertWithWhereUniqueWithoutFacultyOrSchoolInput | AdminUpsertWithWhereUniqueWithoutFacultyOrSchoolInput[]
    createMany?: AdminCreateManyFacultyOrSchoolInputEnvelope
    set?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    disconnect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    delete?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    connect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    update?: AdminUpdateWithWhereUniqueWithoutFacultyOrSchoolInput | AdminUpdateWithWhereUniqueWithoutFacultyOrSchoolInput[]
    updateMany?: AdminUpdateManyWithWhereWithoutFacultyOrSchoolInput | AdminUpdateManyWithWhereWithoutFacultyOrSchoolInput[]
    deleteMany?: AdminScalarWhereInput | AdminScalarWhereInput[]
  }

  export type DepartmentUncheckedUpdateManyWithoutFacultyOrSchoolNestedInput = {
    create?: XOR<DepartmentCreateWithoutFacultyOrSchoolInput, DepartmentUncheckedCreateWithoutFacultyOrSchoolInput> | DepartmentCreateWithoutFacultyOrSchoolInput[] | DepartmentUncheckedCreateWithoutFacultyOrSchoolInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutFacultyOrSchoolInput | DepartmentCreateOrConnectWithoutFacultyOrSchoolInput[]
    upsert?: DepartmentUpsertWithWhereUniqueWithoutFacultyOrSchoolInput | DepartmentUpsertWithWhereUniqueWithoutFacultyOrSchoolInput[]
    createMany?: DepartmentCreateManyFacultyOrSchoolInputEnvelope
    set?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    disconnect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    delete?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    update?: DepartmentUpdateWithWhereUniqueWithoutFacultyOrSchoolInput | DepartmentUpdateWithWhereUniqueWithoutFacultyOrSchoolInput[]
    updateMany?: DepartmentUpdateManyWithWhereWithoutFacultyOrSchoolInput | DepartmentUpdateManyWithWhereWithoutFacultyOrSchoolInput[]
    deleteMany?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
  }

  export type AdminUncheckedUpdateManyWithoutFacultyOrSchoolNestedInput = {
    create?: XOR<AdminCreateWithoutFacultyOrSchoolInput, AdminUncheckedCreateWithoutFacultyOrSchoolInput> | AdminCreateWithoutFacultyOrSchoolInput[] | AdminUncheckedCreateWithoutFacultyOrSchoolInput[]
    connectOrCreate?: AdminCreateOrConnectWithoutFacultyOrSchoolInput | AdminCreateOrConnectWithoutFacultyOrSchoolInput[]
    upsert?: AdminUpsertWithWhereUniqueWithoutFacultyOrSchoolInput | AdminUpsertWithWhereUniqueWithoutFacultyOrSchoolInput[]
    createMany?: AdminCreateManyFacultyOrSchoolInputEnvelope
    set?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    disconnect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    delete?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    connect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    update?: AdminUpdateWithWhereUniqueWithoutFacultyOrSchoolInput | AdminUpdateWithWhereUniqueWithoutFacultyOrSchoolInput[]
    updateMany?: AdminUpdateManyWithWhereWithoutFacultyOrSchoolInput | AdminUpdateManyWithWhereWithoutFacultyOrSchoolInput[]
    deleteMany?: AdminScalarWhereInput | AdminScalarWhereInput[]
  }

  export type FacultyOrSchoolCreateNestedOneWithoutDepartmentsInput = {
    create?: XOR<FacultyOrSchoolCreateWithoutDepartmentsInput, FacultyOrSchoolUncheckedCreateWithoutDepartmentsInput>
    connectOrCreate?: FacultyOrSchoolCreateOrConnectWithoutDepartmentsInput
    connect?: FacultyOrSchoolWhereUniqueInput
  }

  export type CourseCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<CourseCreateWithoutDepartmentInput, CourseUncheckedCreateWithoutDepartmentInput> | CourseCreateWithoutDepartmentInput[] | CourseUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutDepartmentInput | CourseCreateOrConnectWithoutDepartmentInput[]
    createMany?: CourseCreateManyDepartmentInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type InvigilatorCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<InvigilatorCreateWithoutDepartmentInput, InvigilatorUncheckedCreateWithoutDepartmentInput> | InvigilatorCreateWithoutDepartmentInput[] | InvigilatorUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: InvigilatorCreateOrConnectWithoutDepartmentInput | InvigilatorCreateOrConnectWithoutDepartmentInput[]
    createMany?: InvigilatorCreateManyDepartmentInputEnvelope
    connect?: InvigilatorWhereUniqueInput | InvigilatorWhereUniqueInput[]
  }

  export type CourseUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<CourseCreateWithoutDepartmentInput, CourseUncheckedCreateWithoutDepartmentInput> | CourseCreateWithoutDepartmentInput[] | CourseUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutDepartmentInput | CourseCreateOrConnectWithoutDepartmentInput[]
    createMany?: CourseCreateManyDepartmentInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type InvigilatorUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<InvigilatorCreateWithoutDepartmentInput, InvigilatorUncheckedCreateWithoutDepartmentInput> | InvigilatorCreateWithoutDepartmentInput[] | InvigilatorUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: InvigilatorCreateOrConnectWithoutDepartmentInput | InvigilatorCreateOrConnectWithoutDepartmentInput[]
    createMany?: InvigilatorCreateManyDepartmentInputEnvelope
    connect?: InvigilatorWhereUniqueInput | InvigilatorWhereUniqueInput[]
  }

  export type FacultyOrSchoolUpdateOneRequiredWithoutDepartmentsNestedInput = {
    create?: XOR<FacultyOrSchoolCreateWithoutDepartmentsInput, FacultyOrSchoolUncheckedCreateWithoutDepartmentsInput>
    connectOrCreate?: FacultyOrSchoolCreateOrConnectWithoutDepartmentsInput
    upsert?: FacultyOrSchoolUpsertWithoutDepartmentsInput
    connect?: FacultyOrSchoolWhereUniqueInput
    update?: XOR<XOR<FacultyOrSchoolUpdateToOneWithWhereWithoutDepartmentsInput, FacultyOrSchoolUpdateWithoutDepartmentsInput>, FacultyOrSchoolUncheckedUpdateWithoutDepartmentsInput>
  }

  export type CourseUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<CourseCreateWithoutDepartmentInput, CourseUncheckedCreateWithoutDepartmentInput> | CourseCreateWithoutDepartmentInput[] | CourseUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutDepartmentInput | CourseCreateOrConnectWithoutDepartmentInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutDepartmentInput | CourseUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: CourseCreateManyDepartmentInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutDepartmentInput | CourseUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutDepartmentInput | CourseUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type InvigilatorUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<InvigilatorCreateWithoutDepartmentInput, InvigilatorUncheckedCreateWithoutDepartmentInput> | InvigilatorCreateWithoutDepartmentInput[] | InvigilatorUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: InvigilatorCreateOrConnectWithoutDepartmentInput | InvigilatorCreateOrConnectWithoutDepartmentInput[]
    upsert?: InvigilatorUpsertWithWhereUniqueWithoutDepartmentInput | InvigilatorUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: InvigilatorCreateManyDepartmentInputEnvelope
    set?: InvigilatorWhereUniqueInput | InvigilatorWhereUniqueInput[]
    disconnect?: InvigilatorWhereUniqueInput | InvigilatorWhereUniqueInput[]
    delete?: InvigilatorWhereUniqueInput | InvigilatorWhereUniqueInput[]
    connect?: InvigilatorWhereUniqueInput | InvigilatorWhereUniqueInput[]
    update?: InvigilatorUpdateWithWhereUniqueWithoutDepartmentInput | InvigilatorUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: InvigilatorUpdateManyWithWhereWithoutDepartmentInput | InvigilatorUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: InvigilatorScalarWhereInput | InvigilatorScalarWhereInput[]
  }

  export type CourseUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<CourseCreateWithoutDepartmentInput, CourseUncheckedCreateWithoutDepartmentInput> | CourseCreateWithoutDepartmentInput[] | CourseUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutDepartmentInput | CourseCreateOrConnectWithoutDepartmentInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutDepartmentInput | CourseUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: CourseCreateManyDepartmentInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutDepartmentInput | CourseUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutDepartmentInput | CourseUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type InvigilatorUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<InvigilatorCreateWithoutDepartmentInput, InvigilatorUncheckedCreateWithoutDepartmentInput> | InvigilatorCreateWithoutDepartmentInput[] | InvigilatorUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: InvigilatorCreateOrConnectWithoutDepartmentInput | InvigilatorCreateOrConnectWithoutDepartmentInput[]
    upsert?: InvigilatorUpsertWithWhereUniqueWithoutDepartmentInput | InvigilatorUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: InvigilatorCreateManyDepartmentInputEnvelope
    set?: InvigilatorWhereUniqueInput | InvigilatorWhereUniqueInput[]
    disconnect?: InvigilatorWhereUniqueInput | InvigilatorWhereUniqueInput[]
    delete?: InvigilatorWhereUniqueInput | InvigilatorWhereUniqueInput[]
    connect?: InvigilatorWhereUniqueInput | InvigilatorWhereUniqueInput[]
    update?: InvigilatorUpdateWithWhereUniqueWithoutDepartmentInput | InvigilatorUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: InvigilatorUpdateManyWithWhereWithoutDepartmentInput | InvigilatorUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: InvigilatorScalarWhereInput | InvigilatorScalarWhereInput[]
  }

  export type DepartmentCreateNestedOneWithoutCoursesInput = {
    create?: XOR<DepartmentCreateWithoutCoursesInput, DepartmentUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutCoursesInput
    connect?: DepartmentWhereUniqueInput
  }

  export type ProgrammeCreateNestedManyWithoutCourseInput = {
    create?: XOR<ProgrammeCreateWithoutCourseInput, ProgrammeUncheckedCreateWithoutCourseInput> | ProgrammeCreateWithoutCourseInput[] | ProgrammeUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ProgrammeCreateOrConnectWithoutCourseInput | ProgrammeCreateOrConnectWithoutCourseInput[]
    createMany?: ProgrammeCreateManyCourseInputEnvelope
    connect?: ProgrammeWhereUniqueInput | ProgrammeWhereUniqueInput[]
  }

  export type CourseUnitCreateNestedManyWithoutCourseInput = {
    create?: XOR<CourseUnitCreateWithoutCourseInput, CourseUnitUncheckedCreateWithoutCourseInput> | CourseUnitCreateWithoutCourseInput[] | CourseUnitUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseUnitCreateOrConnectWithoutCourseInput | CourseUnitCreateOrConnectWithoutCourseInput[]
    createMany?: CourseUnitCreateManyCourseInputEnvelope
    connect?: CourseUnitWhereUniqueInput | CourseUnitWhereUniqueInput[]
  }

  export type ProgrammeUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<ProgrammeCreateWithoutCourseInput, ProgrammeUncheckedCreateWithoutCourseInput> | ProgrammeCreateWithoutCourseInput[] | ProgrammeUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ProgrammeCreateOrConnectWithoutCourseInput | ProgrammeCreateOrConnectWithoutCourseInput[]
    createMany?: ProgrammeCreateManyCourseInputEnvelope
    connect?: ProgrammeWhereUniqueInput | ProgrammeWhereUniqueInput[]
  }

  export type CourseUnitUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<CourseUnitCreateWithoutCourseInput, CourseUnitUncheckedCreateWithoutCourseInput> | CourseUnitCreateWithoutCourseInput[] | CourseUnitUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseUnitCreateOrConnectWithoutCourseInput | CourseUnitCreateOrConnectWithoutCourseInput[]
    createMany?: CourseUnitCreateManyCourseInputEnvelope
    connect?: CourseUnitWhereUniqueInput | CourseUnitWhereUniqueInput[]
  }

  export type EnumCourseTypeFieldUpdateOperationsInput = {
    set?: $Enums.CourseType
  }

  export type DepartmentUpdateOneRequiredWithoutCoursesNestedInput = {
    create?: XOR<DepartmentCreateWithoutCoursesInput, DepartmentUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutCoursesInput
    upsert?: DepartmentUpsertWithoutCoursesInput
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutCoursesInput, DepartmentUpdateWithoutCoursesInput>, DepartmentUncheckedUpdateWithoutCoursesInput>
  }

  export type ProgrammeUpdateManyWithoutCourseNestedInput = {
    create?: XOR<ProgrammeCreateWithoutCourseInput, ProgrammeUncheckedCreateWithoutCourseInput> | ProgrammeCreateWithoutCourseInput[] | ProgrammeUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ProgrammeCreateOrConnectWithoutCourseInput | ProgrammeCreateOrConnectWithoutCourseInput[]
    upsert?: ProgrammeUpsertWithWhereUniqueWithoutCourseInput | ProgrammeUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: ProgrammeCreateManyCourseInputEnvelope
    set?: ProgrammeWhereUniqueInput | ProgrammeWhereUniqueInput[]
    disconnect?: ProgrammeWhereUniqueInput | ProgrammeWhereUniqueInput[]
    delete?: ProgrammeWhereUniqueInput | ProgrammeWhereUniqueInput[]
    connect?: ProgrammeWhereUniqueInput | ProgrammeWhereUniqueInput[]
    update?: ProgrammeUpdateWithWhereUniqueWithoutCourseInput | ProgrammeUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: ProgrammeUpdateManyWithWhereWithoutCourseInput | ProgrammeUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: ProgrammeScalarWhereInput | ProgrammeScalarWhereInput[]
  }

  export type CourseUnitUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CourseUnitCreateWithoutCourseInput, CourseUnitUncheckedCreateWithoutCourseInput> | CourseUnitCreateWithoutCourseInput[] | CourseUnitUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseUnitCreateOrConnectWithoutCourseInput | CourseUnitCreateOrConnectWithoutCourseInput[]
    upsert?: CourseUnitUpsertWithWhereUniqueWithoutCourseInput | CourseUnitUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CourseUnitCreateManyCourseInputEnvelope
    set?: CourseUnitWhereUniqueInput | CourseUnitWhereUniqueInput[]
    disconnect?: CourseUnitWhereUniqueInput | CourseUnitWhereUniqueInput[]
    delete?: CourseUnitWhereUniqueInput | CourseUnitWhereUniqueInput[]
    connect?: CourseUnitWhereUniqueInput | CourseUnitWhereUniqueInput[]
    update?: CourseUnitUpdateWithWhereUniqueWithoutCourseInput | CourseUnitUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CourseUnitUpdateManyWithWhereWithoutCourseInput | CourseUnitUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CourseUnitScalarWhereInput | CourseUnitScalarWhereInput[]
  }

  export type ProgrammeUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<ProgrammeCreateWithoutCourseInput, ProgrammeUncheckedCreateWithoutCourseInput> | ProgrammeCreateWithoutCourseInput[] | ProgrammeUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ProgrammeCreateOrConnectWithoutCourseInput | ProgrammeCreateOrConnectWithoutCourseInput[]
    upsert?: ProgrammeUpsertWithWhereUniqueWithoutCourseInput | ProgrammeUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: ProgrammeCreateManyCourseInputEnvelope
    set?: ProgrammeWhereUniqueInput | ProgrammeWhereUniqueInput[]
    disconnect?: ProgrammeWhereUniqueInput | ProgrammeWhereUniqueInput[]
    delete?: ProgrammeWhereUniqueInput | ProgrammeWhereUniqueInput[]
    connect?: ProgrammeWhereUniqueInput | ProgrammeWhereUniqueInput[]
    update?: ProgrammeUpdateWithWhereUniqueWithoutCourseInput | ProgrammeUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: ProgrammeUpdateManyWithWhereWithoutCourseInput | ProgrammeUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: ProgrammeScalarWhereInput | ProgrammeScalarWhereInput[]
  }

  export type CourseUnitUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CourseUnitCreateWithoutCourseInput, CourseUnitUncheckedCreateWithoutCourseInput> | CourseUnitCreateWithoutCourseInput[] | CourseUnitUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseUnitCreateOrConnectWithoutCourseInput | CourseUnitCreateOrConnectWithoutCourseInput[]
    upsert?: CourseUnitUpsertWithWhereUniqueWithoutCourseInput | CourseUnitUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CourseUnitCreateManyCourseInputEnvelope
    set?: CourseUnitWhereUniqueInput | CourseUnitWhereUniqueInput[]
    disconnect?: CourseUnitWhereUniqueInput | CourseUnitWhereUniqueInput[]
    delete?: CourseUnitWhereUniqueInput | CourseUnitWhereUniqueInput[]
    connect?: CourseUnitWhereUniqueInput | CourseUnitWhereUniqueInput[]
    update?: CourseUnitUpdateWithWhereUniqueWithoutCourseInput | CourseUnitUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CourseUnitUpdateManyWithWhereWithoutCourseInput | CourseUnitUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CourseUnitScalarWhereInput | CourseUnitScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedEnumSemesterFilter<$PrismaModel = never> = {
    equals?: $Enums.Semester | EnumSemesterFieldRefInput<$PrismaModel>
    in?: $Enums.Semester[] | ListEnumSemesterFieldRefInput<$PrismaModel>
    notIn?: $Enums.Semester[] | ListEnumSemesterFieldRefInput<$PrismaModel>
    not?: NestedEnumSemesterFilter<$PrismaModel> | $Enums.Semester
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPermitStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PermitStatus | EnumPermitStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PermitStatus[] | ListEnumPermitStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PermitStatus[] | ListEnumPermitStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPermitStatusFilter<$PrismaModel> | $Enums.PermitStatus
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumSemesterWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Semester | EnumSemesterFieldRefInput<$PrismaModel>
    in?: $Enums.Semester[] | ListEnumSemesterFieldRefInput<$PrismaModel>
    notIn?: $Enums.Semester[] | ListEnumSemesterFieldRefInput<$PrismaModel>
    not?: NestedEnumSemesterWithAggregatesFilter<$PrismaModel> | $Enums.Semester
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSemesterFilter<$PrismaModel>
    _max?: NestedEnumSemesterFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedEnumPermitStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PermitStatus | EnumPermitStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PermitStatus[] | ListEnumPermitStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PermitStatus[] | ListEnumPermitStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPermitStatusWithAggregatesFilter<$PrismaModel> | $Enums.PermitStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPermitStatusFilter<$PrismaModel>
    _max?: NestedEnumPermitStatusFilter<$PrismaModel>
  }

  export type NestedEnumCourseCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.CourseCategory | EnumCourseCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.CourseCategory[] | ListEnumCourseCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.CourseCategory[] | ListEnumCourseCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCourseCategoryFilter<$PrismaModel> | $Enums.CourseCategory
  }

  export type NestedEnumCourseCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CourseCategory | EnumCourseCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.CourseCategory[] | ListEnumCourseCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.CourseCategory[] | ListEnumCourseCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCourseCategoryWithAggregatesFilter<$PrismaModel> | $Enums.CourseCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCourseCategoryFilter<$PrismaModel>
    _max?: NestedEnumCourseCategoryFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumStudyModeFilter<$PrismaModel = never> = {
    equals?: $Enums.StudyMode | EnumStudyModeFieldRefInput<$PrismaModel>
    in?: $Enums.StudyMode[] | ListEnumStudyModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StudyMode[] | ListEnumStudyModeFieldRefInput<$PrismaModel>
    not?: NestedEnumStudyModeFilter<$PrismaModel> | $Enums.StudyMode
  }

  export type NestedEnumStudyModeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StudyMode | EnumStudyModeFieldRefInput<$PrismaModel>
    in?: $Enums.StudyMode[] | ListEnumStudyModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StudyMode[] | ListEnumStudyModeFieldRefInput<$PrismaModel>
    not?: NestedEnumStudyModeWithAggregatesFilter<$PrismaModel> | $Enums.StudyMode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStudyModeFilter<$PrismaModel>
    _max?: NestedEnumStudyModeFilter<$PrismaModel>
  }

  export type NestedEnumCourseTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CourseType | EnumCourseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CourseType[] | ListEnumCourseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CourseType[] | ListEnumCourseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCourseTypeFilter<$PrismaModel> | $Enums.CourseType
  }

  export type NestedEnumCourseTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CourseType | EnumCourseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CourseType[] | ListEnumCourseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CourseType[] | ListEnumCourseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCourseTypeWithAggregatesFilter<$PrismaModel> | $Enums.CourseType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCourseTypeFilter<$PrismaModel>
    _max?: NestedEnumCourseTypeFilter<$PrismaModel>
  }

  export type StudentCreateWithoutUserInput = {
    firstName: string
    otherNames?: string | null
    lastName: string
    studentNo: string
    regNo: string
    gender: $Enums.Gender
    studyYear: number
    campus: string
    academicYear: string
    currentSemester: $Enums.Semester
    picture?: string | null
    paymentStatus?: $Enums.PaymentStatus
    permitStatus?: $Enums.PermitStatus
    programme: ProgrammeCreateNestedOneWithoutStudentsInput
    enrolledUnits?: EnrolledCourseUnitCreateNestedManyWithoutStudentInput
    studentQrCodes?: StudentQrCodeCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutUserInput = {
    firstName: string
    otherNames?: string | null
    lastName: string
    studentNo: string
    regNo: string
    gender: $Enums.Gender
    studyYear: number
    campus: string
    academicYear: string
    currentSemester: $Enums.Semester
    picture?: string | null
    paymentStatus?: $Enums.PaymentStatus
    permitStatus?: $Enums.PermitStatus
    programmeId: string
    enrolledUnits?: EnrolledCourseUnitUncheckedCreateNestedManyWithoutStudentInput
    studentQrCodes?: StudentQrCodeUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutUserInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
  }

  export type InvigilatorCreateWithoutUserInput = {
    invigilatorNumber: string
    title: string
    firstName: string
    otherNames?: string | null
    lastName: string
    picture?: string | null
    assignedExams?: ExamAssignmentCreateNestedManyWithoutInvigilatorInput
    department: DepartmentCreateNestedOneWithoutInvigilatorsInput
  }

  export type InvigilatorUncheckedCreateWithoutUserInput = {
    invigilatorNumber: string
    title: string
    firstName: string
    otherNames?: string | null
    lastName: string
    picture?: string | null
    departmentId: string
    assignedExams?: ExamAssignmentUncheckedCreateNestedManyWithoutInvigilatorInput
  }

  export type InvigilatorCreateOrConnectWithoutUserInput = {
    where: InvigilatorWhereUniqueInput
    create: XOR<InvigilatorCreateWithoutUserInput, InvigilatorUncheckedCreateWithoutUserInput>
  }

  export type AdminCreateWithoutUserInput = {
    firstName: string
    otherNames?: string | null
    lastName: string
    picture?: string | null
    facultyOrSchool: FacultyOrSchoolCreateNestedOneWithoutAdminsInput
  }

  export type AdminUncheckedCreateWithoutUserInput = {
    firstName: string
    otherNames?: string | null
    lastName: string
    picture?: string | null
    facultyOrSchoolId: string
  }

  export type AdminCreateOrConnectWithoutUserInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
  }

  export type StudentUpsertWithoutUserInput = {
    update: XOR<StudentUpdateWithoutUserInput, StudentUncheckedUpdateWithoutUserInput>
    create: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutUserInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutUserInput, StudentUncheckedUpdateWithoutUserInput>
  }

  export type StudentUpdateWithoutUserInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    otherNames?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    studentNo?: StringFieldUpdateOperationsInput | string
    regNo?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    studyYear?: IntFieldUpdateOperationsInput | number
    campus?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    currentSemester?: EnumSemesterFieldUpdateOperationsInput | $Enums.Semester
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    permitStatus?: EnumPermitStatusFieldUpdateOperationsInput | $Enums.PermitStatus
    programme?: ProgrammeUpdateOneRequiredWithoutStudentsNestedInput
    enrolledUnits?: EnrolledCourseUnitUpdateManyWithoutStudentNestedInput
    studentQrCodes?: StudentQrCodeUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutUserInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    otherNames?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    studentNo?: StringFieldUpdateOperationsInput | string
    regNo?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    studyYear?: IntFieldUpdateOperationsInput | number
    campus?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    currentSemester?: EnumSemesterFieldUpdateOperationsInput | $Enums.Semester
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    permitStatus?: EnumPermitStatusFieldUpdateOperationsInput | $Enums.PermitStatus
    programmeId?: StringFieldUpdateOperationsInput | string
    enrolledUnits?: EnrolledCourseUnitUncheckedUpdateManyWithoutStudentNestedInput
    studentQrCodes?: StudentQrCodeUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type InvigilatorUpsertWithoutUserInput = {
    update: XOR<InvigilatorUpdateWithoutUserInput, InvigilatorUncheckedUpdateWithoutUserInput>
    create: XOR<InvigilatorCreateWithoutUserInput, InvigilatorUncheckedCreateWithoutUserInput>
    where?: InvigilatorWhereInput
  }

  export type InvigilatorUpdateToOneWithWhereWithoutUserInput = {
    where?: InvigilatorWhereInput
    data: XOR<InvigilatorUpdateWithoutUserInput, InvigilatorUncheckedUpdateWithoutUserInput>
  }

  export type InvigilatorUpdateWithoutUserInput = {
    invigilatorNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    otherNames?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    assignedExams?: ExamAssignmentUpdateManyWithoutInvigilatorNestedInput
    department?: DepartmentUpdateOneRequiredWithoutInvigilatorsNestedInput
  }

  export type InvigilatorUncheckedUpdateWithoutUserInput = {
    invigilatorNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    otherNames?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    departmentId?: StringFieldUpdateOperationsInput | string
    assignedExams?: ExamAssignmentUncheckedUpdateManyWithoutInvigilatorNestedInput
  }

  export type AdminUpsertWithoutUserInput = {
    update: XOR<AdminUpdateWithoutUserInput, AdminUncheckedUpdateWithoutUserInput>
    create: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutUserInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutUserInput, AdminUncheckedUpdateWithoutUserInput>
  }

  export type AdminUpdateWithoutUserInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    otherNames?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    facultyOrSchool?: FacultyOrSchoolUpdateOneRequiredWithoutAdminsNestedInput
  }

  export type AdminUncheckedUpdateWithoutUserInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    otherNames?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    facultyOrSchoolId?: StringFieldUpdateOperationsInput | string
  }

  export type ProgrammeCreateWithoutStudentsInput = {
    id?: string
    name: string
    programme: $Enums.StudyMode
    course: CourseCreateNestedOneWithoutProgrammesInput
  }

  export type ProgrammeUncheckedCreateWithoutStudentsInput = {
    id?: string
    name: string
    programme: $Enums.StudyMode
    courseId: string
  }

  export type ProgrammeCreateOrConnectWithoutStudentsInput = {
    where: ProgrammeWhereUniqueInput
    create: XOR<ProgrammeCreateWithoutStudentsInput, ProgrammeUncheckedCreateWithoutStudentsInput>
  }

  export type UserCreateWithoutStudentInput = {
    id?: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    invigilator?: InvigilatorCreateNestedOneWithoutUserInput
    admin?: AdminCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStudentInput = {
    id?: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    invigilator?: InvigilatorUncheckedCreateNestedOneWithoutUserInput
    admin?: AdminUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStudentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
  }

  export type EnrolledCourseUnitCreateWithoutStudentInput = {
    id?: string
    attempt?: number
    year: number
    semester: $Enums.Semester
    isInvigilatorApproved?: boolean
    invigilatorApprovedAt?: Date | string | null
    approvedBy?: string | null
    courseUnit: CourseUnitCreateNestedOneWithoutEnrolledByInput
  }

  export type EnrolledCourseUnitUncheckedCreateWithoutStudentInput = {
    id?: string
    courseUnitId: string
    attempt?: number
    year: number
    semester: $Enums.Semester
    isInvigilatorApproved?: boolean
    invigilatorApprovedAt?: Date | string | null
    approvedBy?: string | null
  }

  export type EnrolledCourseUnitCreateOrConnectWithoutStudentInput = {
    where: EnrolledCourseUnitWhereUniqueInput
    create: XOR<EnrolledCourseUnitCreateWithoutStudentInput, EnrolledCourseUnitUncheckedCreateWithoutStudentInput>
  }

  export type EnrolledCourseUnitCreateManyStudentInputEnvelope = {
    data: EnrolledCourseUnitCreateManyStudentInput | EnrolledCourseUnitCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type StudentQrCodeCreateWithoutStudentInput = {
    id?: string
    qrCode?: string | null
    semester: $Enums.Semester
    issuedAt: Date | string
    expiresAt: Date | string
    isActive?: boolean
  }

  export type StudentQrCodeUncheckedCreateWithoutStudentInput = {
    id?: string
    qrCode?: string | null
    semester: $Enums.Semester
    issuedAt: Date | string
    expiresAt: Date | string
    isActive?: boolean
  }

  export type StudentQrCodeCreateOrConnectWithoutStudentInput = {
    where: StudentQrCodeWhereUniqueInput
    create: XOR<StudentQrCodeCreateWithoutStudentInput, StudentQrCodeUncheckedCreateWithoutStudentInput>
  }

  export type StudentQrCodeCreateManyStudentInputEnvelope = {
    data: StudentQrCodeCreateManyStudentInput | StudentQrCodeCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type ProgrammeUpsertWithoutStudentsInput = {
    update: XOR<ProgrammeUpdateWithoutStudentsInput, ProgrammeUncheckedUpdateWithoutStudentsInput>
    create: XOR<ProgrammeCreateWithoutStudentsInput, ProgrammeUncheckedCreateWithoutStudentsInput>
    where?: ProgrammeWhereInput
  }

  export type ProgrammeUpdateToOneWithWhereWithoutStudentsInput = {
    where?: ProgrammeWhereInput
    data: XOR<ProgrammeUpdateWithoutStudentsInput, ProgrammeUncheckedUpdateWithoutStudentsInput>
  }

  export type ProgrammeUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    programme?: EnumStudyModeFieldUpdateOperationsInput | $Enums.StudyMode
    course?: CourseUpdateOneRequiredWithoutProgrammesNestedInput
  }

  export type ProgrammeUncheckedUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    programme?: EnumStudyModeFieldUpdateOperationsInput | $Enums.StudyMode
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutStudentInput = {
    update: XOR<UserUpdateWithoutStudentInput, UserUncheckedUpdateWithoutStudentInput>
    create: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStudentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStudentInput, UserUncheckedUpdateWithoutStudentInput>
  }

  export type UserUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invigilator?: InvigilatorUpdateOneWithoutUserNestedInput
    admin?: AdminUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invigilator?: InvigilatorUncheckedUpdateOneWithoutUserNestedInput
    admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
  }

  export type EnrolledCourseUnitUpsertWithWhereUniqueWithoutStudentInput = {
    where: EnrolledCourseUnitWhereUniqueInput
    update: XOR<EnrolledCourseUnitUpdateWithoutStudentInput, EnrolledCourseUnitUncheckedUpdateWithoutStudentInput>
    create: XOR<EnrolledCourseUnitCreateWithoutStudentInput, EnrolledCourseUnitUncheckedCreateWithoutStudentInput>
  }

  export type EnrolledCourseUnitUpdateWithWhereUniqueWithoutStudentInput = {
    where: EnrolledCourseUnitWhereUniqueInput
    data: XOR<EnrolledCourseUnitUpdateWithoutStudentInput, EnrolledCourseUnitUncheckedUpdateWithoutStudentInput>
  }

  export type EnrolledCourseUnitUpdateManyWithWhereWithoutStudentInput = {
    where: EnrolledCourseUnitScalarWhereInput
    data: XOR<EnrolledCourseUnitUpdateManyMutationInput, EnrolledCourseUnitUncheckedUpdateManyWithoutStudentInput>
  }

  export type EnrolledCourseUnitScalarWhereInput = {
    AND?: EnrolledCourseUnitScalarWhereInput | EnrolledCourseUnitScalarWhereInput[]
    OR?: EnrolledCourseUnitScalarWhereInput[]
    NOT?: EnrolledCourseUnitScalarWhereInput | EnrolledCourseUnitScalarWhereInput[]
    id?: StringFilter<"EnrolledCourseUnit"> | string
    studentId?: StringFilter<"EnrolledCourseUnit"> | string
    courseUnitId?: StringFilter<"EnrolledCourseUnit"> | string
    attempt?: IntFilter<"EnrolledCourseUnit"> | number
    year?: IntFilter<"EnrolledCourseUnit"> | number
    semester?: EnumSemesterFilter<"EnrolledCourseUnit"> | $Enums.Semester
    isInvigilatorApproved?: BoolFilter<"EnrolledCourseUnit"> | boolean
    invigilatorApprovedAt?: DateTimeNullableFilter<"EnrolledCourseUnit"> | Date | string | null
    approvedBy?: StringNullableFilter<"EnrolledCourseUnit"> | string | null
  }

  export type StudentQrCodeUpsertWithWhereUniqueWithoutStudentInput = {
    where: StudentQrCodeWhereUniqueInput
    update: XOR<StudentQrCodeUpdateWithoutStudentInput, StudentQrCodeUncheckedUpdateWithoutStudentInput>
    create: XOR<StudentQrCodeCreateWithoutStudentInput, StudentQrCodeUncheckedCreateWithoutStudentInput>
  }

  export type StudentQrCodeUpdateWithWhereUniqueWithoutStudentInput = {
    where: StudentQrCodeWhereUniqueInput
    data: XOR<StudentQrCodeUpdateWithoutStudentInput, StudentQrCodeUncheckedUpdateWithoutStudentInput>
  }

  export type StudentQrCodeUpdateManyWithWhereWithoutStudentInput = {
    where: StudentQrCodeScalarWhereInput
    data: XOR<StudentQrCodeUpdateManyMutationInput, StudentQrCodeUncheckedUpdateManyWithoutStudentInput>
  }

  export type StudentQrCodeScalarWhereInput = {
    AND?: StudentQrCodeScalarWhereInput | StudentQrCodeScalarWhereInput[]
    OR?: StudentQrCodeScalarWhereInput[]
    NOT?: StudentQrCodeScalarWhereInput | StudentQrCodeScalarWhereInput[]
    id?: StringFilter<"StudentQrCode"> | string
    studentId?: StringFilter<"StudentQrCode"> | string
    qrCode?: StringNullableFilter<"StudentQrCode"> | string | null
    semester?: EnumSemesterFilter<"StudentQrCode"> | $Enums.Semester
    issuedAt?: DateTimeFilter<"StudentQrCode"> | Date | string
    expiresAt?: DateTimeFilter<"StudentQrCode"> | Date | string
    isActive?: BoolFilter<"StudentQrCode"> | boolean
  }

  export type UserCreateWithoutInvigilatorInput = {
    id?: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    student?: StudentCreateNestedOneWithoutUserInput
    admin?: AdminCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInvigilatorInput = {
    id?: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    student?: StudentUncheckedCreateNestedOneWithoutUserInput
    admin?: AdminUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInvigilatorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInvigilatorInput, UserUncheckedCreateWithoutInvigilatorInput>
  }

  export type ExamAssignmentCreateWithoutInvigilatorInput = {
    id?: string
    exam: ExamCreateNestedOneWithoutInvigilatorsInput
  }

  export type ExamAssignmentUncheckedCreateWithoutInvigilatorInput = {
    id?: string
    examId: string
  }

  export type ExamAssignmentCreateOrConnectWithoutInvigilatorInput = {
    where: ExamAssignmentWhereUniqueInput
    create: XOR<ExamAssignmentCreateWithoutInvigilatorInput, ExamAssignmentUncheckedCreateWithoutInvigilatorInput>
  }

  export type ExamAssignmentCreateManyInvigilatorInputEnvelope = {
    data: ExamAssignmentCreateManyInvigilatorInput | ExamAssignmentCreateManyInvigilatorInput[]
    skipDuplicates?: boolean
  }

  export type DepartmentCreateWithoutInvigilatorsInput = {
    id?: string
    name: string
    facultyOrSchool: FacultyOrSchoolCreateNestedOneWithoutDepartmentsInput
    courses?: CourseCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateWithoutInvigilatorsInput = {
    id?: string
    name: string
    facultyOrSchoolId: string
    courses?: CourseUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentCreateOrConnectWithoutInvigilatorsInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutInvigilatorsInput, DepartmentUncheckedCreateWithoutInvigilatorsInput>
  }

  export type UserUpsertWithoutInvigilatorInput = {
    update: XOR<UserUpdateWithoutInvigilatorInput, UserUncheckedUpdateWithoutInvigilatorInput>
    create: XOR<UserCreateWithoutInvigilatorInput, UserUncheckedCreateWithoutInvigilatorInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInvigilatorInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInvigilatorInput, UserUncheckedUpdateWithoutInvigilatorInput>
  }

  export type UserUpdateWithoutInvigilatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneWithoutUserNestedInput
    admin?: AdminUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInvigilatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUncheckedUpdateOneWithoutUserNestedInput
    admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ExamAssignmentUpsertWithWhereUniqueWithoutInvigilatorInput = {
    where: ExamAssignmentWhereUniqueInput
    update: XOR<ExamAssignmentUpdateWithoutInvigilatorInput, ExamAssignmentUncheckedUpdateWithoutInvigilatorInput>
    create: XOR<ExamAssignmentCreateWithoutInvigilatorInput, ExamAssignmentUncheckedCreateWithoutInvigilatorInput>
  }

  export type ExamAssignmentUpdateWithWhereUniqueWithoutInvigilatorInput = {
    where: ExamAssignmentWhereUniqueInput
    data: XOR<ExamAssignmentUpdateWithoutInvigilatorInput, ExamAssignmentUncheckedUpdateWithoutInvigilatorInput>
  }

  export type ExamAssignmentUpdateManyWithWhereWithoutInvigilatorInput = {
    where: ExamAssignmentScalarWhereInput
    data: XOR<ExamAssignmentUpdateManyMutationInput, ExamAssignmentUncheckedUpdateManyWithoutInvigilatorInput>
  }

  export type ExamAssignmentScalarWhereInput = {
    AND?: ExamAssignmentScalarWhereInput | ExamAssignmentScalarWhereInput[]
    OR?: ExamAssignmentScalarWhereInput[]
    NOT?: ExamAssignmentScalarWhereInput | ExamAssignmentScalarWhereInput[]
    id?: StringFilter<"ExamAssignment"> | string
    invigilatorId?: StringFilter<"ExamAssignment"> | string
    examId?: StringFilter<"ExamAssignment"> | string
  }

  export type DepartmentUpsertWithoutInvigilatorsInput = {
    update: XOR<DepartmentUpdateWithoutInvigilatorsInput, DepartmentUncheckedUpdateWithoutInvigilatorsInput>
    create: XOR<DepartmentCreateWithoutInvigilatorsInput, DepartmentUncheckedCreateWithoutInvigilatorsInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutInvigilatorsInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutInvigilatorsInput, DepartmentUncheckedUpdateWithoutInvigilatorsInput>
  }

  export type DepartmentUpdateWithoutInvigilatorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    facultyOrSchool?: FacultyOrSchoolUpdateOneRequiredWithoutDepartmentsNestedInput
    courses?: CourseUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutInvigilatorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    facultyOrSchoolId?: StringFieldUpdateOperationsInput | string
    courses?: CourseUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type FacultyOrSchoolCreateWithoutAdminsInput = {
    id?: string
    name: string
    departments?: DepartmentCreateNestedManyWithoutFacultyOrSchoolInput
  }

  export type FacultyOrSchoolUncheckedCreateWithoutAdminsInput = {
    id?: string
    name: string
    departments?: DepartmentUncheckedCreateNestedManyWithoutFacultyOrSchoolInput
  }

  export type FacultyOrSchoolCreateOrConnectWithoutAdminsInput = {
    where: FacultyOrSchoolWhereUniqueInput
    create: XOR<FacultyOrSchoolCreateWithoutAdminsInput, FacultyOrSchoolUncheckedCreateWithoutAdminsInput>
  }

  export type UserCreateWithoutAdminInput = {
    id?: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    student?: StudentCreateNestedOneWithoutUserInput
    invigilator?: InvigilatorCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAdminInput = {
    id?: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    student?: StudentUncheckedCreateNestedOneWithoutUserInput
    invigilator?: InvigilatorUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAdminInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
  }

  export type FacultyOrSchoolUpsertWithoutAdminsInput = {
    update: XOR<FacultyOrSchoolUpdateWithoutAdminsInput, FacultyOrSchoolUncheckedUpdateWithoutAdminsInput>
    create: XOR<FacultyOrSchoolCreateWithoutAdminsInput, FacultyOrSchoolUncheckedCreateWithoutAdminsInput>
    where?: FacultyOrSchoolWhereInput
  }

  export type FacultyOrSchoolUpdateToOneWithWhereWithoutAdminsInput = {
    where?: FacultyOrSchoolWhereInput
    data: XOR<FacultyOrSchoolUpdateWithoutAdminsInput, FacultyOrSchoolUncheckedUpdateWithoutAdminsInput>
  }

  export type FacultyOrSchoolUpdateWithoutAdminsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    departments?: DepartmentUpdateManyWithoutFacultyOrSchoolNestedInput
  }

  export type FacultyOrSchoolUncheckedUpdateWithoutAdminsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    departments?: DepartmentUncheckedUpdateManyWithoutFacultyOrSchoolNestedInput
  }

  export type UserUpsertWithoutAdminInput = {
    update: XOR<UserUpdateWithoutAdminInput, UserUncheckedUpdateWithoutAdminInput>
    create: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAdminInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAdminInput, UserUncheckedUpdateWithoutAdminInput>
  }

  export type UserUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneWithoutUserNestedInput
    invigilator?: InvigilatorUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUncheckedUpdateOneWithoutUserNestedInput
    invigilator?: InvigilatorUncheckedUpdateOneWithoutUserNestedInput
  }

  export type CourseCreateWithoutCourseUnitsInput = {
    id?: string
    name: string
    type: $Enums.CourseType
    code: string
    department: DepartmentCreateNestedOneWithoutCoursesInput
    programmes?: ProgrammeCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutCourseUnitsInput = {
    id?: string
    name: string
    type: $Enums.CourseType
    code: string
    departmentId: string
    programmes?: ProgrammeUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutCourseUnitsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutCourseUnitsInput, CourseUncheckedCreateWithoutCourseUnitsInput>
  }

  export type EnrolledCourseUnitCreateWithoutCourseUnitInput = {
    id?: string
    attempt?: number
    year: number
    semester: $Enums.Semester
    isInvigilatorApproved?: boolean
    invigilatorApprovedAt?: Date | string | null
    approvedBy?: string | null
    student: StudentCreateNestedOneWithoutEnrolledUnitsInput
  }

  export type EnrolledCourseUnitUncheckedCreateWithoutCourseUnitInput = {
    id?: string
    studentId: string
    attempt?: number
    year: number
    semester: $Enums.Semester
    isInvigilatorApproved?: boolean
    invigilatorApprovedAt?: Date | string | null
    approvedBy?: string | null
  }

  export type EnrolledCourseUnitCreateOrConnectWithoutCourseUnitInput = {
    where: EnrolledCourseUnitWhereUniqueInput
    create: XOR<EnrolledCourseUnitCreateWithoutCourseUnitInput, EnrolledCourseUnitUncheckedCreateWithoutCourseUnitInput>
  }

  export type EnrolledCourseUnitCreateManyCourseUnitInputEnvelope = {
    data: EnrolledCourseUnitCreateManyCourseUnitInput | EnrolledCourseUnitCreateManyCourseUnitInput[]
    skipDuplicates?: boolean
  }

  export type ExamCreateWithoutCourseUnitInput = {
    id?: string
    examDate: Date | string
    startTime: Date | string
    endTime: Date | string
    venue: string
    isApproved?: boolean
    approvedAt?: Date | string | null
    invigilators?: ExamAssignmentCreateNestedManyWithoutExamInput
  }

  export type ExamUncheckedCreateWithoutCourseUnitInput = {
    id?: string
    examDate: Date | string
    startTime: Date | string
    endTime: Date | string
    venue: string
    isApproved?: boolean
    approvedAt?: Date | string | null
    invigilators?: ExamAssignmentUncheckedCreateNestedManyWithoutExamInput
  }

  export type ExamCreateOrConnectWithoutCourseUnitInput = {
    where: ExamWhereUniqueInput
    create: XOR<ExamCreateWithoutCourseUnitInput, ExamUncheckedCreateWithoutCourseUnitInput>
  }

  export type ExamCreateManyCourseUnitInputEnvelope = {
    data: ExamCreateManyCourseUnitInput | ExamCreateManyCourseUnitInput[]
    skipDuplicates?: boolean
  }

  export type CourseUpsertWithoutCourseUnitsInput = {
    update: XOR<CourseUpdateWithoutCourseUnitsInput, CourseUncheckedUpdateWithoutCourseUnitsInput>
    create: XOR<CourseCreateWithoutCourseUnitsInput, CourseUncheckedCreateWithoutCourseUnitsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutCourseUnitsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutCourseUnitsInput, CourseUncheckedUpdateWithoutCourseUnitsInput>
  }

  export type CourseUpdateWithoutCourseUnitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCourseTypeFieldUpdateOperationsInput | $Enums.CourseType
    code?: StringFieldUpdateOperationsInput | string
    department?: DepartmentUpdateOneRequiredWithoutCoursesNestedInput
    programmes?: ProgrammeUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutCourseUnitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCourseTypeFieldUpdateOperationsInput | $Enums.CourseType
    code?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    programmes?: ProgrammeUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type EnrolledCourseUnitUpsertWithWhereUniqueWithoutCourseUnitInput = {
    where: EnrolledCourseUnitWhereUniqueInput
    update: XOR<EnrolledCourseUnitUpdateWithoutCourseUnitInput, EnrolledCourseUnitUncheckedUpdateWithoutCourseUnitInput>
    create: XOR<EnrolledCourseUnitCreateWithoutCourseUnitInput, EnrolledCourseUnitUncheckedCreateWithoutCourseUnitInput>
  }

  export type EnrolledCourseUnitUpdateWithWhereUniqueWithoutCourseUnitInput = {
    where: EnrolledCourseUnitWhereUniqueInput
    data: XOR<EnrolledCourseUnitUpdateWithoutCourseUnitInput, EnrolledCourseUnitUncheckedUpdateWithoutCourseUnitInput>
  }

  export type EnrolledCourseUnitUpdateManyWithWhereWithoutCourseUnitInput = {
    where: EnrolledCourseUnitScalarWhereInput
    data: XOR<EnrolledCourseUnitUpdateManyMutationInput, EnrolledCourseUnitUncheckedUpdateManyWithoutCourseUnitInput>
  }

  export type ExamUpsertWithWhereUniqueWithoutCourseUnitInput = {
    where: ExamWhereUniqueInput
    update: XOR<ExamUpdateWithoutCourseUnitInput, ExamUncheckedUpdateWithoutCourseUnitInput>
    create: XOR<ExamCreateWithoutCourseUnitInput, ExamUncheckedCreateWithoutCourseUnitInput>
  }

  export type ExamUpdateWithWhereUniqueWithoutCourseUnitInput = {
    where: ExamWhereUniqueInput
    data: XOR<ExamUpdateWithoutCourseUnitInput, ExamUncheckedUpdateWithoutCourseUnitInput>
  }

  export type ExamUpdateManyWithWhereWithoutCourseUnitInput = {
    where: ExamScalarWhereInput
    data: XOR<ExamUpdateManyMutationInput, ExamUncheckedUpdateManyWithoutCourseUnitInput>
  }

  export type ExamScalarWhereInput = {
    AND?: ExamScalarWhereInput | ExamScalarWhereInput[]
    OR?: ExamScalarWhereInput[]
    NOT?: ExamScalarWhereInput | ExamScalarWhereInput[]
    id?: StringFilter<"Exam"> | string
    courseUnitId?: StringFilter<"Exam"> | string
    examDate?: DateTimeFilter<"Exam"> | Date | string
    startTime?: DateTimeFilter<"Exam"> | Date | string
    endTime?: DateTimeFilter<"Exam"> | Date | string
    venue?: StringFilter<"Exam"> | string
    isApproved?: BoolFilter<"Exam"> | boolean
    approvedAt?: DateTimeNullableFilter<"Exam"> | Date | string | null
  }

  export type StudentCreateWithoutEnrolledUnitsInput = {
    firstName: string
    otherNames?: string | null
    lastName: string
    studentNo: string
    regNo: string
    gender: $Enums.Gender
    studyYear: number
    campus: string
    academicYear: string
    currentSemester: $Enums.Semester
    picture?: string | null
    paymentStatus?: $Enums.PaymentStatus
    permitStatus?: $Enums.PermitStatus
    programme: ProgrammeCreateNestedOneWithoutStudentsInput
    user: UserCreateNestedOneWithoutStudentInput
    studentQrCodes?: StudentQrCodeCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutEnrolledUnitsInput = {
    id: string
    firstName: string
    otherNames?: string | null
    lastName: string
    studentNo: string
    regNo: string
    gender: $Enums.Gender
    studyYear: number
    campus: string
    academicYear: string
    currentSemester: $Enums.Semester
    picture?: string | null
    paymentStatus?: $Enums.PaymentStatus
    permitStatus?: $Enums.PermitStatus
    programmeId: string
    studentQrCodes?: StudentQrCodeUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutEnrolledUnitsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutEnrolledUnitsInput, StudentUncheckedCreateWithoutEnrolledUnitsInput>
  }

  export type CourseUnitCreateWithoutEnrolledByInput = {
    id?: string
    code: string
    title: string
    credits: number
    year: number
    semester: $Enums.Semester
    category?: $Enums.CourseCategory
    course: CourseCreateNestedOneWithoutCourseUnitsInput
    exams?: ExamCreateNestedManyWithoutCourseUnitInput
  }

  export type CourseUnitUncheckedCreateWithoutEnrolledByInput = {
    id?: string
    code: string
    title: string
    credits: number
    year: number
    semester: $Enums.Semester
    category?: $Enums.CourseCategory
    courseName: string
    exams?: ExamUncheckedCreateNestedManyWithoutCourseUnitInput
  }

  export type CourseUnitCreateOrConnectWithoutEnrolledByInput = {
    where: CourseUnitWhereUniqueInput
    create: XOR<CourseUnitCreateWithoutEnrolledByInput, CourseUnitUncheckedCreateWithoutEnrolledByInput>
  }

  export type StudentUpsertWithoutEnrolledUnitsInput = {
    update: XOR<StudentUpdateWithoutEnrolledUnitsInput, StudentUncheckedUpdateWithoutEnrolledUnitsInput>
    create: XOR<StudentCreateWithoutEnrolledUnitsInput, StudentUncheckedCreateWithoutEnrolledUnitsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutEnrolledUnitsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutEnrolledUnitsInput, StudentUncheckedUpdateWithoutEnrolledUnitsInput>
  }

  export type StudentUpdateWithoutEnrolledUnitsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    otherNames?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    studentNo?: StringFieldUpdateOperationsInput | string
    regNo?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    studyYear?: IntFieldUpdateOperationsInput | number
    campus?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    currentSemester?: EnumSemesterFieldUpdateOperationsInput | $Enums.Semester
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    permitStatus?: EnumPermitStatusFieldUpdateOperationsInput | $Enums.PermitStatus
    programme?: ProgrammeUpdateOneRequiredWithoutStudentsNestedInput
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
    studentQrCodes?: StudentQrCodeUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutEnrolledUnitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    otherNames?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    studentNo?: StringFieldUpdateOperationsInput | string
    regNo?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    studyYear?: IntFieldUpdateOperationsInput | number
    campus?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    currentSemester?: EnumSemesterFieldUpdateOperationsInput | $Enums.Semester
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    permitStatus?: EnumPermitStatusFieldUpdateOperationsInput | $Enums.PermitStatus
    programmeId?: StringFieldUpdateOperationsInput | string
    studentQrCodes?: StudentQrCodeUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type CourseUnitUpsertWithoutEnrolledByInput = {
    update: XOR<CourseUnitUpdateWithoutEnrolledByInput, CourseUnitUncheckedUpdateWithoutEnrolledByInput>
    create: XOR<CourseUnitCreateWithoutEnrolledByInput, CourseUnitUncheckedCreateWithoutEnrolledByInput>
    where?: CourseUnitWhereInput
  }

  export type CourseUnitUpdateToOneWithWhereWithoutEnrolledByInput = {
    where?: CourseUnitWhereInput
    data: XOR<CourseUnitUpdateWithoutEnrolledByInput, CourseUnitUncheckedUpdateWithoutEnrolledByInput>
  }

  export type CourseUnitUpdateWithoutEnrolledByInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    semester?: EnumSemesterFieldUpdateOperationsInput | $Enums.Semester
    category?: EnumCourseCategoryFieldUpdateOperationsInput | $Enums.CourseCategory
    course?: CourseUpdateOneRequiredWithoutCourseUnitsNestedInput
    exams?: ExamUpdateManyWithoutCourseUnitNestedInput
  }

  export type CourseUnitUncheckedUpdateWithoutEnrolledByInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    semester?: EnumSemesterFieldUpdateOperationsInput | $Enums.Semester
    category?: EnumCourseCategoryFieldUpdateOperationsInput | $Enums.CourseCategory
    courseName?: StringFieldUpdateOperationsInput | string
    exams?: ExamUncheckedUpdateManyWithoutCourseUnitNestedInput
  }

  export type CourseUnitCreateWithoutExamsInput = {
    id?: string
    code: string
    title: string
    credits: number
    year: number
    semester: $Enums.Semester
    category?: $Enums.CourseCategory
    course: CourseCreateNestedOneWithoutCourseUnitsInput
    enrolledBy?: EnrolledCourseUnitCreateNestedManyWithoutCourseUnitInput
  }

  export type CourseUnitUncheckedCreateWithoutExamsInput = {
    id?: string
    code: string
    title: string
    credits: number
    year: number
    semester: $Enums.Semester
    category?: $Enums.CourseCategory
    courseName: string
    enrolledBy?: EnrolledCourseUnitUncheckedCreateNestedManyWithoutCourseUnitInput
  }

  export type CourseUnitCreateOrConnectWithoutExamsInput = {
    where: CourseUnitWhereUniqueInput
    create: XOR<CourseUnitCreateWithoutExamsInput, CourseUnitUncheckedCreateWithoutExamsInput>
  }

  export type ExamAssignmentCreateWithoutExamInput = {
    id?: string
    invigilator: InvigilatorCreateNestedOneWithoutAssignedExamsInput
  }

  export type ExamAssignmentUncheckedCreateWithoutExamInput = {
    id?: string
    invigilatorId: string
  }

  export type ExamAssignmentCreateOrConnectWithoutExamInput = {
    where: ExamAssignmentWhereUniqueInput
    create: XOR<ExamAssignmentCreateWithoutExamInput, ExamAssignmentUncheckedCreateWithoutExamInput>
  }

  export type ExamAssignmentCreateManyExamInputEnvelope = {
    data: ExamAssignmentCreateManyExamInput | ExamAssignmentCreateManyExamInput[]
    skipDuplicates?: boolean
  }

  export type CourseUnitUpsertWithoutExamsInput = {
    update: XOR<CourseUnitUpdateWithoutExamsInput, CourseUnitUncheckedUpdateWithoutExamsInput>
    create: XOR<CourseUnitCreateWithoutExamsInput, CourseUnitUncheckedCreateWithoutExamsInput>
    where?: CourseUnitWhereInput
  }

  export type CourseUnitUpdateToOneWithWhereWithoutExamsInput = {
    where?: CourseUnitWhereInput
    data: XOR<CourseUnitUpdateWithoutExamsInput, CourseUnitUncheckedUpdateWithoutExamsInput>
  }

  export type CourseUnitUpdateWithoutExamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    semester?: EnumSemesterFieldUpdateOperationsInput | $Enums.Semester
    category?: EnumCourseCategoryFieldUpdateOperationsInput | $Enums.CourseCategory
    course?: CourseUpdateOneRequiredWithoutCourseUnitsNestedInput
    enrolledBy?: EnrolledCourseUnitUpdateManyWithoutCourseUnitNestedInput
  }

  export type CourseUnitUncheckedUpdateWithoutExamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    semester?: EnumSemesterFieldUpdateOperationsInput | $Enums.Semester
    category?: EnumCourseCategoryFieldUpdateOperationsInput | $Enums.CourseCategory
    courseName?: StringFieldUpdateOperationsInput | string
    enrolledBy?: EnrolledCourseUnitUncheckedUpdateManyWithoutCourseUnitNestedInput
  }

  export type ExamAssignmentUpsertWithWhereUniqueWithoutExamInput = {
    where: ExamAssignmentWhereUniqueInput
    update: XOR<ExamAssignmentUpdateWithoutExamInput, ExamAssignmentUncheckedUpdateWithoutExamInput>
    create: XOR<ExamAssignmentCreateWithoutExamInput, ExamAssignmentUncheckedCreateWithoutExamInput>
  }

  export type ExamAssignmentUpdateWithWhereUniqueWithoutExamInput = {
    where: ExamAssignmentWhereUniqueInput
    data: XOR<ExamAssignmentUpdateWithoutExamInput, ExamAssignmentUncheckedUpdateWithoutExamInput>
  }

  export type ExamAssignmentUpdateManyWithWhereWithoutExamInput = {
    where: ExamAssignmentScalarWhereInput
    data: XOR<ExamAssignmentUpdateManyMutationInput, ExamAssignmentUncheckedUpdateManyWithoutExamInput>
  }

  export type InvigilatorCreateWithoutAssignedExamsInput = {
    invigilatorNumber: string
    title: string
    firstName: string
    otherNames?: string | null
    lastName: string
    picture?: string | null
    user?: UserCreateNestedOneWithoutInvigilatorInput
    department: DepartmentCreateNestedOneWithoutInvigilatorsInput
  }

  export type InvigilatorUncheckedCreateWithoutAssignedExamsInput = {
    id?: string
    invigilatorNumber: string
    title: string
    firstName: string
    otherNames?: string | null
    lastName: string
    picture?: string | null
    departmentId: string
  }

  export type InvigilatorCreateOrConnectWithoutAssignedExamsInput = {
    where: InvigilatorWhereUniqueInput
    create: XOR<InvigilatorCreateWithoutAssignedExamsInput, InvigilatorUncheckedCreateWithoutAssignedExamsInput>
  }

  export type ExamCreateWithoutInvigilatorsInput = {
    id?: string
    examDate: Date | string
    startTime: Date | string
    endTime: Date | string
    venue: string
    isApproved?: boolean
    approvedAt?: Date | string | null
    courseUnit: CourseUnitCreateNestedOneWithoutExamsInput
  }

  export type ExamUncheckedCreateWithoutInvigilatorsInput = {
    id?: string
    courseUnitId: string
    examDate: Date | string
    startTime: Date | string
    endTime: Date | string
    venue: string
    isApproved?: boolean
    approvedAt?: Date | string | null
  }

  export type ExamCreateOrConnectWithoutInvigilatorsInput = {
    where: ExamWhereUniqueInput
    create: XOR<ExamCreateWithoutInvigilatorsInput, ExamUncheckedCreateWithoutInvigilatorsInput>
  }

  export type InvigilatorUpsertWithoutAssignedExamsInput = {
    update: XOR<InvigilatorUpdateWithoutAssignedExamsInput, InvigilatorUncheckedUpdateWithoutAssignedExamsInput>
    create: XOR<InvigilatorCreateWithoutAssignedExamsInput, InvigilatorUncheckedCreateWithoutAssignedExamsInput>
    where?: InvigilatorWhereInput
  }

  export type InvigilatorUpdateToOneWithWhereWithoutAssignedExamsInput = {
    where?: InvigilatorWhereInput
    data: XOR<InvigilatorUpdateWithoutAssignedExamsInput, InvigilatorUncheckedUpdateWithoutAssignedExamsInput>
  }

  export type InvigilatorUpdateWithoutAssignedExamsInput = {
    invigilatorNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    otherNames?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutInvigilatorNestedInput
    department?: DepartmentUpdateOneRequiredWithoutInvigilatorsNestedInput
  }

  export type InvigilatorUncheckedUpdateWithoutAssignedExamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    invigilatorNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    otherNames?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    departmentId?: StringFieldUpdateOperationsInput | string
  }

  export type ExamUpsertWithoutInvigilatorsInput = {
    update: XOR<ExamUpdateWithoutInvigilatorsInput, ExamUncheckedUpdateWithoutInvigilatorsInput>
    create: XOR<ExamCreateWithoutInvigilatorsInput, ExamUncheckedCreateWithoutInvigilatorsInput>
    where?: ExamWhereInput
  }

  export type ExamUpdateToOneWithWhereWithoutInvigilatorsInput = {
    where?: ExamWhereInput
    data: XOR<ExamUpdateWithoutInvigilatorsInput, ExamUncheckedUpdateWithoutInvigilatorsInput>
  }

  export type ExamUpdateWithoutInvigilatorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    examDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    courseUnit?: CourseUnitUpdateOneRequiredWithoutExamsNestedInput
  }

  export type ExamUncheckedUpdateWithoutInvigilatorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseUnitId?: StringFieldUpdateOperationsInput | string
    examDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StudentCreateWithoutStudentQrCodesInput = {
    firstName: string
    otherNames?: string | null
    lastName: string
    studentNo: string
    regNo: string
    gender: $Enums.Gender
    studyYear: number
    campus: string
    academicYear: string
    currentSemester: $Enums.Semester
    picture?: string | null
    paymentStatus?: $Enums.PaymentStatus
    permitStatus?: $Enums.PermitStatus
    programme: ProgrammeCreateNestedOneWithoutStudentsInput
    user: UserCreateNestedOneWithoutStudentInput
    enrolledUnits?: EnrolledCourseUnitCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutStudentQrCodesInput = {
    id: string
    firstName: string
    otherNames?: string | null
    lastName: string
    studentNo: string
    regNo: string
    gender: $Enums.Gender
    studyYear: number
    campus: string
    academicYear: string
    currentSemester: $Enums.Semester
    picture?: string | null
    paymentStatus?: $Enums.PaymentStatus
    permitStatus?: $Enums.PermitStatus
    programmeId: string
    enrolledUnits?: EnrolledCourseUnitUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutStudentQrCodesInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutStudentQrCodesInput, StudentUncheckedCreateWithoutStudentQrCodesInput>
  }

  export type StudentUpsertWithoutStudentQrCodesInput = {
    update: XOR<StudentUpdateWithoutStudentQrCodesInput, StudentUncheckedUpdateWithoutStudentQrCodesInput>
    create: XOR<StudentCreateWithoutStudentQrCodesInput, StudentUncheckedCreateWithoutStudentQrCodesInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutStudentQrCodesInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutStudentQrCodesInput, StudentUncheckedUpdateWithoutStudentQrCodesInput>
  }

  export type StudentUpdateWithoutStudentQrCodesInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    otherNames?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    studentNo?: StringFieldUpdateOperationsInput | string
    regNo?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    studyYear?: IntFieldUpdateOperationsInput | number
    campus?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    currentSemester?: EnumSemesterFieldUpdateOperationsInput | $Enums.Semester
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    permitStatus?: EnumPermitStatusFieldUpdateOperationsInput | $Enums.PermitStatus
    programme?: ProgrammeUpdateOneRequiredWithoutStudentsNestedInput
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
    enrolledUnits?: EnrolledCourseUnitUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutStudentQrCodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    otherNames?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    studentNo?: StringFieldUpdateOperationsInput | string
    regNo?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    studyYear?: IntFieldUpdateOperationsInput | number
    campus?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    currentSemester?: EnumSemesterFieldUpdateOperationsInput | $Enums.Semester
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    permitStatus?: EnumPermitStatusFieldUpdateOperationsInput | $Enums.PermitStatus
    programmeId?: StringFieldUpdateOperationsInput | string
    enrolledUnits?: EnrolledCourseUnitUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type CourseCreateWithoutProgrammesInput = {
    id?: string
    name: string
    type: $Enums.CourseType
    code: string
    department: DepartmentCreateNestedOneWithoutCoursesInput
    courseUnits?: CourseUnitCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutProgrammesInput = {
    id?: string
    name: string
    type: $Enums.CourseType
    code: string
    departmentId: string
    courseUnits?: CourseUnitUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutProgrammesInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutProgrammesInput, CourseUncheckedCreateWithoutProgrammesInput>
  }

  export type StudentCreateWithoutProgrammeInput = {
    firstName: string
    otherNames?: string | null
    lastName: string
    studentNo: string
    regNo: string
    gender: $Enums.Gender
    studyYear: number
    campus: string
    academicYear: string
    currentSemester: $Enums.Semester
    picture?: string | null
    paymentStatus?: $Enums.PaymentStatus
    permitStatus?: $Enums.PermitStatus
    user: UserCreateNestedOneWithoutStudentInput
    enrolledUnits?: EnrolledCourseUnitCreateNestedManyWithoutStudentInput
    studentQrCodes?: StudentQrCodeCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutProgrammeInput = {
    id: string
    firstName: string
    otherNames?: string | null
    lastName: string
    studentNo: string
    regNo: string
    gender: $Enums.Gender
    studyYear: number
    campus: string
    academicYear: string
    currentSemester: $Enums.Semester
    picture?: string | null
    paymentStatus?: $Enums.PaymentStatus
    permitStatus?: $Enums.PermitStatus
    enrolledUnits?: EnrolledCourseUnitUncheckedCreateNestedManyWithoutStudentInput
    studentQrCodes?: StudentQrCodeUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutProgrammeInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutProgrammeInput, StudentUncheckedCreateWithoutProgrammeInput>
  }

  export type StudentCreateManyProgrammeInputEnvelope = {
    data: StudentCreateManyProgrammeInput | StudentCreateManyProgrammeInput[]
    skipDuplicates?: boolean
  }

  export type CourseUpsertWithoutProgrammesInput = {
    update: XOR<CourseUpdateWithoutProgrammesInput, CourseUncheckedUpdateWithoutProgrammesInput>
    create: XOR<CourseCreateWithoutProgrammesInput, CourseUncheckedCreateWithoutProgrammesInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutProgrammesInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutProgrammesInput, CourseUncheckedUpdateWithoutProgrammesInput>
  }

  export type CourseUpdateWithoutProgrammesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCourseTypeFieldUpdateOperationsInput | $Enums.CourseType
    code?: StringFieldUpdateOperationsInput | string
    department?: DepartmentUpdateOneRequiredWithoutCoursesNestedInput
    courseUnits?: CourseUnitUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutProgrammesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCourseTypeFieldUpdateOperationsInput | $Enums.CourseType
    code?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    courseUnits?: CourseUnitUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type StudentUpsertWithWhereUniqueWithoutProgrammeInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutProgrammeInput, StudentUncheckedUpdateWithoutProgrammeInput>
    create: XOR<StudentCreateWithoutProgrammeInput, StudentUncheckedCreateWithoutProgrammeInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutProgrammeInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutProgrammeInput, StudentUncheckedUpdateWithoutProgrammeInput>
  }

  export type StudentUpdateManyWithWhereWithoutProgrammeInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutProgrammeInput>
  }

  export type StudentScalarWhereInput = {
    AND?: StudentScalarWhereInput | StudentScalarWhereInput[]
    OR?: StudentScalarWhereInput[]
    NOT?: StudentScalarWhereInput | StudentScalarWhereInput[]
    id?: StringFilter<"Student"> | string
    firstName?: StringFilter<"Student"> | string
    otherNames?: StringNullableFilter<"Student"> | string | null
    lastName?: StringFilter<"Student"> | string
    studentNo?: StringFilter<"Student"> | string
    regNo?: StringFilter<"Student"> | string
    gender?: EnumGenderFilter<"Student"> | $Enums.Gender
    studyYear?: IntFilter<"Student"> | number
    campus?: StringFilter<"Student"> | string
    academicYear?: StringFilter<"Student"> | string
    currentSemester?: EnumSemesterFilter<"Student"> | $Enums.Semester
    picture?: StringNullableFilter<"Student"> | string | null
    paymentStatus?: EnumPaymentStatusFilter<"Student"> | $Enums.PaymentStatus
    permitStatus?: EnumPermitStatusFilter<"Student"> | $Enums.PermitStatus
    programmeId?: StringFilter<"Student"> | string
  }

  export type DepartmentCreateWithoutFacultyOrSchoolInput = {
    id?: string
    name: string
    courses?: CourseCreateNestedManyWithoutDepartmentInput
    invigilators?: InvigilatorCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateWithoutFacultyOrSchoolInput = {
    id?: string
    name: string
    courses?: CourseUncheckedCreateNestedManyWithoutDepartmentInput
    invigilators?: InvigilatorUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentCreateOrConnectWithoutFacultyOrSchoolInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutFacultyOrSchoolInput, DepartmentUncheckedCreateWithoutFacultyOrSchoolInput>
  }

  export type DepartmentCreateManyFacultyOrSchoolInputEnvelope = {
    data: DepartmentCreateManyFacultyOrSchoolInput | DepartmentCreateManyFacultyOrSchoolInput[]
    skipDuplicates?: boolean
  }

  export type AdminCreateWithoutFacultyOrSchoolInput = {
    firstName: string
    otherNames?: string | null
    lastName: string
    picture?: string | null
    user: UserCreateNestedOneWithoutAdminInput
  }

  export type AdminUncheckedCreateWithoutFacultyOrSchoolInput = {
    id: string
    firstName: string
    otherNames?: string | null
    lastName: string
    picture?: string | null
  }

  export type AdminCreateOrConnectWithoutFacultyOrSchoolInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutFacultyOrSchoolInput, AdminUncheckedCreateWithoutFacultyOrSchoolInput>
  }

  export type AdminCreateManyFacultyOrSchoolInputEnvelope = {
    data: AdminCreateManyFacultyOrSchoolInput | AdminCreateManyFacultyOrSchoolInput[]
    skipDuplicates?: boolean
  }

  export type DepartmentUpsertWithWhereUniqueWithoutFacultyOrSchoolInput = {
    where: DepartmentWhereUniqueInput
    update: XOR<DepartmentUpdateWithoutFacultyOrSchoolInput, DepartmentUncheckedUpdateWithoutFacultyOrSchoolInput>
    create: XOR<DepartmentCreateWithoutFacultyOrSchoolInput, DepartmentUncheckedCreateWithoutFacultyOrSchoolInput>
  }

  export type DepartmentUpdateWithWhereUniqueWithoutFacultyOrSchoolInput = {
    where: DepartmentWhereUniqueInput
    data: XOR<DepartmentUpdateWithoutFacultyOrSchoolInput, DepartmentUncheckedUpdateWithoutFacultyOrSchoolInput>
  }

  export type DepartmentUpdateManyWithWhereWithoutFacultyOrSchoolInput = {
    where: DepartmentScalarWhereInput
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyWithoutFacultyOrSchoolInput>
  }

  export type DepartmentScalarWhereInput = {
    AND?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
    OR?: DepartmentScalarWhereInput[]
    NOT?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
    id?: StringFilter<"Department"> | string
    name?: StringFilter<"Department"> | string
    facultyOrSchoolId?: StringFilter<"Department"> | string
  }

  export type AdminUpsertWithWhereUniqueWithoutFacultyOrSchoolInput = {
    where: AdminWhereUniqueInput
    update: XOR<AdminUpdateWithoutFacultyOrSchoolInput, AdminUncheckedUpdateWithoutFacultyOrSchoolInput>
    create: XOR<AdminCreateWithoutFacultyOrSchoolInput, AdminUncheckedCreateWithoutFacultyOrSchoolInput>
  }

  export type AdminUpdateWithWhereUniqueWithoutFacultyOrSchoolInput = {
    where: AdminWhereUniqueInput
    data: XOR<AdminUpdateWithoutFacultyOrSchoolInput, AdminUncheckedUpdateWithoutFacultyOrSchoolInput>
  }

  export type AdminUpdateManyWithWhereWithoutFacultyOrSchoolInput = {
    where: AdminScalarWhereInput
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyWithoutFacultyOrSchoolInput>
  }

  export type AdminScalarWhereInput = {
    AND?: AdminScalarWhereInput | AdminScalarWhereInput[]
    OR?: AdminScalarWhereInput[]
    NOT?: AdminScalarWhereInput | AdminScalarWhereInput[]
    id?: StringFilter<"Admin"> | string
    firstName?: StringFilter<"Admin"> | string
    otherNames?: StringNullableFilter<"Admin"> | string | null
    lastName?: StringFilter<"Admin"> | string
    picture?: StringNullableFilter<"Admin"> | string | null
    facultyOrSchoolId?: StringFilter<"Admin"> | string
  }

  export type FacultyOrSchoolCreateWithoutDepartmentsInput = {
    id?: string
    name: string
    admins?: AdminCreateNestedManyWithoutFacultyOrSchoolInput
  }

  export type FacultyOrSchoolUncheckedCreateWithoutDepartmentsInput = {
    id?: string
    name: string
    admins?: AdminUncheckedCreateNestedManyWithoutFacultyOrSchoolInput
  }

  export type FacultyOrSchoolCreateOrConnectWithoutDepartmentsInput = {
    where: FacultyOrSchoolWhereUniqueInput
    create: XOR<FacultyOrSchoolCreateWithoutDepartmentsInput, FacultyOrSchoolUncheckedCreateWithoutDepartmentsInput>
  }

  export type CourseCreateWithoutDepartmentInput = {
    id?: string
    name: string
    type: $Enums.CourseType
    code: string
    programmes?: ProgrammeCreateNestedManyWithoutCourseInput
    courseUnits?: CourseUnitCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutDepartmentInput = {
    id?: string
    name: string
    type: $Enums.CourseType
    code: string
    programmes?: ProgrammeUncheckedCreateNestedManyWithoutCourseInput
    courseUnits?: CourseUnitUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutDepartmentInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutDepartmentInput, CourseUncheckedCreateWithoutDepartmentInput>
  }

  export type CourseCreateManyDepartmentInputEnvelope = {
    data: CourseCreateManyDepartmentInput | CourseCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type InvigilatorCreateWithoutDepartmentInput = {
    invigilatorNumber: string
    title: string
    firstName: string
    otherNames?: string | null
    lastName: string
    picture?: string | null
    user?: UserCreateNestedOneWithoutInvigilatorInput
    assignedExams?: ExamAssignmentCreateNestedManyWithoutInvigilatorInput
  }

  export type InvigilatorUncheckedCreateWithoutDepartmentInput = {
    id?: string
    invigilatorNumber: string
    title: string
    firstName: string
    otherNames?: string | null
    lastName: string
    picture?: string | null
    assignedExams?: ExamAssignmentUncheckedCreateNestedManyWithoutInvigilatorInput
  }

  export type InvigilatorCreateOrConnectWithoutDepartmentInput = {
    where: InvigilatorWhereUniqueInput
    create: XOR<InvigilatorCreateWithoutDepartmentInput, InvigilatorUncheckedCreateWithoutDepartmentInput>
  }

  export type InvigilatorCreateManyDepartmentInputEnvelope = {
    data: InvigilatorCreateManyDepartmentInput | InvigilatorCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type FacultyOrSchoolUpsertWithoutDepartmentsInput = {
    update: XOR<FacultyOrSchoolUpdateWithoutDepartmentsInput, FacultyOrSchoolUncheckedUpdateWithoutDepartmentsInput>
    create: XOR<FacultyOrSchoolCreateWithoutDepartmentsInput, FacultyOrSchoolUncheckedCreateWithoutDepartmentsInput>
    where?: FacultyOrSchoolWhereInput
  }

  export type FacultyOrSchoolUpdateToOneWithWhereWithoutDepartmentsInput = {
    where?: FacultyOrSchoolWhereInput
    data: XOR<FacultyOrSchoolUpdateWithoutDepartmentsInput, FacultyOrSchoolUncheckedUpdateWithoutDepartmentsInput>
  }

  export type FacultyOrSchoolUpdateWithoutDepartmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    admins?: AdminUpdateManyWithoutFacultyOrSchoolNestedInput
  }

  export type FacultyOrSchoolUncheckedUpdateWithoutDepartmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    admins?: AdminUncheckedUpdateManyWithoutFacultyOrSchoolNestedInput
  }

  export type CourseUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutDepartmentInput, CourseUncheckedUpdateWithoutDepartmentInput>
    create: XOR<CourseCreateWithoutDepartmentInput, CourseUncheckedCreateWithoutDepartmentInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutDepartmentInput, CourseUncheckedUpdateWithoutDepartmentInput>
  }

  export type CourseUpdateManyWithWhereWithoutDepartmentInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type CourseScalarWhereInput = {
    AND?: CourseScalarWhereInput | CourseScalarWhereInput[]
    OR?: CourseScalarWhereInput[]
    NOT?: CourseScalarWhereInput | CourseScalarWhereInput[]
    id?: StringFilter<"Course"> | string
    name?: StringFilter<"Course"> | string
    type?: EnumCourseTypeFilter<"Course"> | $Enums.CourseType
    code?: StringFilter<"Course"> | string
    departmentId?: StringFilter<"Course"> | string
  }

  export type InvigilatorUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: InvigilatorWhereUniqueInput
    update: XOR<InvigilatorUpdateWithoutDepartmentInput, InvigilatorUncheckedUpdateWithoutDepartmentInput>
    create: XOR<InvigilatorCreateWithoutDepartmentInput, InvigilatorUncheckedCreateWithoutDepartmentInput>
  }

  export type InvigilatorUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: InvigilatorWhereUniqueInput
    data: XOR<InvigilatorUpdateWithoutDepartmentInput, InvigilatorUncheckedUpdateWithoutDepartmentInput>
  }

  export type InvigilatorUpdateManyWithWhereWithoutDepartmentInput = {
    where: InvigilatorScalarWhereInput
    data: XOR<InvigilatorUpdateManyMutationInput, InvigilatorUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type InvigilatorScalarWhereInput = {
    AND?: InvigilatorScalarWhereInput | InvigilatorScalarWhereInput[]
    OR?: InvigilatorScalarWhereInput[]
    NOT?: InvigilatorScalarWhereInput | InvigilatorScalarWhereInput[]
    id?: StringFilter<"Invigilator"> | string
    invigilatorNumber?: StringFilter<"Invigilator"> | string
    title?: StringFilter<"Invigilator"> | string
    firstName?: StringFilter<"Invigilator"> | string
    otherNames?: StringNullableFilter<"Invigilator"> | string | null
    lastName?: StringFilter<"Invigilator"> | string
    picture?: StringNullableFilter<"Invigilator"> | string | null
    departmentId?: StringFilter<"Invigilator"> | string
  }

  export type DepartmentCreateWithoutCoursesInput = {
    id?: string
    name: string
    facultyOrSchool: FacultyOrSchoolCreateNestedOneWithoutDepartmentsInput
    invigilators?: InvigilatorCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateWithoutCoursesInput = {
    id?: string
    name: string
    facultyOrSchoolId: string
    invigilators?: InvigilatorUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentCreateOrConnectWithoutCoursesInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutCoursesInput, DepartmentUncheckedCreateWithoutCoursesInput>
  }

  export type ProgrammeCreateWithoutCourseInput = {
    id?: string
    name: string
    programme: $Enums.StudyMode
    students?: StudentCreateNestedManyWithoutProgrammeInput
  }

  export type ProgrammeUncheckedCreateWithoutCourseInput = {
    id?: string
    name: string
    programme: $Enums.StudyMode
    students?: StudentUncheckedCreateNestedManyWithoutProgrammeInput
  }

  export type ProgrammeCreateOrConnectWithoutCourseInput = {
    where: ProgrammeWhereUniqueInput
    create: XOR<ProgrammeCreateWithoutCourseInput, ProgrammeUncheckedCreateWithoutCourseInput>
  }

  export type ProgrammeCreateManyCourseInputEnvelope = {
    data: ProgrammeCreateManyCourseInput | ProgrammeCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type CourseUnitCreateWithoutCourseInput = {
    id?: string
    code: string
    title: string
    credits: number
    year: number
    semester: $Enums.Semester
    category?: $Enums.CourseCategory
    enrolledBy?: EnrolledCourseUnitCreateNestedManyWithoutCourseUnitInput
    exams?: ExamCreateNestedManyWithoutCourseUnitInput
  }

  export type CourseUnitUncheckedCreateWithoutCourseInput = {
    id?: string
    code: string
    title: string
    credits: number
    year: number
    semester: $Enums.Semester
    category?: $Enums.CourseCategory
    enrolledBy?: EnrolledCourseUnitUncheckedCreateNestedManyWithoutCourseUnitInput
    exams?: ExamUncheckedCreateNestedManyWithoutCourseUnitInput
  }

  export type CourseUnitCreateOrConnectWithoutCourseInput = {
    where: CourseUnitWhereUniqueInput
    create: XOR<CourseUnitCreateWithoutCourseInput, CourseUnitUncheckedCreateWithoutCourseInput>
  }

  export type CourseUnitCreateManyCourseInputEnvelope = {
    data: CourseUnitCreateManyCourseInput | CourseUnitCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type DepartmentUpsertWithoutCoursesInput = {
    update: XOR<DepartmentUpdateWithoutCoursesInput, DepartmentUncheckedUpdateWithoutCoursesInput>
    create: XOR<DepartmentCreateWithoutCoursesInput, DepartmentUncheckedCreateWithoutCoursesInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutCoursesInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutCoursesInput, DepartmentUncheckedUpdateWithoutCoursesInput>
  }

  export type DepartmentUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    facultyOrSchool?: FacultyOrSchoolUpdateOneRequiredWithoutDepartmentsNestedInput
    invigilators?: InvigilatorUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    facultyOrSchoolId?: StringFieldUpdateOperationsInput | string
    invigilators?: InvigilatorUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type ProgrammeUpsertWithWhereUniqueWithoutCourseInput = {
    where: ProgrammeWhereUniqueInput
    update: XOR<ProgrammeUpdateWithoutCourseInput, ProgrammeUncheckedUpdateWithoutCourseInput>
    create: XOR<ProgrammeCreateWithoutCourseInput, ProgrammeUncheckedCreateWithoutCourseInput>
  }

  export type ProgrammeUpdateWithWhereUniqueWithoutCourseInput = {
    where: ProgrammeWhereUniqueInput
    data: XOR<ProgrammeUpdateWithoutCourseInput, ProgrammeUncheckedUpdateWithoutCourseInput>
  }

  export type ProgrammeUpdateManyWithWhereWithoutCourseInput = {
    where: ProgrammeScalarWhereInput
    data: XOR<ProgrammeUpdateManyMutationInput, ProgrammeUncheckedUpdateManyWithoutCourseInput>
  }

  export type ProgrammeScalarWhereInput = {
    AND?: ProgrammeScalarWhereInput | ProgrammeScalarWhereInput[]
    OR?: ProgrammeScalarWhereInput[]
    NOT?: ProgrammeScalarWhereInput | ProgrammeScalarWhereInput[]
    id?: StringFilter<"Programme"> | string
    name?: StringFilter<"Programme"> | string
    programme?: EnumStudyModeFilter<"Programme"> | $Enums.StudyMode
    courseId?: StringFilter<"Programme"> | string
  }

  export type CourseUnitUpsertWithWhereUniqueWithoutCourseInput = {
    where: CourseUnitWhereUniqueInput
    update: XOR<CourseUnitUpdateWithoutCourseInput, CourseUnitUncheckedUpdateWithoutCourseInput>
    create: XOR<CourseUnitCreateWithoutCourseInput, CourseUnitUncheckedCreateWithoutCourseInput>
  }

  export type CourseUnitUpdateWithWhereUniqueWithoutCourseInput = {
    where: CourseUnitWhereUniqueInput
    data: XOR<CourseUnitUpdateWithoutCourseInput, CourseUnitUncheckedUpdateWithoutCourseInput>
  }

  export type CourseUnitUpdateManyWithWhereWithoutCourseInput = {
    where: CourseUnitScalarWhereInput
    data: XOR<CourseUnitUpdateManyMutationInput, CourseUnitUncheckedUpdateManyWithoutCourseInput>
  }

  export type CourseUnitScalarWhereInput = {
    AND?: CourseUnitScalarWhereInput | CourseUnitScalarWhereInput[]
    OR?: CourseUnitScalarWhereInput[]
    NOT?: CourseUnitScalarWhereInput | CourseUnitScalarWhereInput[]
    id?: StringFilter<"CourseUnit"> | string
    code?: StringFilter<"CourseUnit"> | string
    title?: StringFilter<"CourseUnit"> | string
    credits?: IntFilter<"CourseUnit"> | number
    year?: IntFilter<"CourseUnit"> | number
    semester?: EnumSemesterFilter<"CourseUnit"> | $Enums.Semester
    category?: EnumCourseCategoryFilter<"CourseUnit"> | $Enums.CourseCategory
    courseName?: StringFilter<"CourseUnit"> | string
  }

  export type EnrolledCourseUnitCreateManyStudentInput = {
    id?: string
    courseUnitId: string
    attempt?: number
    year: number
    semester: $Enums.Semester
    isInvigilatorApproved?: boolean
    invigilatorApprovedAt?: Date | string | null
    approvedBy?: string | null
  }

  export type StudentQrCodeCreateManyStudentInput = {
    id?: string
    qrCode?: string | null
    semester: $Enums.Semester
    issuedAt: Date | string
    expiresAt: Date | string
    isActive?: boolean
  }

  export type EnrolledCourseUnitUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    attempt?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    semester?: EnumSemesterFieldUpdateOperationsInput | $Enums.Semester
    isInvigilatorApproved?: BoolFieldUpdateOperationsInput | boolean
    invigilatorApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    courseUnit?: CourseUnitUpdateOneRequiredWithoutEnrolledByNestedInput
  }

  export type EnrolledCourseUnitUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseUnitId?: StringFieldUpdateOperationsInput | string
    attempt?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    semester?: EnumSemesterFieldUpdateOperationsInput | $Enums.Semester
    isInvigilatorApproved?: BoolFieldUpdateOperationsInput | boolean
    invigilatorApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EnrolledCourseUnitUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseUnitId?: StringFieldUpdateOperationsInput | string
    attempt?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    semester?: EnumSemesterFieldUpdateOperationsInput | $Enums.Semester
    isInvigilatorApproved?: BoolFieldUpdateOperationsInput | boolean
    invigilatorApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudentQrCodeUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: EnumSemesterFieldUpdateOperationsInput | $Enums.Semester
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StudentQrCodeUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: EnumSemesterFieldUpdateOperationsInput | $Enums.Semester
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StudentQrCodeUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: EnumSemesterFieldUpdateOperationsInput | $Enums.Semester
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExamAssignmentCreateManyInvigilatorInput = {
    id?: string
    examId: string
  }

  export type ExamAssignmentUpdateWithoutInvigilatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    exam?: ExamUpdateOneRequiredWithoutInvigilatorsNestedInput
  }

  export type ExamAssignmentUncheckedUpdateWithoutInvigilatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
  }

  export type ExamAssignmentUncheckedUpdateManyWithoutInvigilatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
  }

  export type EnrolledCourseUnitCreateManyCourseUnitInput = {
    id?: string
    studentId: string
    attempt?: number
    year: number
    semester: $Enums.Semester
    isInvigilatorApproved?: boolean
    invigilatorApprovedAt?: Date | string | null
    approvedBy?: string | null
  }

  export type ExamCreateManyCourseUnitInput = {
    id?: string
    examDate: Date | string
    startTime: Date | string
    endTime: Date | string
    venue: string
    isApproved?: boolean
    approvedAt?: Date | string | null
  }

  export type EnrolledCourseUnitUpdateWithoutCourseUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    attempt?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    semester?: EnumSemesterFieldUpdateOperationsInput | $Enums.Semester
    isInvigilatorApproved?: BoolFieldUpdateOperationsInput | boolean
    invigilatorApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    student?: StudentUpdateOneRequiredWithoutEnrolledUnitsNestedInput
  }

  export type EnrolledCourseUnitUncheckedUpdateWithoutCourseUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    attempt?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    semester?: EnumSemesterFieldUpdateOperationsInput | $Enums.Semester
    isInvigilatorApproved?: BoolFieldUpdateOperationsInput | boolean
    invigilatorApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EnrolledCourseUnitUncheckedUpdateManyWithoutCourseUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    attempt?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    semester?: EnumSemesterFieldUpdateOperationsInput | $Enums.Semester
    isInvigilatorApproved?: BoolFieldUpdateOperationsInput | boolean
    invigilatorApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExamUpdateWithoutCourseUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    examDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invigilators?: ExamAssignmentUpdateManyWithoutExamNestedInput
  }

  export type ExamUncheckedUpdateWithoutCourseUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    examDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invigilators?: ExamAssignmentUncheckedUpdateManyWithoutExamNestedInput
  }

  export type ExamUncheckedUpdateManyWithoutCourseUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    examDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ExamAssignmentCreateManyExamInput = {
    id?: string
    invigilatorId: string
  }

  export type ExamAssignmentUpdateWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    invigilator?: InvigilatorUpdateOneRequiredWithoutAssignedExamsNestedInput
  }

  export type ExamAssignmentUncheckedUpdateWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    invigilatorId?: StringFieldUpdateOperationsInput | string
  }

  export type ExamAssignmentUncheckedUpdateManyWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    invigilatorId?: StringFieldUpdateOperationsInput | string
  }

  export type StudentCreateManyProgrammeInput = {
    id: string
    firstName: string
    otherNames?: string | null
    lastName: string
    studentNo: string
    regNo: string
    gender: $Enums.Gender
    studyYear: number
    campus: string
    academicYear: string
    currentSemester: $Enums.Semester
    picture?: string | null
    paymentStatus?: $Enums.PaymentStatus
    permitStatus?: $Enums.PermitStatus
  }

  export type StudentUpdateWithoutProgrammeInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    otherNames?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    studentNo?: StringFieldUpdateOperationsInput | string
    regNo?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    studyYear?: IntFieldUpdateOperationsInput | number
    campus?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    currentSemester?: EnumSemesterFieldUpdateOperationsInput | $Enums.Semester
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    permitStatus?: EnumPermitStatusFieldUpdateOperationsInput | $Enums.PermitStatus
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
    enrolledUnits?: EnrolledCourseUnitUpdateManyWithoutStudentNestedInput
    studentQrCodes?: StudentQrCodeUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutProgrammeInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    otherNames?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    studentNo?: StringFieldUpdateOperationsInput | string
    regNo?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    studyYear?: IntFieldUpdateOperationsInput | number
    campus?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    currentSemester?: EnumSemesterFieldUpdateOperationsInput | $Enums.Semester
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    permitStatus?: EnumPermitStatusFieldUpdateOperationsInput | $Enums.PermitStatus
    enrolledUnits?: EnrolledCourseUnitUncheckedUpdateManyWithoutStudentNestedInput
    studentQrCodes?: StudentQrCodeUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateManyWithoutProgrammeInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    otherNames?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    studentNo?: StringFieldUpdateOperationsInput | string
    regNo?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    studyYear?: IntFieldUpdateOperationsInput | number
    campus?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    currentSemester?: EnumSemesterFieldUpdateOperationsInput | $Enums.Semester
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    permitStatus?: EnumPermitStatusFieldUpdateOperationsInput | $Enums.PermitStatus
  }

  export type DepartmentCreateManyFacultyOrSchoolInput = {
    id?: string
    name: string
  }

  export type AdminCreateManyFacultyOrSchoolInput = {
    id: string
    firstName: string
    otherNames?: string | null
    lastName: string
    picture?: string | null
  }

  export type DepartmentUpdateWithoutFacultyOrSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    courses?: CourseUpdateManyWithoutDepartmentNestedInput
    invigilators?: InvigilatorUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutFacultyOrSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    courses?: CourseUncheckedUpdateManyWithoutDepartmentNestedInput
    invigilators?: InvigilatorUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateManyWithoutFacultyOrSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUpdateWithoutFacultyOrSchoolInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    otherNames?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutFacultyOrSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    otherNames?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdminUncheckedUpdateManyWithoutFacultyOrSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    otherNames?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CourseCreateManyDepartmentInput = {
    id?: string
    name: string
    type: $Enums.CourseType
    code: string
  }

  export type InvigilatorCreateManyDepartmentInput = {
    id?: string
    invigilatorNumber: string
    title: string
    firstName: string
    otherNames?: string | null
    lastName: string
    picture?: string | null
  }

  export type CourseUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCourseTypeFieldUpdateOperationsInput | $Enums.CourseType
    code?: StringFieldUpdateOperationsInput | string
    programmes?: ProgrammeUpdateManyWithoutCourseNestedInput
    courseUnits?: CourseUnitUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCourseTypeFieldUpdateOperationsInput | $Enums.CourseType
    code?: StringFieldUpdateOperationsInput | string
    programmes?: ProgrammeUncheckedUpdateManyWithoutCourseNestedInput
    courseUnits?: CourseUnitUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateManyWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCourseTypeFieldUpdateOperationsInput | $Enums.CourseType
    code?: StringFieldUpdateOperationsInput | string
  }

  export type InvigilatorUpdateWithoutDepartmentInput = {
    invigilatorNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    otherNames?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutInvigilatorNestedInput
    assignedExams?: ExamAssignmentUpdateManyWithoutInvigilatorNestedInput
  }

  export type InvigilatorUncheckedUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    invigilatorNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    otherNames?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    assignedExams?: ExamAssignmentUncheckedUpdateManyWithoutInvigilatorNestedInput
  }

  export type InvigilatorUncheckedUpdateManyWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    invigilatorNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    otherNames?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProgrammeCreateManyCourseInput = {
    id?: string
    name: string
    programme: $Enums.StudyMode
  }

  export type CourseUnitCreateManyCourseInput = {
    id?: string
    code: string
    title: string
    credits: number
    year: number
    semester: $Enums.Semester
    category?: $Enums.CourseCategory
  }

  export type ProgrammeUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    programme?: EnumStudyModeFieldUpdateOperationsInput | $Enums.StudyMode
    students?: StudentUpdateManyWithoutProgrammeNestedInput
  }

  export type ProgrammeUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    programme?: EnumStudyModeFieldUpdateOperationsInput | $Enums.StudyMode
    students?: StudentUncheckedUpdateManyWithoutProgrammeNestedInput
  }

  export type ProgrammeUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    programme?: EnumStudyModeFieldUpdateOperationsInput | $Enums.StudyMode
  }

  export type CourseUnitUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    semester?: EnumSemesterFieldUpdateOperationsInput | $Enums.Semester
    category?: EnumCourseCategoryFieldUpdateOperationsInput | $Enums.CourseCategory
    enrolledBy?: EnrolledCourseUnitUpdateManyWithoutCourseUnitNestedInput
    exams?: ExamUpdateManyWithoutCourseUnitNestedInput
  }

  export type CourseUnitUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    semester?: EnumSemesterFieldUpdateOperationsInput | $Enums.Semester
    category?: EnumCourseCategoryFieldUpdateOperationsInput | $Enums.CourseCategory
    enrolledBy?: EnrolledCourseUnitUncheckedUpdateManyWithoutCourseUnitNestedInput
    exams?: ExamUncheckedUpdateManyWithoutCourseUnitNestedInput
  }

  export type CourseUnitUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    semester?: EnumSemesterFieldUpdateOperationsInput | $Enums.Semester
    category?: EnumCourseCategoryFieldUpdateOperationsInput | $Enums.CourseCategory
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}