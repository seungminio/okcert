import { importClass, JavaClass, BasicOrJavaType } from "java-bridge";

/**
 * This class just defines types, you should import ToIntFunction instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ToIntFunctionClass extends JavaClass {
    // ================== Method applyAsInt ==================
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'int'
     */
    public applyAsInt(var0: BasicOrJavaType | null): Promise<number>;
    // ================== Method applyAsInt ==================
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'int'
     */
    public applyAsIntSync(var0: BasicOrJavaType | null): number;
}

/**
 * Class java.util.function.ToIntFunction.
 *
 * This actually imports the java class for further use.
 * The class ToIntFunctionClass only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export class ToIntFunction extends importClass<typeof ToIntFunctionClass>("java.util.function.ToIntFunction") {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor() {
        super();
    }
}
export default ToIntFunction;