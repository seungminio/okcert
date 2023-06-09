import { importClass, JavaClass, BasicOrJavaType } from "java-bridge";
import { LongConsumer as java_util_function_LongConsumer } from "./function/LongConsumer";
import { Consumer as java_util_function_Consumer } from "./function/Consumer";

/**
 * This class just defines types, you should import PrimitiveIterator$OfLong instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class PrimitiveIterator$OfLongClass extends JavaClass {
    // ================== Method nextLong ==================
    /**
     * @return original return type: 'long'
     */
    public nextLong(): Promise<number>;
    // ================== Method nextLong ==================
    /**
     * @return original return type: 'long'
     */
    public nextLongSync(): number;
    // ================== Method next ==================
    /**
     * @return original return type: 'java.lang.Object'
     */
    public next(): Promise<BasicOrJavaType | null>;
    // ================== Method next ==================
    /**
     * @return original return type: 'java.lang.Object'
     */
    public nextSync(): BasicOrJavaType | null;
    /**
     * @return original return type: 'java.lang.Long'
     */
    public next(): Promise<number | null>;
    /**
     * @return original return type: 'java.lang.Long'
     */
    public nextSync(): number | null;
    // ================== Method forEachRemaining ==================
    /**
     * @param var0 original type: 'java.util.function.LongConsumer'
     * @return original return type: 'void'
     */
    public forEachRemaining(var0: java_util_function_LongConsumer | null): Promise<void>;
    // ================== Method forEachRemaining ==================
    /**
     * @param var0 original type: 'java.util.function.LongConsumer'
     * @return original return type: 'void'
     */
    public forEachRemainingSync(var0: java_util_function_LongConsumer | null): void;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'void'
     */
    public forEachRemaining(var0: BasicOrJavaType | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'void'
     */
    public forEachRemainingSync(var0: BasicOrJavaType | null): void;
    /**
     * @param var0 original type: 'java.util.function.Consumer'
     * @return original return type: 'void'
     */
    public forEachRemaining(var0: java_util_function_Consumer | null): Promise<void>;
    /**
     * @param var0 original type: 'java.util.function.Consumer'
     * @return original return type: 'void'
     */
    public forEachRemainingSync(var0: java_util_function_Consumer | null): void;
    // ================== Method remove ==================
    /**
     * @return original return type: 'void'
     */
    public remove(): Promise<void>;
    // ================== Method remove ==================
    /**
     * @return original return type: 'void'
     */
    public removeSync(): void;
    // ================== Method hasNext ==================
    /**
     * @return original return type: 'boolean'
     */
    public hasNext(): Promise<boolean>;
    // ================== Method hasNext ==================
    /**
     * @return original return type: 'boolean'
     */
    public hasNextSync(): boolean;
}

/**
 * Class java.util.PrimitiveIterator$OfLong.
 *
 * This actually imports the java class for further use.
 * The class PrimitiveIterator$OfLongClass only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export class PrimitiveIterator$OfLong extends importClass<typeof PrimitiveIterator$OfLongClass>("java.util.PrimitiveIterator$OfLong") {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor() {
        super();
    }
}
export default PrimitiveIterator$OfLong;