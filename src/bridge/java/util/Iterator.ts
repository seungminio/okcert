import { importClass, JavaClass, BasicOrJavaType } from "java-bridge";
import { Consumer as java_util_function_Consumer } from "./function/Consumer";

/**
 * This class just defines types, you should import Iterator instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class IteratorClass extends JavaClass {
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
    // ================== Method forEachRemaining ==================
    /**
     * @param var0 original type: 'java.util.function.Consumer'
     * @return original return type: 'void'
     */
    public forEachRemaining(var0: java_util_function_Consumer | null): Promise<void>;
    // ================== Method forEachRemaining ==================
    /**
     * @param var0 original type: 'java.util.function.Consumer'
     * @return original return type: 'void'
     */
    public forEachRemainingSync(var0: java_util_function_Consumer | null): void;
}

/**
 * Class java.util.Iterator.
 *
 * This actually imports the java class for further use.
 * The class IteratorClass only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export class Iterator extends importClass<typeof IteratorClass>("java.util.Iterator") {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor() {
        super();
    }
}
export default Iterator;