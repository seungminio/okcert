import { importClass, JavaClass } from "java-bridge";

/**
 * This class just defines types, you should import Runnable instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class RunnableClass extends JavaClass {
    // ================== Method run ==================
    /**
     * @return original return type: 'void'
     */
    public run(): Promise<void>;
    // ================== Method run ==================
    /**
     * @return original return type: 'void'
     */
    public runSync(): void;
}

/**
 * Class java.lang.Runnable.
 *
 * This actually imports the java class for further use.
 * The class RunnableClass only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export class Runnable extends importClass<typeof RunnableClass>("java.lang.Runnable") {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor() {
        super();
    }
}
export default Runnable;