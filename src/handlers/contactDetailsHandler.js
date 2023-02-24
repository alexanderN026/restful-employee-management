import ContactDetailsStore from '../models/contactDetails.js';

export const index = async (req, res, next) => {
    try {
        const [contactDetails, _] = await ContactDetailsStore.index();

        res.status(200).json({ count: contactDetails.length, contactDetails });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

export const create = async (req, res, next) => {
    try {
        let { firstName, lastName, email, password } = req.body;
        let contact_details = new ContactDetailsStore(
            firstName,
            lastName,
            email,
            password
        );

        contact_details = await contact_details.create();

        res.status(201).json({ message: 'contact created' });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

export const show = async (req, res, next) => {
    try {
        let contact_detailsId = req.params.id;
        let [contact_details, _] = await ContactDetailsStore.show(
            contact_detailsId
        );

        res.status(200).json({ contact_details: contact_details[0] });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

export const update = async (req, res, next) => {
    try {
        let contact_detailsId = req.params.id;
        let { firstName, lastName, email, password } = req.body;
        let contact_details = new ContactDetailsStore(
            firstName,
            lastName,
            email,
            password
        );

        contact_details = await contact_details.update(contact_detailsId);

        res.status(200).json({ message: 'contact details updated' });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

export const remove = async (req, res, next) => {
    try {
        let contact_detailsId = req.params.id;

        await ContactDetailsStore.remove(contact_detailsId);

        res.status(200).json({ message: 'contact removed' });
    } catch (error) {
        console.log(error);
        next(error);
    }
};
