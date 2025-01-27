'use client'

import Title from "@/app/components/Typography/Title";
import Input from "@/app/components/Input/Input";
import Switch from "@/app/components/Switch/Switch";
import { useAuth } from "@/app/context/AuthContext";
import { updateUserProfile } from "@/app/services/userService";
import { useState, useEffect } from "react";
import { useUserProfile } from "@/app/context/UserProfileContext";
import { User } from "@/app/types/user";

const OnboardingPage = () => {
    const { user, supabase } = useAuth()
    const { userProfile, refreshProfile } = useUserProfile()
    const [formData, setFormData] = useState<User>({
        professionalRole: userProfile?.professional_role || '',
        experienceTime: userProfile?.experience_time || '',
        showName: userProfile?.show_name ?? true,
        showPhoto: userProfile?.show_photo ?? true
    });

    useEffect(() => {
        if (userProfile) {
            setFormData({
                professionalRole: userProfile.professional_role || '',
                experienceTime: userProfile.experience_time || '',
                showName: userProfile.show_name ?? true,
                showPhoto: userProfile.show_photo ?? true
            })
        }
    }, [userProfile])
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSwitchChange = (field: 'showName' | 'showPhoto') => {
        setFormData(prev => ({
            ...prev,
            [field]: !prev[field]
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (!user?.id) throw new Error('User not found');
            await updateUserProfile(supabase, user.id, formData);
            await refreshProfile();
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    return (
        <main className="flex flex-col items-start justify-start py-8">
            <Title className="mb-16">
                Cuéntanos un poco más sobre ti
            </Title>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label
                        className="text-3xl font-semibold"
                        htmlFor="professionalRole"
                    >
                        ¿Cuál es tu rol principal?
                    </label>
                    <Input
                        name="professionalRole"
                        placeholder="Ejemplo: Desarrollador full stack"
                        className="text-xl mt-4"
                        value={formData?.professionalRole}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="text-3xl font-semibold"
                        htmlFor="experienceTime"
                    >
                        ¿Cuánto tiempo de experiencia profesional tienes?
                    </label>
                    <Input
                        name="experienceTime"
                        placeholder="Ejemplo: 2 años"
                        className="text-xl mt-4"
                        value={formData?.experienceTime}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-6">
                    <label className="text-3xl font-semibold mb-3">
                        ¿Quieres mostrar tu nombre y foto de perfil?
                    </label>
                    <div className="flex flex-row items-center gap-8 mt-6">
                        <div className="flex flex-col justify-center gap-4">
                            <span className="text-2xl font-medium">Foto de perfil</span>
                            <span className="text-2xl font-medium">Nombre</span>
                        </div>
                        <div className="flex flex-col items-center justify-between gap-7">
                            <Switch
                                checked={formData?.showPhoto}
                                onChange={() => handleSwitchChange("showPhoto")}
                            />
                            <Switch
                                checked={formData?.showName}
                                onChange={() => handleSwitchChange("showName")}
                            />
                        </div>
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-1/3 bg-black text-white py-2 px-4 rounded-xl hover:bg-gray-800 transition text-xl font-bold"
                >
                    Guardar
                </button>
            </form>
        </main>
    );
};

export default OnboardingPage;
