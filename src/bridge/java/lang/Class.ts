import { importClass, JavaClass, BasicOrJavaType } from "java-bridge";
import { Boolean as java_lang_Boolean } from "./Boolean";
import { ClassLoader as java_lang_ClassLoader } from "./ClassLoader";
import { ProtectionDomain as java_security_ProtectionDomain } from "./../security/ProtectionDomain";
import { TypeVariable as java_lang_reflect_TypeVariable } from "./reflect/TypeVariable";
import { Type as java_lang_reflect_Type } from "./reflect/Type";
import { Package as java_lang_Package } from "./Package";
import { Method as java_lang_reflect_Method } from "./reflect/Method";
import { Constructor as java_lang_reflect_Constructor } from "./reflect/Constructor";
import { Field as java_lang_reflect_Field } from "./reflect/Field";
import { InputStream as java_io_InputStream } from "./../io/InputStream";
import { URL as java_net_URL } from "./../net/URL";
import { Annotation as java_lang_annotation_Annotation } from "./annotation/Annotation";
import { AnnotatedType as java_lang_reflect_AnnotatedType } from "./reflect/AnnotatedType";
import { Long as java_lang_Long } from "./Long";
import { Integer as java_lang_Integer } from "./Integer";

/**
 * This class just defines types, you should import Class instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ClassClass extends JavaClass {
    // ================== Method forName ==================
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Class'
     */
    public static forName(var0: string | null): Promise<Class | null>;
    // ================== Method forName ==================
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Class'
     */
    public static forNameSync(var0: string | null): Class | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'boolean'
     * @param var2 original type: 'java.lang.ClassLoader'
     * @return original return type: 'java.lang.Class'
     */
    public static forName(var0: string | null, var1: java_lang_Boolean | boolean, var2: java_lang_ClassLoader | null): Promise<Class | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'boolean'
     * @param var2 original type: 'java.lang.ClassLoader'
     * @return original return type: 'java.lang.Class'
     */
    public static forNameSync(var0: string | null, var1: java_lang_Boolean | boolean, var2: java_lang_ClassLoader | null): Class | null;
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
    // ================== Method getProtectionDomain ==================
    /**
     * @return original return type: 'java.security.ProtectionDomain'
     */
    public getProtectionDomain(): Promise<java_security_ProtectionDomain | null>;
    // ================== Method getProtectionDomain ==================
    /**
     * @return original return type: 'java.security.ProtectionDomain'
     */
    public getProtectionDomainSync(): java_security_ProtectionDomain | null;
    // ================== Method isAssignableFrom ==================
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'boolean'
     */
    public isAssignableFrom(var0: ClassClass | null): Promise<boolean>;
    // ================== Method isAssignableFrom ==================
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'boolean'
     */
    public isAssignableFromSync(var0: ClassClass | null): boolean;
    // ================== Method isInstance ==================
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    public isInstance(var0: BasicOrJavaType | null): Promise<boolean>;
    // ================== Method isInstance ==================
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    public isInstanceSync(var0: BasicOrJavaType | null): boolean;
    // ================== Method getModifiers ==================
    /**
     * @return original return type: 'int'
     */
    public getModifiers(): Promise<number>;
    // ================== Method getModifiers ==================
    /**
     * @return original return type: 'int'
     */
    public getModifiersSync(): number;
    // ================== Method isInterface ==================
    /**
     * @return original return type: 'boolean'
     */
    public isInterface(): Promise<boolean>;
    // ================== Method isInterface ==================
    /**
     * @return original return type: 'boolean'
     */
    public isInterfaceSync(): boolean;
    // ================== Method isArray ==================
    /**
     * @return original return type: 'boolean'
     */
    public isArray(): Promise<boolean>;
    // ================== Method isArray ==================
    /**
     * @return original return type: 'boolean'
     */
    public isArraySync(): boolean;
    // ================== Method isPrimitive ==================
    /**
     * @return original return type: 'boolean'
     */
    public isPrimitive(): Promise<boolean>;
    // ================== Method isPrimitive ==================
    /**
     * @return original return type: 'boolean'
     */
    public isPrimitiveSync(): boolean;
    // ================== Method getSuperclass ==================
    /**
     * @return original return type: 'java.lang.Class'
     */
    public getSuperclass(): Promise<Class | null>;
    // ================== Method getSuperclass ==================
    /**
     * @return original return type: 'java.lang.Class'
     */
    public getSuperclassSync(): Class | null;
    // ================== Method getComponentType ==================
    /**
     * @return original return type: 'java.lang.Class'
     */
    public getComponentType(): Promise<Class | null>;
    // ================== Method getComponentType ==================
    /**
     * @return original return type: 'java.lang.Class'
     */
    public getComponentTypeSync(): Class | null;
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
    // ================== Method toGenericString ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public toGenericString(): Promise<string | null>;
    // ================== Method toGenericString ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public toGenericStringSync(): string | null;
    // ================== Method newInstance ==================
    /**
     * @return original return type: 'java.lang.Object'
     */
    public newInstance(): Promise<BasicOrJavaType | null>;
    // ================== Method newInstance ==================
    /**
     * @return original return type: 'java.lang.Object'
     */
    public newInstanceSync(): BasicOrJavaType | null;
    // ================== Method isAnnotation ==================
    /**
     * @return original return type: 'boolean'
     */
    public isAnnotation(): Promise<boolean>;
    // ================== Method isAnnotation ==================
    /**
     * @return original return type: 'boolean'
     */
    public isAnnotationSync(): boolean;
    // ================== Method isSynthetic ==================
    /**
     * @return original return type: 'boolean'
     */
    public isSynthetic(): Promise<boolean>;
    // ================== Method isSynthetic ==================
    /**
     * @return original return type: 'boolean'
     */
    public isSyntheticSync(): boolean;
    // ================== Method getClassLoader ==================
    /**
     * @return original return type: 'java.lang.ClassLoader'
     */
    public getClassLoader(): Promise<java_lang_ClassLoader | null>;
    // ================== Method getClassLoader ==================
    /**
     * @return original return type: 'java.lang.ClassLoader'
     */
    public getClassLoaderSync(): java_lang_ClassLoader | null;
    // ================== Method getTypeParameters ==================
    /**
     * @return original return type: 'java.lang.reflect.TypeVariable[]'
     */
    public getTypeParameters(): Promise<(java_lang_reflect_TypeVariable | null)[] | null>;
    // ================== Method getTypeParameters ==================
    /**
     * @return original return type: 'java.lang.reflect.TypeVariable[]'
     */
    public getTypeParametersSync(): (java_lang_reflect_TypeVariable | null)[] | null;
    // ================== Method getGenericSuperclass ==================
    /**
     * @return original return type: 'java.lang.reflect.Type'
     */
    public getGenericSuperclass(): Promise<java_lang_reflect_Type | null>;
    // ================== Method getGenericSuperclass ==================
    /**
     * @return original return type: 'java.lang.reflect.Type'
     */
    public getGenericSuperclassSync(): java_lang_reflect_Type | null;
    // ================== Method getPackage ==================
    /**
     * @return original return type: 'java.lang.Package'
     */
    public getPackage(): Promise<java_lang_Package | null>;
    // ================== Method getPackage ==================
    /**
     * @return original return type: 'java.lang.Package'
     */
    public getPackageSync(): java_lang_Package | null;
    // ================== Method getInterfaces ==================
    /**
     * @return original return type: 'java.lang.Class[]'
     */
    public getInterfaces(): Promise<(Class | null)[] | null>;
    // ================== Method getInterfaces ==================
    /**
     * @return original return type: 'java.lang.Class[]'
     */
    public getInterfacesSync(): (Class | null)[] | null;
    // ================== Method getGenericInterfaces ==================
    /**
     * @return original return type: 'java.lang.reflect.Type[]'
     */
    public getGenericInterfaces(): Promise<(java_lang_reflect_Type | null)[] | null>;
    // ================== Method getGenericInterfaces ==================
    /**
     * @return original return type: 'java.lang.reflect.Type[]'
     */
    public getGenericInterfacesSync(): (java_lang_reflect_Type | null)[] | null;
    // ================== Method getSigners ==================
    /**
     * @return original return type: 'java.lang.Object[]'
     */
    public getSigners(): Promise<(BasicOrJavaType | null)[] | null>;
    // ================== Method getSigners ==================
    /**
     * @return original return type: 'java.lang.Object[]'
     */
    public getSignersSync(): (BasicOrJavaType | null)[] | null;
    // ================== Method getEnclosingMethod ==================
    /**
     * @return original return type: 'java.lang.reflect.Method'
     */
    public getEnclosingMethod(): Promise<java_lang_reflect_Method | null>;
    // ================== Method getEnclosingMethod ==================
    /**
     * @return original return type: 'java.lang.reflect.Method'
     */
    public getEnclosingMethodSync(): java_lang_reflect_Method | null;
    // ================== Method getEnclosingConstructor ==================
    /**
     * @return original return type: 'java.lang.reflect.Constructor'
     */
    public getEnclosingConstructor(): Promise<java_lang_reflect_Constructor | null>;
    // ================== Method getEnclosingConstructor ==================
    /**
     * @return original return type: 'java.lang.reflect.Constructor'
     */
    public getEnclosingConstructorSync(): java_lang_reflect_Constructor | null;
    // ================== Method getDeclaringClass ==================
    /**
     * @return original return type: 'java.lang.Class'
     */
    public getDeclaringClass(): Promise<Class | null>;
    // ================== Method getDeclaringClass ==================
    /**
     * @return original return type: 'java.lang.Class'
     */
    public getDeclaringClassSync(): Class | null;
    // ================== Method getEnclosingClass ==================
    /**
     * @return original return type: 'java.lang.Class'
     */
    public getEnclosingClass(): Promise<Class | null>;
    // ================== Method getEnclosingClass ==================
    /**
     * @return original return type: 'java.lang.Class'
     */
    public getEnclosingClassSync(): Class | null;
    // ================== Method getSimpleName ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public getSimpleName(): Promise<string | null>;
    // ================== Method getSimpleName ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public getSimpleNameSync(): string | null;
    // ================== Method getTypeName ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public getTypeName(): Promise<string | null>;
    // ================== Method getTypeName ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public getTypeNameSync(): string | null;
    // ================== Method getCanonicalName ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public getCanonicalName(): Promise<string | null>;
    // ================== Method getCanonicalName ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public getCanonicalNameSync(): string | null;
    // ================== Method isAnonymousClass ==================
    /**
     * @return original return type: 'boolean'
     */
    public isAnonymousClass(): Promise<boolean>;
    // ================== Method isAnonymousClass ==================
    /**
     * @return original return type: 'boolean'
     */
    public isAnonymousClassSync(): boolean;
    // ================== Method isLocalClass ==================
    /**
     * @return original return type: 'boolean'
     */
    public isLocalClass(): Promise<boolean>;
    // ================== Method isLocalClass ==================
    /**
     * @return original return type: 'boolean'
     */
    public isLocalClassSync(): boolean;
    // ================== Method isMemberClass ==================
    /**
     * @return original return type: 'boolean'
     */
    public isMemberClass(): Promise<boolean>;
    // ================== Method isMemberClass ==================
    /**
     * @return original return type: 'boolean'
     */
    public isMemberClassSync(): boolean;
    // ================== Method getClasses ==================
    /**
     * @return original return type: 'java.lang.Class[]'
     */
    public getClasses(): Promise<(Class | null)[] | null>;
    // ================== Method getClasses ==================
    /**
     * @return original return type: 'java.lang.Class[]'
     */
    public getClassesSync(): (Class | null)[] | null;
    // ================== Method getFields ==================
    /**
     * @return original return type: 'java.lang.reflect.Field[]'
     */
    public getFields(): Promise<(java_lang_reflect_Field | null)[] | null>;
    // ================== Method getFields ==================
    /**
     * @return original return type: 'java.lang.reflect.Field[]'
     */
    public getFieldsSync(): (java_lang_reflect_Field | null)[] | null;
    // ================== Method getMethods ==================
    /**
     * @return original return type: 'java.lang.reflect.Method[]'
     */
    public getMethods(): Promise<(java_lang_reflect_Method | null)[] | null>;
    // ================== Method getMethods ==================
    /**
     * @return original return type: 'java.lang.reflect.Method[]'
     */
    public getMethodsSync(): (java_lang_reflect_Method | null)[] | null;
    // ================== Method getConstructors ==================
    /**
     * @return original return type: 'java.lang.reflect.Constructor[]'
     */
    public getConstructors(): Promise<(java_lang_reflect_Constructor | null)[] | null>;
    // ================== Method getConstructors ==================
    /**
     * @return original return type: 'java.lang.reflect.Constructor[]'
     */
    public getConstructorsSync(): (java_lang_reflect_Constructor | null)[] | null;
    // ================== Method getField ==================
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.reflect.Field'
     */
    public getField(var0: string | null): Promise<java_lang_reflect_Field | null>;
    // ================== Method getField ==================
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.reflect.Field'
     */
    public getFieldSync(var0: string | null): java_lang_reflect_Field | null;
    // ================== Method getMethod ==================
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.Class[]'
     * @return original return type: 'java.lang.reflect.Method'
     */
    public getMethod(var0: string | null, var1: (ClassClass | null)[] | null): Promise<java_lang_reflect_Method | null>;
    // ================== Method getMethod ==================
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.Class[]'
     * @return original return type: 'java.lang.reflect.Method'
     */
    public getMethodSync(var0: string | null, var1: (ClassClass | null)[] | null): java_lang_reflect_Method | null;
    // ================== Method getConstructor ==================
    /**
     * @param var0 original type: 'java.lang.Class[]'
     * @return original return type: 'java.lang.reflect.Constructor'
     */
    public getConstructor(var0: (ClassClass | null)[] | null): Promise<java_lang_reflect_Constructor | null>;
    // ================== Method getConstructor ==================
    /**
     * @param var0 original type: 'java.lang.Class[]'
     * @return original return type: 'java.lang.reflect.Constructor'
     */
    public getConstructorSync(var0: (ClassClass | null)[] | null): java_lang_reflect_Constructor | null;
    // ================== Method getDeclaredClasses ==================
    /**
     * @return original return type: 'java.lang.Class[]'
     */
    public getDeclaredClasses(): Promise<(Class | null)[] | null>;
    // ================== Method getDeclaredClasses ==================
    /**
     * @return original return type: 'java.lang.Class[]'
     */
    public getDeclaredClassesSync(): (Class | null)[] | null;
    // ================== Method getDeclaredFields ==================
    /**
     * @return original return type: 'java.lang.reflect.Field[]'
     */
    public getDeclaredFields(): Promise<(java_lang_reflect_Field | null)[] | null>;
    // ================== Method getDeclaredFields ==================
    /**
     * @return original return type: 'java.lang.reflect.Field[]'
     */
    public getDeclaredFieldsSync(): (java_lang_reflect_Field | null)[] | null;
    // ================== Method getDeclaredMethods ==================
    /**
     * @return original return type: 'java.lang.reflect.Method[]'
     */
    public getDeclaredMethods(): Promise<(java_lang_reflect_Method | null)[] | null>;
    // ================== Method getDeclaredMethods ==================
    /**
     * @return original return type: 'java.lang.reflect.Method[]'
     */
    public getDeclaredMethodsSync(): (java_lang_reflect_Method | null)[] | null;
    // ================== Method getDeclaredConstructors ==================
    /**
     * @return original return type: 'java.lang.reflect.Constructor[]'
     */
    public getDeclaredConstructors(): Promise<(java_lang_reflect_Constructor | null)[] | null>;
    // ================== Method getDeclaredConstructors ==================
    /**
     * @return original return type: 'java.lang.reflect.Constructor[]'
     */
    public getDeclaredConstructorsSync(): (java_lang_reflect_Constructor | null)[] | null;
    // ================== Method getDeclaredField ==================
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.reflect.Field'
     */
    public getDeclaredField(var0: string | null): Promise<java_lang_reflect_Field | null>;
    // ================== Method getDeclaredField ==================
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.reflect.Field'
     */
    public getDeclaredFieldSync(var0: string | null): java_lang_reflect_Field | null;
    // ================== Method getDeclaredMethod ==================
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.Class[]'
     * @return original return type: 'java.lang.reflect.Method'
     */
    public getDeclaredMethod(var0: string | null, var1: (ClassClass | null)[] | null): Promise<java_lang_reflect_Method | null>;
    // ================== Method getDeclaredMethod ==================
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.Class[]'
     * @return original return type: 'java.lang.reflect.Method'
     */
    public getDeclaredMethodSync(var0: string | null, var1: (ClassClass | null)[] | null): java_lang_reflect_Method | null;
    // ================== Method getDeclaredConstructor ==================
    /**
     * @param var0 original type: 'java.lang.Class[]'
     * @return original return type: 'java.lang.reflect.Constructor'
     */
    public getDeclaredConstructor(var0: (ClassClass | null)[] | null): Promise<java_lang_reflect_Constructor | null>;
    // ================== Method getDeclaredConstructor ==================
    /**
     * @param var0 original type: 'java.lang.Class[]'
     * @return original return type: 'java.lang.reflect.Constructor'
     */
    public getDeclaredConstructorSync(var0: (ClassClass | null)[] | null): java_lang_reflect_Constructor | null;
    // ================== Method getResourceAsStream ==================
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.io.InputStream'
     */
    public getResourceAsStream(var0: string | null): Promise<java_io_InputStream | null>;
    // ================== Method getResourceAsStream ==================
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.io.InputStream'
     */
    public getResourceAsStreamSync(var0: string | null): java_io_InputStream | null;
    // ================== Method getResource ==================
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.net.URL'
     */
    public getResource(var0: string | null): Promise<java_net_URL | null>;
    // ================== Method getResource ==================
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.net.URL'
     */
    public getResourceSync(var0: string | null): java_net_URL | null;
    // ================== Method desiredAssertionStatus ==================
    /**
     * @return original return type: 'boolean'
     */
    public desiredAssertionStatus(): Promise<boolean>;
    // ================== Method desiredAssertionStatus ==================
    /**
     * @return original return type: 'boolean'
     */
    public desiredAssertionStatusSync(): boolean;
    // ================== Method isEnum ==================
    /**
     * @return original return type: 'boolean'
     */
    public isEnum(): Promise<boolean>;
    // ================== Method isEnum ==================
    /**
     * @return original return type: 'boolean'
     */
    public isEnumSync(): boolean;
    // ================== Method getEnumConstants ==================
    /**
     * @return original return type: 'java.lang.Object[]'
     */
    public getEnumConstants(): Promise<(BasicOrJavaType | null)[] | null>;
    // ================== Method getEnumConstants ==================
    /**
     * @return original return type: 'java.lang.Object[]'
     */
    public getEnumConstantsSync(): (BasicOrJavaType | null)[] | null;
    // ================== Method cast ==================
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'java.lang.Object'
     */
    public cast(var0: BasicOrJavaType | null): Promise<BasicOrJavaType | null>;
    // ================== Method cast ==================
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'java.lang.Object'
     */
    public castSync(var0: BasicOrJavaType | null): BasicOrJavaType | null;
    // ================== Method asSubclass ==================
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.lang.Class'
     */
    public asSubclass(var0: ClassClass | null): Promise<Class | null>;
    // ================== Method asSubclass ==================
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.lang.Class'
     */
    public asSubclassSync(var0: ClassClass | null): Class | null;
    // ================== Method getAnnotation ==================
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.lang.annotation.Annotation'
     */
    public getAnnotation(var0: ClassClass | null): Promise<java_lang_annotation_Annotation | null>;
    // ================== Method getAnnotation ==================
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.lang.annotation.Annotation'
     */
    public getAnnotationSync(var0: ClassClass | null): java_lang_annotation_Annotation | null;
    // ================== Method isAnnotationPresent ==================
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'boolean'
     */
    public isAnnotationPresent(var0: ClassClass | null): Promise<boolean>;
    // ================== Method isAnnotationPresent ==================
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'boolean'
     */
    public isAnnotationPresentSync(var0: ClassClass | null): boolean;
    // ================== Method getAnnotationsByType ==================
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.lang.annotation.Annotation[]'
     */
    public getAnnotationsByType(var0: ClassClass | null): Promise<(java_lang_annotation_Annotation | null)[] | null>;
    // ================== Method getAnnotationsByType ==================
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.lang.annotation.Annotation[]'
     */
    public getAnnotationsByTypeSync(var0: ClassClass | null): (java_lang_annotation_Annotation | null)[] | null;
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
    public getDeclaredAnnotation(var0: ClassClass | null): Promise<java_lang_annotation_Annotation | null>;
    // ================== Method getDeclaredAnnotation ==================
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.lang.annotation.Annotation'
     */
    public getDeclaredAnnotationSync(var0: ClassClass | null): java_lang_annotation_Annotation | null;
    // ================== Method getDeclaredAnnotationsByType ==================
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.lang.annotation.Annotation[]'
     */
    public getDeclaredAnnotationsByType(var0: ClassClass | null): Promise<(java_lang_annotation_Annotation | null)[] | null>;
    // ================== Method getDeclaredAnnotationsByType ==================
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.lang.annotation.Annotation[]'
     */
    public getDeclaredAnnotationsByTypeSync(var0: ClassClass | null): (java_lang_annotation_Annotation | null)[] | null;
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
    // ================== Method getAnnotatedSuperclass ==================
    /**
     * @return original return type: 'java.lang.reflect.AnnotatedType'
     */
    public getAnnotatedSuperclass(): Promise<java_lang_reflect_AnnotatedType | null>;
    // ================== Method getAnnotatedSuperclass ==================
    /**
     * @return original return type: 'java.lang.reflect.AnnotatedType'
     */
    public getAnnotatedSuperclassSync(): java_lang_reflect_AnnotatedType | null;
    // ================== Method getAnnotatedInterfaces ==================
    /**
     * @return original return type: 'java.lang.reflect.AnnotatedType[]'
     */
    public getAnnotatedInterfaces(): Promise<(java_lang_reflect_AnnotatedType | null)[] | null>;
    // ================== Method getAnnotatedInterfaces ==================
    /**
     * @return original return type: 'java.lang.reflect.AnnotatedType[]'
     */
    public getAnnotatedInterfacesSync(): (java_lang_reflect_AnnotatedType | null)[] | null;
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
    // ================== Method getClass ==================
    /**
     * @return original return type: 'java.lang.Class'
     */
    public getClass(): Promise<Class>;
    // ================== Method getClass ==================
    /**
     * @return original return type: 'java.lang.Class'
     */
    public getClassSync(): Class;
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
 * Class java.lang.Class.
 *
 * This actually imports the java class for further use.
 * The class ClassClass only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export class Class extends importClass<typeof ClassClass>("java.lang.Class") {
}
export default Class;