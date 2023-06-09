import { importClass, JavaClass, BasicOrJavaType } from "java-bridge";
import { Throwable as java_lang_Throwable } from "./../../lang/Throwable";

/**
 * This class just defines types, you should import CompletionHandler instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class CompletionHandlerClass extends JavaClass {
    // ================== Method completed ==================
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'void'
     */
    public completed(var0: BasicOrJavaType | null, var1: BasicOrJavaType | null): Promise<void>;
    // ================== Method completed ==================
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'void'
     */
    public completedSync(var0: BasicOrJavaType | null, var1: BasicOrJavaType | null): void;
    // ================== Method failed ==================
    /**
     * @param var0 original type: 'java.lang.Throwable'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'void'
     */
    public failed(var0: java_lang_Throwable | null, var1: BasicOrJavaType | null): Promise<void>;
    // ================== Method failed ==================
    /**
     * @param var0 original type: 'java.lang.Throwable'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'void'
     */
    public failedSync(var0: java_lang_Throwable | null, var1: BasicOrJavaType | null): void;
}

/**
 * Class java.nio.channels.CompletionHandler.
 *
 * This actually imports the java class for further use.
 * The class CompletionHandlerClass only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export class CompletionHandler extends importClass<typeof CompletionHandlerClass>("java.nio.channels.CompletionHandler") {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor() {
        super();
    }
}
export default CompletionHandler;