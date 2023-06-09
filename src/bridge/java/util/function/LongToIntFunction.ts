import { importClass, JavaClass } from "java-bridge";
import { Long as java_lang_Long } from "./../../lang/Long";

/**
 * This class just defines types, you should import LongToIntFunction instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class LongToIntFunctionClass extends JavaClass {
    // ================== Method applyAsInt ==================
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'int'
     */
    public applyAsInt(var0: java_lang_Long | bigint | number): Promise<number>;
    // ================== Method applyAsInt ==================
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'int'
     */
    public applyAsIntSync(var0: java_lang_Long | bigint | number): number;
}

/**
 * Class java.util.function.LongToIntFunction.
 *
 * This actually imports the java class for further use.
 * The class LongToIntFunctionClass only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export class LongToIntFunction extends importClass<typeof LongToIntFunctionClass>("java.util.function.LongToIntFunction") {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor() {
        super();
    }
}
export default LongToIntFunction;