import { importClass, JavaClass, BasicOrJavaType } from "java-bridge";
import { Date as java_util_Date } from "./../util/Date";
import { CertPath as java_security_cert_CertPath } from "./cert/CertPath";
import { Long as java_lang_Long } from "./../lang/Long";
import { Integer as java_lang_Integer } from "./../lang/Integer";
import { Class as java_lang_Class } from "./../lang/Class";

/**
 * This class just defines types, you should import Timestamp instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class TimestampClass extends JavaClass {
    // ================== Method getTimestamp ==================
    /**
     * @return original return type: 'java.util.Date'
     */
    public getTimestamp(): Promise<java_util_Date | null>;
    // ================== Method getTimestamp ==================
    /**
     * @return original return type: 'java.util.Date'
     */
    public getTimestampSync(): java_util_Date | null;
    // ================== Method equals ==================
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    public equals(var0: BasicOrJavaType | null): Promise<boolean>;
    // ================== Method equals ==================
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    public equalsSync(var0: BasicOrJavaType | null): boolean;
    // ================== Method toString ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public toString(): Promise<string>;
    // ================== Method toString ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public toStringSync(): string;
    // ================== Method hashCode ==================
    /**
     * @return original return type: 'int'
     */
    public hashCode(): Promise<number>;
    // ================== Method hashCode ==================
    /**
     * @return original return type: 'int'
     */
    public hashCodeSync(): number;
    // ================== Method getSignerCertPath ==================
    /**
     * @return original return type: 'java.security.cert.CertPath'
     */
    public getSignerCertPath(): Promise<java_security_cert_CertPath | null>;
    // ================== Method getSignerCertPath ==================
    /**
     * @return original return type: 'java.security.cert.CertPath'
     */
    public getSignerCertPathSync(): java_security_cert_CertPath | null;
    // ================== Method wait ==================
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    public wait(var0: java_lang_Long | bigint | number, var1: java_lang_Integer | number): Promise<void>;
    // ================== Method wait ==================
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    public waitSync(var0: java_lang_Long | bigint | number, var1: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'void'
     */
    public wait(var0: java_lang_Long | bigint | number): Promise<void>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'void'
     */
    public waitSync(var0: java_lang_Long | bigint | number): void;
    /**
     * @return original return type: 'void'
     */
    public wait(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    public waitSync(): void;
    // ================== Method getClass ==================
    /**
     * @return original return type: 'java.lang.Class'
     */
    public getClass(): Promise<java_lang_Class>;
    // ================== Method getClass ==================
    /**
     * @return original return type: 'java.lang.Class'
     */
    public getClassSync(): java_lang_Class;
    // ================== Method notify ==================
    /**
     * @return original return type: 'void'
     */
    public notify(): Promise<void>;
    // ================== Method notify ==================
    /**
     * @return original return type: 'void'
     */
    public notifySync(): void;
    // ================== Method notifyAll ==================
    /**
     * @return original return type: 'void'
     */
    public notifyAll(): Promise<void>;
    // ================== Method notifyAll ==================
    /**
     * @return original return type: 'void'
     */
    public notifyAllSync(): void;
    // ================== Method newInstance ==================
    /**
     * @param var0 original type: 'java.util.Date'
     * @param var1 original type: 'java.security.cert.CertPath'
     * @return original return type: 'java.security.Timestamp'
     */
    public static newInstance(var0: java_util_Date | null, var1: java_security_cert_CertPath | null): Promise<Timestamp>;
    // ================== Constructors ==================
    /**
     * @param var0 original type: 'java.util.Date'
     * @param var1 original type: 'java.security.cert.CertPath'
     */
    public constructor(var0: java_util_Date | null, var1: java_security_cert_CertPath | null);
}

/**
 * Class java.security.Timestamp.
 *
 * This actually imports the java class for further use.
 * The class TimestampClass only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export class Timestamp extends importClass<typeof TimestampClass>("java.security.Timestamp") {
}
export default Timestamp;