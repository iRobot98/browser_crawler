/// <reference types="qs" />
import express from "express";
export declare const removeDuplicates: (...args: any[]) => string[];
export declare const stringify: (line: any, depth?: number) => string;
export declare const Log: (line: string) => Promise<string>;
export declare const ErrorLog: (line: string | Error) => Promise<void>;
export declare const RequestLog: express.RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
export declare const DataLog: (file_name: string, line: string | Error) => Promise<void>;
