import { importClass, JavaClass, BasicOrJavaType } from "java-bridge";
import { Short as java_lang_Short } from "./../lang/Short";
import { Integer as java_lang_Integer } from "./../lang/Integer";
import { ByteOrder as java_nio_ByteOrder } from "./ByteOrder";
import { Buffer as java_nio_Buffer } from "./Buffer";
import { Long as java_lang_Long } from "./../lang/Long";
import { Class as java_lang_Class } from "./../lang/Class";

/**
 * This class just defines types, you should import ShortBuffer instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ShortBufferClass extends JavaClass {
    // ================== Method get ==================
    /**
     * @param var0 original type: 'short[]'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'java.nio.ShortBuffer'
     */
    public get(var0: (java_lang_Short | number)[] | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number): Promise<ShortBuffer | null>;
    // ================== Method get ==================
    /**
     * @param var0 original type: 'short[]'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'java.nio.ShortBuffer'
     */
    public getSync(var0: (java_lang_Short | number)[] | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number): ShortBuffer | null;
    /**
     * @param var0 original type: 'short[]'
     * @return original return type: 'java.nio.ShortBuffer'
     */
    public get(var0: (java_lang_Short | number)[] | null): Promise<ShortBuffer | null>;
    /**
     * @param var0 original type: 'short[]'
     * @return original return type: 'java.nio.ShortBuffer'
     */
    public getSync(var0: (java_lang_Short | number)[] | null): ShortBuffer | null;
    /**
     * @return original return type: 'short'
     */
    public get(): Promise<number>;
    /**
     * @return original return type: 'short'
     */
    public getSync(): number;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'short'
     */
    public get(var0: java_lang_Integer | number): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'short'
     */
    public getSync(var0: java_lang_Integer | number): number;
    // ================== Method put ==================
    /**
     * @param var0 original type: 'short[]'
     * @return original return type: 'java.nio.ShortBuffer'
     */
    public put(var0: (java_lang_Short | number)[] | null): Promise<ShortBuffer | null>;
    // ================== Method put ==================
    /**
     * @param var0 original type: 'short[]'
     * @return original return type: 'java.nio.ShortBuffer'
     */
    public putSync(var0: (java_lang_Short | number)[] | null): ShortBuffer | null;
    /**
     * @param var0 original type: 'short[]'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'java.nio.ShortBuffer'
     */
    public put(var0: (java_lang_Short | number)[] | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number): Promise<ShortBuffer | null>;
    /**
     * @param var0 original type: 'short[]'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'java.nio.ShortBuffer'
     */
    public putSync(var0: (java_lang_Short | number)[] | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number): ShortBuffer | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'short'
     * @return original return type: 'java.nio.ShortBuffer'
     */
    public put(var0: java_lang_Integer | number, var1: java_lang_Short | number): Promise<ShortBuffer | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'short'
     * @return original return type: 'java.nio.ShortBuffer'
     */
    public putSync(var0: java_lang_Integer | number, var1: java_lang_Short | number): ShortBuffer | null;
    /**
     * @param var0 original type: 'java.nio.ShortBuffer'
     * @return original return type: 'java.nio.ShortBuffer'
     */
    public put(var0: ShortBufferClass | null): Promise<ShortBuffer | null>;
    /**
     * @param var0 original type: 'java.nio.ShortBuffer'
     * @return original return type: 'java.nio.ShortBuffer'
     */
    public putSync(var0: ShortBufferClass | null): ShortBuffer | null;
    /**
     * @param var0 original type: 'short'
     * @return original return type: 'java.nio.ShortBuffer'
     */
    public put(var0: java_lang_Short | number): Promise<ShortBuffer | null>;
    /**
     * @param var0 original type: 'short'
     * @return original return type: 'java.nio.ShortBuffer'
     */
    public putSync(var0: java_lang_Short | number): ShortBuffer | null;
    // ================== Method equals ==================
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    public equals(var0: BasicOrJavaType | null): Promise<boolean>;
    // ================== Method equals ==================
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    public equalsSync(var0: BasicOrJavaType | null): boolean;
    // ================== Method toString ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public toString(): Promise<string>;
    // ================== Method toString ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public toStringSync(): string;
    // ================== Method hashCode ==================
    /**
     * @return original return type: 'int'
     */
    public hashCode(): Promise<number>;
    // ================== Method hashCode ==================
    /**
     * @return original return type: 'int'
     */
    public hashCodeSync(): number;
    // ================== Method compareTo ==================
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'int'
     */
    public compareTo(var0: BasicOrJavaType | null): Promise<number>;
    // ================== Method compareTo ==================
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'int'
     */
    public compareToSync(var0: BasicOrJavaType | null): number;
    /**
     * @param var0 original type: 'java.nio.ShortBuffer'
     * @return original return type: 'int'
     */
    public compareTo(var0: ShortBufferClass | null): Promise<number>;
    /**
     * @param var0 original type: 'java.nio.ShortBuffer'
     * @return original return type: 'int'
     */
    public compareToSync(var0: ShortBufferClass | null): number;
    // ================== Method isDirect ==================
    /**
     * @return original return type: 'boolean'
     */
    public isDirect(): Promise<boolean>;
    // ================== Method isDirect ==================
    /**
     * @return original return type: 'boolean'
     */
    public isDirectSync(): boolean;
    // ================== Method hasArray ==================
    /**
     * @return original return type: 'boolean'
     */
    public hasArray(): Promise<boolean>;
    // ================== Method hasArray ==================
    /**
     * @return original return type: 'boolean'
     */
    public hasArraySync(): boolean;
    // ================== Method array ==================
    /**
     * @return original return type: 'short[]'
     */
    public array(): Promise<(number)[] | null>;
    // ================== Method array ==================
    /**
     * @return original return type: 'short[]'
     */
    public arraySync(): (number)[] | null;
    /**
     * @return original return type: 'java.lang.Object'
     */
    public array(): Promise<BasicOrJavaType | null>;
    /**
     * @return original return type: 'java.lang.Object'
     */
    public arraySync(): BasicOrJavaType | null;
    // ================== Method arrayOffset ==================
    /**
     * @return original return type: 'int'
     */
    public arrayOffset(): Promise<number>;
    // ================== Method arrayOffset ==================
    /**
     * @return original return type: 'int'
     */
    public arrayOffsetSync(): number;
    // ================== Method wrap ==================
    /**
     * @param var0 original type: 'short[]'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'java.nio.ShortBuffer'
     */
    public static wrap(var0: (java_lang_Short | number)[] | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number): Promise<ShortBuffer | null>;
    // ================== Method wrap ==================
    /**
     * @param var0 original type: 'short[]'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'java.nio.ShortBuffer'
     */
    public static wrapSync(var0: (java_lang_Short | number)[] | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number): ShortBuffer | null;
    /**
     * @param var0 original type: 'short[]'
     * @return original return type: 'java.nio.ShortBuffer'
     */
    public static wrap(var0: (java_lang_Short | number)[] | null): Promise<ShortBuffer | null>;
    /**
     * @param var0 original type: 'short[]'
     * @return original return type: 'java.nio.ShortBuffer'
     */
    public static wrapSync(var0: (java_lang_Short | number)[] | null): ShortBuffer | null;
    // ================== Method allocate ==================
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.nio.ShortBuffer'
     */
    public static allocate(var0: java_lang_Integer | number): Promise<ShortBuffer | null>;
    // ================== Method allocate ==================
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.nio.ShortBuffer'
     */
    public static allocateSync(var0: java_lang_Integer | number): ShortBuffer | null;
    // ================== Method duplicate ==================
    /**
     * @return original return type: 'java.nio.ShortBuffer'
     */
    public duplicate(): Promise<ShortBuffer | null>;
    // ================== Method duplicate ==================
    /**
     * @return original return type: 'java.nio.ShortBuffer'
     */
    public duplicateSync(): ShortBuffer | null;
    // ================== Method slice ==================
    /**
     * @return original return type: 'java.nio.ShortBuffer'
     */
    public slice(): Promise<ShortBuffer | null>;
    // ================== Method slice ==================
    /**
     * @return original return type: 'java.nio.ShortBuffer'
     */
    public sliceSync(): ShortBuffer | null;
    // ================== Method asReadOnlyBuffer ==================
    /**
     * @return original return type: 'java.nio.ShortBuffer'
     */
    public asReadOnlyBuffer(): Promise<ShortBuffer | null>;
    // ================== Method asReadOnlyBuffer ==================
    /**
     * @return original return type: 'java.nio.ShortBuffer'
     */
    public asReadOnlyBufferSync(): ShortBuffer | null;
    // ================== Method compact ==================
    /**
     * @return original return type: 'java.nio.ShortBuffer'
     */
    public compact(): Promise<ShortBuffer | null>;
    // ================== Method compact ==================
    /**
     * @return original return type: 'java.nio.ShortBuffer'
     */
    public compactSync(): ShortBuffer | null;
    // ================== Method order ==================
    /**
     * @return original return type: 'java.nio.ByteOrder'
     */
    public order(): Promise<java_nio_ByteOrder | null>;
    // ================== Method order ==================
    /**
     * @return original return type: 'java.nio.ByteOrder'
     */
    public orderSync(): java_nio_ByteOrder | null;
    // ================== Method limit ==================
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.nio.Buffer'
     */
    public limit(var0: java_lang_Integer | number): Promise<java_nio_Buffer | null>;
    // ================== Method limit ==================
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.nio.Buffer'
     */
    public limitSync(var0: java_lang_Integer | number): java_nio_Buffer | null;
    /**
     * @return original return type: 'int'
     */
    public limit(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    public limitSync(): number;
    // ================== Method clear ==================
    /**
     * @return original return type: 'java.nio.Buffer'
     */
    public clear(): Promise<java_nio_Buffer | null>;
    // ================== Method clear ==================
    /**
     * @return original return type: 'java.nio.Buffer'
     */
    public clearSync(): java_nio_Buffer | null;
    // ================== Method remaining ==================
    /**
     * @return original return type: 'int'
     */
    public remaining(): Promise<number>;
    // ================== Method remaining ==================
    /**
     * @return original return type: 'int'
     */
    public remainingSync(): number;
    // ================== Method position ==================
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.nio.Buffer'
     */
    public position(var0: java_lang_Integer | number): Promise<java_nio_Buffer | null>;
    // ================== Method position ==================
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.nio.Buffer'
     */
    public positionSync(var0: java_lang_Integer | number): java_nio_Buffer | null;
    /**
     * @return original return type: 'int'
     */
    public position(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    public positionSync(): number;
    // ================== Method capacity ==================
    /**
     * @return original return type: 'int'
     */
    public capacity(): Promise<number>;
    // ================== Method capacity ==================
    /**
     * @return original return type: 'int'
     */
    public capacitySync(): number;
    // ================== Method mark ==================
    /**
     * @return original return type: 'java.nio.Buffer'
     */
    public mark(): Promise<java_nio_Buffer | null>;
    // ================== Method mark ==================
    /**
     * @return original return type: 'java.nio.Buffer'
     */
    public markSync(): java_nio_Buffer | null;
    // ================== Method reset ==================
    /**
     * @return original return type: 'java.nio.Buffer'
     */
    public reset(): Promise<java_nio_Buffer | null>;
    // ================== Method reset ==================
    /**
     * @return original return type: 'java.nio.Buffer'
     */
    public resetSync(): java_nio_Buffer | null;
    // ================== Method flip ==================
    /**
     * @return original return type: 'java.nio.Buffer'
     */
    public flip(): Promise<java_nio_Buffer | null>;
    // ================== Method flip ==================
    /**
     * @return original return type: 'java.nio.Buffer'
     */
    public flipSync(): java_nio_Buffer | null;
    // ================== Method rewind ==================
    /**
     * @return original return type: 'java.nio.Buffer'
     */
    public rewind(): Promise<java_nio_Buffer | null>;
    // ================== Method rewind ==================
    /**
     * @return original return type: 'java.nio.Buffer'
     */
    public rewindSync(): java_nio_Buffer | null;
    // ================== Method hasRemaining ==================
    /**
     * @return original return type: 'boolean'
     */
    public hasRemaining(): Promise<boolean>;
    // ================== Method hasRemaining ==================
    /**
     * @return original return type: 'boolean'
     */
    public hasRemainingSync(): boolean;
    // ================== Method isReadOnly ==================
    /**
     * @return original return type: 'boolean'
     */
    public isReadOnly(): Promise<boolean>;
    // ================== Method isReadOnly ==================
    /**
     * @return original return type: 'boolean'
     */
    public isReadOnlySync(): boolean;
    // ================== Method wait ==================
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    public wait(var0: java_lang_Long | bigint | number, var1: java_lang_Integer | number): Promise<void>;
    // ================== Method wait ==================
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    public waitSync(var0: java_lang_Long | bigint | number, var1: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'void'
     */
    public wait(var0: java_lang_Long | bigint | number): Promise<void>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'void'
     */
    public waitSync(var0: java_lang_Long | bigint | number): void;
    /**
     * @return original return type: 'void'
     */
    public wait(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    public waitSync(): void;
    // ================== Method getClass ==================
    /**
     * @return original return type: 'java.lang.Class'
     */
    public getClass(): Promise<java_lang_Class>;
    // ================== Method getClass ==================
    /**
     * @return original return type: 'java.lang.Class'
     */
    public getClassSync(): java_lang_Class;
    // ================== Method notify ==================
    /**
     * @return original return type: 'void'
     */
    public notify(): Promise<void>;
    // ================== Method notify ==================
    /**
     * @return original return type: 'void'
     */
    public notifySync(): void;
    // ================== Method notifyAll ==================
    /**
     * @return original return type: 'void'
     */
    public notifyAll(): Promise<void>;
    // ================== Method notifyAll ==================
    /**
     * @return original return type: 'void'
     */
    public notifyAllSync(): void;
}

/**
 * Class java.nio.ShortBuffer.
 *
 * This actually imports the java class for further use.
 * The class ShortBufferClass only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export class ShortBuffer extends importClass<typeof ShortBufferClass>("java.nio.ShortBuffer") {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor() {
        super();
    }
}
export default ShortBuffer;