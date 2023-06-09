import { importClass, JavaClass, BasicOrJavaType } from "java-bridge";

/**
 * This class just defines types, you should import ToDoubleFunction instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ToDoubleFunctionClass extends JavaClass {
    // ================== Method applyAsDouble ==================
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'double'
     */
    public applyAsDouble(var0: BasicOrJavaType | null): Promise<number>;
    // ================== Method applyAsDouble ==================
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'double'
     */
    public applyAsDoubleSync(var0: BasicOrJavaType | null): number;
}

/**
 * Class java.util.function.ToDoubleFunction.
 *
 * This actually imports the java class for further use.
 * The class ToDoubleFunctionClass only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export class ToDoubleFunction extends importClass<typeof ToDoubleFunctionClass>("java.util.function.ToDoubleFunction") {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor() {
        super();
    }
}
export default ToDoubleFunction;