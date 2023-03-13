import { importClass, JavaClass } from "java-bridge";
import { Long as java_lang_Long } from "./../../lang/Long";

/**
 * This class just defines types, you should import LongPredicate instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class LongPredicateClass extends JavaClass {
    // ================== Method negate ==================
    /**
     * @return original return type: 'java.util.function.LongPredicate'
     */
    public negate(): Promise<LongPredicate | null>;
    // ================== Method negate ==================
    /**
     * @return original return type: 'java.util.function.LongPredicate'
     */
    public negateSync(): LongPredicate | null;
    // ================== Method test ==================
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'boolean'
     */
    public test(var0: java_lang_Long | bigint | number): Promise<boolean>;
    // ================== Method test ==================
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'boolean'
     */
    public testSync(var0: java_lang_Long | bigint | number): boolean;
    // ================== Method and ==================
    /**
     * @param var0 original type: 'java.util.function.LongPredicate'
     * @return original return type: 'java.util.function.LongPredicate'
     */
    public and(var0: LongPredicateClass | null): Promise<LongPredicate | null>;
    // ================== Method and ==================
    /**
     * @param var0 original type: 'java.util.function.LongPredicate'
     * @return original return type: 'java.util.function.LongPredicate'
     */
    public andSync(var0: LongPredicateClass | null): LongPredicate | null;
    // ================== Method or ==================
    /**
     * @param var0 original type: 'java.util.function.LongPredicate'
     * @return original return type: 'java.util.function.LongPredicate'
     */
    public or(var0: LongPredicateClass | null): Promise<LongPredicate | null>;
    // ================== Method or ==================
    /**
     * @param var0 original type: 'java.util.function.LongPredicate'
     * @return original return type: 'java.util.function.LongPredicate'
     */
    public orSync(var0: LongPredicateClass | null): LongPredicate | null;
}

/**
 * Class java.util.function.LongPredicate.
 *
 * This actually imports the java class for further use.
 * The class LongPredicateClass only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export class LongPredicate extends importClass<typeof LongPredicateClass>("java.util.function.LongPredicate") {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor() {
        super();
    }
}
export default LongPredicate;