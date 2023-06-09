import { importClass, JavaClass, BasicOrJavaType } from "java-bridge";
import { Function as java_util_function_Function } from "./Function";

/**
 * This class just defines types, you should import BiFunction instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class BiFunctionClass extends JavaClass {
    // ================== Method andThen ==================
    /**
     * @param var0 original type: 'java.util.function.Function'
     * @return original return type: 'java.util.function.BiFunction'
     */
    public andThen(var0: java_util_function_Function | null): Promise<BiFunction | null>;
    // ================== Method andThen ==================
    /**
     * @param var0 original type: 'java.util.function.Function'
     * @return original return type: 'java.util.function.BiFunction'
     */
    public andThenSync(var0: java_util_function_Function | null): BiFunction | null;
    // ================== Method apply ==================
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'java.lang.Object'
     */
    public apply(var0: BasicOrJavaType | null, var1: BasicOrJavaType | null): Promise<BasicOrJavaType | null>;
    // ================== Method apply ==================
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'java.lang.Object'
     */
    public applySync(var0: BasicOrJavaType | null, var1: BasicOrJavaType | null): BasicOrJavaType | null;
}

/**
 * Class java.util.function.BiFunction.
 *
 * This actually imports the java class for further use.
 * The class BiFunctionClass only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export class BiFunction extends importClass<typeof BiFunctionClass>("java.util.function.BiFunction") {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor() {
        super();
    }
}
export default BiFunction;