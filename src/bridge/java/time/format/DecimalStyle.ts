import { importClass, JavaClass, BasicOrJavaType } from "java-bridge";
import { Locale as java_util_Locale } from "./../../util/Locale";
import { Set as java_util_Set } from "./../../util/Set";
import { Long as java_lang_Long } from "./../../lang/Long";
import { Integer as java_lang_Integer } from "./../../lang/Integer";
import { Class as java_lang_Class } from "./../../lang/Class";

/**
 * This class just defines types, you should import DecimalStyle instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class DecimalStyleClass extends JavaClass {
    // ================== Field STANDARD ==================
    /**
     * Original type: 'java.time.format.DecimalStyle'
     */
    public static readonly STANDARD: DecimalStyleClass | null;
    // ================== Method getPositiveSign ==================
    /**
     * @return original return type: 'char'
     */
    public getPositiveSign(): Promise<string | null>;
    // ================== Method getPositiveSign ==================
    /**
     * @return original return type: 'char'
     */
    public getPositiveSignSync(): string | null;
    // ================== Method getNegativeSign ==================
    /**
     * @return original return type: 'char'
     */
    public getNegativeSign(): Promise<string | null>;
    // ================== Method getNegativeSign ==================
    /**
     * @return original return type: 'char'
     */
    public getNegativeSignSync(): string | null;
    // ================== Method getZeroDigit ==================
    /**
     * @return original return type: 'char'
     */
    public getZeroDigit(): Promise<string | null>;
    // ================== Method getZeroDigit ==================
    /**
     * @return original return type: 'char'
     */
    public getZeroDigitSync(): string | null;
    // ================== Method ofDefaultLocale ==================
    /**
     * @return original return type: 'java.time.format.DecimalStyle'
     */
    public static ofDefaultLocale(): Promise<DecimalStyle | null>;
    // ================== Method ofDefaultLocale ==================
    /**
     * @return original return type: 'java.time.format.DecimalStyle'
     */
    public static ofDefaultLocaleSync(): DecimalStyle | null;
    // ================== Method withZeroDigit ==================
    /**
     * @param var0 original type: 'char'
     * @return original return type: 'java.time.format.DecimalStyle'
     */
    public withZeroDigit(var0: string | null): Promise<DecimalStyle | null>;
    // ================== Method withZeroDigit ==================
    /**
     * @param var0 original type: 'char'
     * @return original return type: 'java.time.format.DecimalStyle'
     */
    public withZeroDigitSync(var0: string | null): DecimalStyle | null;
    // ================== Method withPositiveSign ==================
    /**
     * @param var0 original type: 'char'
     * @return original return type: 'java.time.format.DecimalStyle'
     */
    public withPositiveSign(var0: string | null): Promise<DecimalStyle | null>;
    // ================== Method withPositiveSign ==================
    /**
     * @param var0 original type: 'char'
     * @return original return type: 'java.time.format.DecimalStyle'
     */
    public withPositiveSignSync(var0: string | null): DecimalStyle | null;
    // ================== Method withNegativeSign ==================
    /**
     * @param var0 original type: 'char'
     * @return original return type: 'java.time.format.DecimalStyle'
     */
    public withNegativeSign(var0: string | null): Promise<DecimalStyle | null>;
    // ================== Method withNegativeSign ==================
    /**
     * @param var0 original type: 'char'
     * @return original return type: 'java.time.format.DecimalStyle'
     */
    public withNegativeSignSync(var0: string | null): DecimalStyle | null;
    // ================== Method getDecimalSeparator ==================
    /**
     * @return original return type: 'char'
     */
    public getDecimalSeparator(): Promise<string | null>;
    // ================== Method getDecimalSeparator ==================
    /**
     * @return original return type: 'char'
     */
    public getDecimalSeparatorSync(): string | null;
    // ================== Method withDecimalSeparator ==================
    /**
     * @param var0 original type: 'char'
     * @return original return type: 'java.time.format.DecimalStyle'
     */
    public withDecimalSeparator(var0: string | null): Promise<DecimalStyle | null>;
    // ================== Method withDecimalSeparator ==================
    /**
     * @param var0 original type: 'char'
     * @return original return type: 'java.time.format.DecimalStyle'
     */
    public withDecimalSeparatorSync(var0: string | null): DecimalStyle | null;
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
    // ================== Method of ==================
    /**
     * @param var0 original type: 'java.util.Locale'
     * @return original return type: 'java.time.format.DecimalStyle'
     */
    public static of(var0: java_util_Locale | null): Promise<DecimalStyle | null>;
    // ================== Method of ==================
    /**
     * @param var0 original type: 'java.util.Locale'
     * @return original return type: 'java.time.format.DecimalStyle'
     */
    public static ofSync(var0: java_util_Locale | null): DecimalStyle | null;
    // ================== Method getAvailableLocales ==================
    /**
     * @return original return type: 'java.util.Set'
     */
    public static getAvailableLocales(): Promise<java_util_Set | null>;
    // ================== Method getAvailableLocales ==================
    /**
     * @return original return type: 'java.util.Set'
     */
    public static getAvailableLocalesSync(): java_util_Set | null;
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
}

/**
 * Class java.time.format.DecimalStyle.
 *
 * This actually imports the java class for further use.
 * The class DecimalStyleClass only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export class DecimalStyle extends importClass<typeof DecimalStyleClass>("java.time.format.DecimalStyle") {
}
export default DecimalStyle;