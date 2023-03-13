import { importClass, JavaClass, BasicOrJavaType } from "java-bridge";
import { Annotation as java_lang_annotation_Annotation } from "./annotation/Annotation";
import { Class as java_lang_Class } from "./Class";
import { URL as java_net_URL } from "./../net/URL";
import { Long as java_lang_Long } from "./Long";
import { Integer as java_lang_Integer } from "./Integer";

/**
 * This class just defines types, you should import Package instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class PackageClass extends JavaClass {
    // ================== Method isCompatibleWith ==================
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    public isCompatibleWith(var0: string | null): Promise<boolean>;
    // ================== Method isCompatibleWith ==================
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    public isCompatibleWithSync(var0: string | null): boolean;
    // ================== Method getSpecificationTitle ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public getSpecificationTitle(): Promise<string | null>;
    // ================== Method getSpecificationTitle ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public getSpecificationTitleSync(): string | null;
    // ================== Method getSpecificationVersion ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public getSpecificationVersion(): Promise<string | null>;
    // ================== Method getSpecificationVersion ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public getSpecificationVersionSync(): string | null;
    // ================== Method getSpecificationVendor ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public getSpecificationVendor(): Promise<string | null>;
    // ================== Method getSpecificationVendor ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public getSpecificationVendorSync(): string | null;
    // ================== Method getImplementationTitle ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public getImplementationTitle(): Promise<string | null>;
    // ================== Method getImplementationTitle ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public getImplementationTitleSync(): string | null;
    // ================== Method getImplementationVersion ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public getImplementationVersion(): Promise<string | null>;
    // ================== Method getImplementationVersion ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public getImplementationVersionSync(): string | null;
    // ================== Method getImplementationVendor ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public getImplementationVendor(): Promise<string | null>;
    // ================== Method getImplementationVendor ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public getImplementationVendorSync(): string | null;
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
    // ================== Method getName ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public getName(): Promise<string | null>;
    // ================== Method getName ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public getNameSync(): string | null;
    // ================== Method getPackage ==================
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Package'
     */
    public static getPackage(var0: string | null): Promise<Package | null>;
    // ================== Method getPackage ==================
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Package'
     */
    public static getPackageSync(var0: string | null): Package | null;
    // ================== Method getAnnotation ==================
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.lang.annotation.Annotation'
     */
    public getAnnotation(var0: java_lang_Class | null): Promise<java_lang_annotation_Annotation | null>;
    // ================== Method getAnnotation ==================
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.lang.annotation.Annotation'
     */
    public getAnnotationSync(var0: java_lang_Class | null): java_lang_annotation_Annotation | null;
    // ================== Method isAnnotationPresent ==================
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'boolean'
     */
    public isAnnotationPresent(var0: java_lang_Class | null): Promise<boolean>;
    // ================== Method isAnnotationPresent ==================
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'boolean'
     */
    public isAnnotationPresentSync(var0: java_lang_Class | null): boolean;
    // ================== Method getAnnotationsByType ==================
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.lang.annotation.Annotation[]'
     */
    public getAnnotationsByType(var0: java_lang_Class | null): Promise<(java_lang_annotation_Annotation | null)[] | null>;
    // ================== Method getAnnotationsByType ==================
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.lang.annotation.Annotation[]'
     */
    public getAnnotationsByTypeSync(var0: java_lang_Class | null): (java_lang_annotation_Annotation | null)[] | null;
    // ================== Method getAnnotations ==================
    /**
     * @return original return type: 'java.lang.annotation.Annotation[]'
     */
    public getAnnotations(): Promise<(java_lang_annotation_Annotation | null)[] | null>;
    // ================== Method getAnnotations ==================
    /**
     * @return original return type: 'java.lang.annotation.Annotation[]'
     */
    public getAnnotationsSync(): (java_lang_annotation_Annotation | null)[] | null;
    // ================== Method getDeclaredAnnotation ==================
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.lang.annotation.Annotation'
     */
    public getDeclaredAnnotation(var0: java_lang_Class | null): Promise<java_lang_annotation_Annotation | null>;
    // ================== Method getDeclaredAnnotation ==================
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.lang.annotation.Annotation'
     */
    public getDeclaredAnnotationSync(var0: java_lang_Class | null): java_lang_annotation_Annotation | null;
    // ================== Method getDeclaredAnnotationsByType ==================
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.lang.annotation.Annotation[]'
     */
    public getDeclaredAnnotationsByType(var0: java_lang_Class | null): Promise<(java_lang_annotation_Annotation | null)[] | null>;
    // ================== Method getDeclaredAnnotationsByType ==================
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.lang.annotation.Annotation[]'
     */
    public getDeclaredAnnotationsByTypeSync(var0: java_lang_Class | null): (java_lang_annotation_Annotation | null)[] | null;
    // ================== Method getDeclaredAnnotations ==================
    /**
     * @return original return type: 'java.lang.annotation.Annotation[]'
     */
    public getDeclaredAnnotations(): Promise<(java_lang_annotation_Annotation | null)[] | null>;
    // ================== Method getDeclaredAnnotations ==================
    /**
     * @return original return type: 'java.lang.annotation.Annotation[]'
     */
    public getDeclaredAnnotationsSync(): (java_lang_annotation_Annotation | null)[] | null;
    // ================== Method getPackages ==================
    /**
     * @return original return type: 'java.lang.Package[]'
     */
    public static getPackages(): Promise<(Package | null)[] | null>;
    // ================== Method getPackages ==================
    /**
     * @return original return type: 'java.lang.Package[]'
     */
    public static getPackagesSync(): (Package | null)[] | null;
    // ================== Method isSealed ==================
    /**
     * @param var0 original type: 'java.net.URL'
     * @return original return type: 'boolean'
     */
    public isSealed(var0: java_net_URL | null): Promise<boolean>;
    // ================== Method isSealed ==================
    /**
     * @param var0 original type: 'java.net.URL'
     * @return original return type: 'boolean'
     */
    public isSealedSync(var0: java_net_URL | null): boolean;
    /**
     * @return original return type: 'boolean'
     */
    public isSealed(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    public isSealedSync(): boolean;
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
}

/**
 * Class java.lang.Package.
 *
 * This actually imports the java class for further use.
 * The class PackageClass only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export class Package extends importClass<typeof PackageClass>("java.lang.Package") {
}
export default Package;