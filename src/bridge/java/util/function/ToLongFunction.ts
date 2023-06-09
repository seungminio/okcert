import { importClass, JavaClass, BasicOrJavaType } from "java-bridge";

/**
 * This class just defines types, you should import ToLongFunction instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ToLongFunctionClass extends JavaClass {
    // ================== Method applyAsLong ==================
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'long'
     */
    public applyAsLong(var0: BasicOrJavaType | null): Promise<number>;
    // ================== Method applyAsLong ==================
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'long'
     */
    public applyAsLongSync(var0: BasicOrJavaType | null): number;
}

/**
 * Class java.util.function.ToLongFunction.
 *
 * This actually imports the java class for further use.
 * The class ToLongFunctionClass only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export class ToLongFunction extends importClass<typeof ToLongFunctionClass>("java.util.function.ToLongFunction") {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor() {
        super();
    }
}
export default ToLongFunction;