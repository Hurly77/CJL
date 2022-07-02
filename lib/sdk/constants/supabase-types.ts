/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/": {
    get: {
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/projects": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.projects.id"];
          title?: parameters["rowFilter.projects.title"];
          description?: parameters["rowFilter.projects.description"];
          img?: parameters["rowFilter.projects.img"];
          code?: parameters["rowFilter.projects.code"];
          demo?: parameters["rowFilter.projects.demo"];
          category?: parameters["rowFilter.projects.category"];
          spare2?: parameters["rowFilter.projects.spare2"];
          spare3?: parameters["rowFilter.projects.spare3"];
          spare4?: parameters["rowFilter.projects.spare4"];
          created_at?: parameters["rowFilter.projects.created_at"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["projects"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** projects */
          projects?: definitions["projects"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.projects.id"];
          title?: parameters["rowFilter.projects.title"];
          description?: parameters["rowFilter.projects.description"];
          img?: parameters["rowFilter.projects.img"];
          code?: parameters["rowFilter.projects.code"];
          demo?: parameters["rowFilter.projects.demo"];
          category?: parameters["rowFilter.projects.category"];
          spare2?: parameters["rowFilter.projects.spare2"];
          spare3?: parameters["rowFilter.projects.spare3"];
          spare4?: parameters["rowFilter.projects.spare4"];
          created_at?: parameters["rowFilter.projects.created_at"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.projects.id"];
          title?: parameters["rowFilter.projects.title"];
          description?: parameters["rowFilter.projects.description"];
          img?: parameters["rowFilter.projects.img"];
          code?: parameters["rowFilter.projects.code"];
          demo?: parameters["rowFilter.projects.demo"];
          category?: parameters["rowFilter.projects.category"];
          spare2?: parameters["rowFilter.projects.spare2"];
          spare3?: parameters["rowFilter.projects.spare3"];
          spare4?: parameters["rowFilter.projects.spare4"];
          created_at?: parameters["rowFilter.projects.created_at"];
        };
        body: {
          /** projects */
          projects?: definitions["projects"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
}

export interface definitions {
  projects: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /**
     * Format: text
     * @default No Name
     */
    title?: string;
    /** Format: text */
    description?: string;
    /** Format: text */
    img?: string;
    /** Format: text */
    code?: string;
    /** Format: text */
    demo?: string;
    /**
     * Format: public.category
     * @enum {string}
     */
    category: "js" | "react" | "c-lang" | "python" | "api";
    /** Format: text */
    spare2?: string;
    /** Format: text */
    spare3?: string;
    /** Format: text */
    spare4?: string;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    created_at?: string;
  };
}

export interface parameters {
  /**
   * @description Preference
   * @enum {string}
   */
  preferParams: "params=single-object";
  /**
   * @description Preference
   * @enum {string}
   */
  preferReturn: "return=representation" | "return=minimal" | "return=none";
  /**
   * @description Preference
   * @enum {string}
   */
  preferCount: "count=none";
  /** @description Filtering Columns */
  select: string;
  /** @description On Conflict */
  on_conflict: string;
  /** @description Ordering */
  order: string;
  /** @description Limiting and Pagination */
  range: string;
  /**
   * @description Limiting and Pagination
   * @default items
   */
  rangeUnit: string;
  /** @description Limiting and Pagination */
  offset: string;
  /** @description Limiting and Pagination */
  limit: string;
  /** @description projects */
  "body.projects": definitions["projects"];
  /** Format: bigint */
  "rowFilter.projects.id": string;
  /** Format: text */
  "rowFilter.projects.title": string;
  /** Format: text */
  "rowFilter.projects.description": string;
  /** Format: text */
  "rowFilter.projects.img": string;
  /** Format: text */
  "rowFilter.projects.code": string;
  /** Format: text */
  "rowFilter.projects.demo": string;
  /** Format: public.category */
  "rowFilter.projects.category": string;
  /** Format: text */
  "rowFilter.projects.spare2": string;
  /** Format: text */
  "rowFilter.projects.spare3": string;
  /** Format: text */
  "rowFilter.projects.spare4": string;
  /** Format: timestamp with time zone */
  "rowFilter.projects.created_at": string;
}
