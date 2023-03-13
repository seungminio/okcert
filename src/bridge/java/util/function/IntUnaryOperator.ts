import { importClass, JavaClass } from "java-bridge";
import { Integer as java_lang_Integer } from "./../../lang/Integer";

/**
 * This class just defines types, you should import IntUnaryOperator instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class IntUnaryOperatorClass extends JavaClass {
    // ================== Method compose ==================
    /**
     * @param var0 original type: 'java.util.function.IntUnaryOperator'
     * @return original return type: 'java.util.function.IntUnaryOperator'
     */
    public compose(var0: IntUnaryOperatorClass | null): Promise<IntUnaryOperator | null>;
    // ================== Method compose ==================
    /**
     * @param var0 original type: 'java.util.function.IntUnaryOperator'
     * @return original return type: 'java.util.function.IntUnaryOperator'
     */
    public composeSync(var0: IntUnaryOperatorClass | null): IntUnaryOperator | null;
    // ================== Method andThen ==================
    /**
     * @param var0 original type: 'java.util.function.IntUnaryOperator'
     * @return original return type: 'java.util.function.IntUnaryOperator'
     */
    public andThen(var0: IntUnaryOperatorClass | null): Promise<IntUnaryOperator | null>;
    // ================== Method andThen ==================
    /**
     * @param var0 original type: 'java.util.function.IntUnaryOperator'
     * @return original return type: 'java.util.function.IntUnaryOperator'
     */
    public andThenSync(var0: IntUnaryOperatorClass | null): IntUnaryOperator | null;
    // ================== Method identity ==================
    /**
     * @return original return type: 'java.util.function.IntUnaryOperator'
     */
    public static identity(): Promise<IntUnaryOperator | null>;
    // ================== Method identity ==================
    /**
     * @return original return type: 'java.util.function.IntUnaryOperator'
     */
    public static identitySync(): IntUnaryOperator | null;
    // ================== Method applyAsInt ==================
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    public applyAsInt(var0: java_lang_Integer | number): Promise<number>;
    // ================== Method applyAsInt ==================
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    public applyAsIntSync(var0: java_lang_Integer | number): number;
}

/**
 * Class java.util.function.IntUnaryOperator.
 *
 * This actually imports the java class for further use.
 * The class IntUnaryOperatorClass only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export class IntUnaryOperator extends importClass<typeof IntUnaryOperatorClass>("java.util.function.IntUnaryOperator") {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor() {
        super();
    }
}
export default IntUnaryOperator;